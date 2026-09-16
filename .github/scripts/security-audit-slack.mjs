// pnpm audit v1 / npm audit v2 JSON 결과에서 HIGH/CRITICAL advisory 만 뽑아
// 척척(chuk-chuk)을 멘션하는 Slack 메시지 payload(JSON)를 stdout 으로 출력한다.
//
// dedup: 이전 실행에서 이미 알린 집합(knownFile)과 비교해 **신규 advisory 만** 알린다.
//  - 오늘 알림 = (오늘 HIGH+) − (이전 HIGH+)
//  - 실행 후 knownFile 을 "오늘 HIGH+ 전체"로 갱신한다 → 해결됐다 재등장하면 다시 신규로 잡힌다.
//  - HIGH+ 신규가 없으면 아무것도 출력하지 않는다(→ 워크플로우가 알림을 안 보냄).
//  - audit 파싱 실패 시 knownFile 을 건드리지 않고 실패로 종료한다(상태 유실·스팸 방지).
//
// 사용: node security-audit-slack.mjs <audit.json> <knownFile>
// 환경변수: CHUKCHUK_USER_ID (척척 Bot User ID, 예: U0BMD5G277D)

import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const CHUKCHUK = process.env.CHUKCHUK_USER_ID || 'U0BMD5G277D';
const MAX = 15; // 한 메시지에 너무 많으면 잘라낸다(스레드 도배 방지)

const auditPath = process.argv[2];
const knownPath = process.argv[3];
if (!auditPath) process.exit(0);

let data;
try {
  data = JSON.parse(readFileSync(auditPath, 'utf8'));
} catch {
  console.error('Invalid audit JSON; dedup state preserved.');
  process.exit(1);
}

// npm v2의 via 문자열은 다른 패키지 참조이므로 실제 advisory 객체만 수집한다.
let advisories;
if (data?.error) {
  console.error('Audit registry returned an error; dedup state preserved.');
  process.exit(1);
} else if (data?.advisories && typeof data.advisories === 'object' && !Array.isArray(data.advisories)) {
  advisories = Object.values(data.advisories);
} else if (data?.auditReportVersion === 2 && data.vulnerabilities && typeof data.vulnerabilities === 'object' && !Array.isArray(data.vulnerabilities)) {
  advisories = Object.values(data.vulnerabilities).flatMap((v) =>
    (v.via || []).filter((a) => a && typeof a === 'object').map((a) => ({
      ...a, module_name: a.name || v.name, vulnerable_versions: a.range,
    })),
  );
} else {
  console.error('Unsupported audit JSON; dedup state preserved.');
  process.exit(1);
}

const isHigh = (a) => a && (a.severity === 'high' || a.severity === 'critical');

// GHSA url 기준 중복 제거(같은 취약점이 여러 경로로 잡혀도 1건).
const currentByUrl = new Map();
for (const a of advisories.filter(isHigh)) {
  const url = a.url || (a.id ? `https://www.npmjs.com/advisories/${a.id}` : null);
  if (!url || currentByUrl.has(url)) continue;
  currentByUrl.set(url, {
    url,
    name: a.module_name || a.name || '(unknown)',
    severity: a.severity,
    vuln: a.vulnerable_versions || '',
  });
}

// 이전에 알린 집합(url) 로드
let known = new Set();
if (knownPath && existsSync(knownPath)) {
  try {
    const arr = JSON.parse(readFileSync(knownPath, 'utf8'));
    if (Array.isArray(arr)) known = new Set(arr);
  } catch {
    /* 손상 시 빈 집합으로 취급(= 오늘 것 전부 신규로 1회 알림) */
  }
}

// 신규 = 오늘 HIGH+ 중 이전에 안 알린 것
const fresh = [...currentByUrl.values()].filter((a) => !known.has(a.url));

// known 갱신: 오늘 HIGH+ 전체(해결된 건 자동 제외)
if (knownPath) {
  try {
    writeFileSync(knownPath, JSON.stringify([...currentByUrl.keys()]));
  } catch {
    /* 저장 실패해도 알림은 진행 */
  }
}

if (fresh.length === 0) process.exit(0); // 신규 없음 → 알림 없음

const shown = fresh.slice(0, MAX);
const lines = shown.map(
  (a) => `• *${a.name}* (${a.severity}): ${a.url}${a.vuln ? `  \`${a.vuln}\`` : ''}`,
);
const more = fresh.length > MAX ? `\n…외 ${fresh.length - MAX}건` : '';

const repository = process.env.GITHUB_REPOSITORY || 'korea-digital-asset-corp-website/koda-website';
const server = process.env.GITHUB_SERVER_URL || 'https://github.com';
const repositoryUrl = `${server}/${repository}`;
const runLink = process.env.GITHUB_RUN_ID
  ? ` · <${repositoryUrl}/actions/runs/${process.env.GITHUB_RUN_ID}|Audit 실행 보기>`
  : '';

const text =
  `<@${CHUKCHUK}> :rotating_light: *신규* HIGH+ 취약점 *${fresh.length}건* 감지 ` +
  `\n*레포:* <${repositoryUrl}|${repository}>${runLink}\n*범위:* prod 의존성\n` +
  `각 advisory 를 열어 이 레포의 서비스 *런타임에 조치가 필요한지* 판정해줘 (필요/불요/확인필요 + 근거).\n\n` +
  lines.join('\n') +
  more;

process.stdout.write(JSON.stringify({ text }));
