# KODA 디자인 스타일 가이드 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** KODA 웹사이트의 디자인 규칙을 문서로 고정해, AI 프롬프팅만으로 기존 사이트와 이질감 없는 새 페이지를 만들 수 있게 한다.

**Architecture:** 문서 3개를 만든다. `docs/design/style-guide.md`가 정본이고, `docs/design/page-prompt.md`(프롬프트 템플릿 2계층)와 루트 `CLAUDE.md`(하드 규칙)는 정본에서 파생된다. 코드는 수정하지 않는다 — 순수 문서 작업이며, 유일한 코드 접촉은 마지막 검증 단계에서 만들고 되돌리는 임시 샘플 페이지다.

**Tech Stack:** Markdown 문서. 대상 코드베이스는 Next.js 15 App Router + React 19 + Tailwind CSS v4 + next-intl 4 + TypeScript.

**Spec:** `docs/superpowers/specs/2026-07-30-design-style-guide-design.md`

## Global Constraints

- **기존 코드를 수정하지 않는다.** `src/**`와 `messages/**`에 대한 영구 변경은 이 계획의 범위 밖이다. Task 6의 임시 샘플 페이지만 예외이며 그 태스크 안에서 삭제한다.
- **`globals.css`를 수정하지 않는다.** 토큰 추가·변경·삭제 모두 금지다.
- **문서 언어는 한국어**로 쓴다. 코드 식별자·클래스명·파일 경로는 원형을 유지한다.
- **모든 값은 소스에서 확인한 실제 값**이어야 한다. 추정값·근사값·"약 ~px" 표현을 쓰지 않는다.
- **작업 브랜치는 `docs/style-guide`**다. 태스크마다 커밋한다.
- 문서에서 코드를 인용할 때는 `file_path:line` 형식으로 근거 위치를 밝힌다.
- 정본(`style-guide.md`)이 바뀌면 파생 문서 2개를 함께 갱신해야 한다는 사실을 정본 머리말에 명시한다.

### 확정된 표준 (스펙 3.3 — 문서에 이 값 그대로 실린다)

| 항목 | 표준 |
|---|---|
| 컬러 참조 | Tailwind 유틸 클래스 (`text-gray-700`, `bg-primary-800`). 하드코딩 hex 금지, `text-[var(--color-*)]` 임의값 금지 |
| 섹션 여백 | 기본 `pt-[72px] pb-20 lg:py-32` / 와이드 `pt-[72px] pb-20 lg:py-[170px]` |
| 코너 반경 | `rounded-[4px]` 고정. 예외는 `rounded-full`(원형 배지)뿐 |
| 알파 토큰 | `bg-gray-5020` 유틸 사용 (CLI v4.3.3으로 생성 확인됨) |
| secondary 팔레트 | 신규 코드에서 사용 금지 |
| 컨테이너 | 스펙 3.5의 3종 문자열 |

---

## File Structure

| 파일 | 책임 |
|---|---|
| `docs/design/style-guide.md` (신규) | 정본. 9개 섹션. 사람이 읽는 원칙 + AI가 참조하는 실제 코드 |
| `docs/design/page-prompt.md` (신규) | 프롬프트 템플릿 2계층(레포용 / 번들용) |
| `CLAUDE.md` (신규, 저장소 루트) | 이 저장소 작업 시 자동 적용되는 하드 규칙 |

정본이 크므로 태스크를 섹션 단위로 나눈다. 각 태스크는 정본에 섹션을 덧붙이고 그 섹션의 모든 값을 소스와 대조한 뒤 커밋한다. 문서 작업이라 실행 테스트가 없으므로 **"대조 검증"이 테스트 역할**을 한다 — 각 태스크는 자기가 적은 값이 소스와 일치함을 명령어 출력으로 증명해야 한다.

## Task 순서와 의존 관계

```
Task 1 (골격 + 성격 + 컬러)
  → Task 2 (타이포그래피)
  → Task 3 (레이아웃 + 모션)
  → Task 4 (컴포넌트 레시피 + 페이지 골격 + i18n + 알려진 불일치)  ← 정본 완성
  → Task 5 (page-prompt.md + CLAUDE.md)                          ← 파생 문서
  → Task 6 (생성 검증 + 빌드 확인)                                 ← 전체 검증
```

---

### Task 1: 정본 골격 · 디자인 성격 · 컬러 섹션

**Files:**
- Create: `docs/design/style-guide.md`

**Interfaces:**
- Consumes: 없음 (첫 태스크)
- Produces: `docs/design/style-guide.md`의 섹션 1~2. 이후 태스크는 이 파일 끝에 섹션을 덧붙인다. 문서의 머리말 형식(제목 → 갱신 규칙 → 목차)과 섹션 번호 체계(`## 1.` ~ `## 9.`)를 확정하므로 이후 태스크가 그 형식을 따른다.

- [ ] **Step 1: 컬러 토큰 실제 값을 추출해 대조 기준을 만든다**

Run:
```bash
sed -n '9,44p' "src/app/[locale]/globals.css"
```

Expected: `@theme {`로 시작해 `--color-primary-50` ~ `--color-gray-900`까지 컬러 토큰 32개가 출력된다. primary 10개, secondary 10개, gray 12개(`gray-5050`, `gray-5020` 포함).

이 출력이 섹션 2 컬러 표의 유일한 근거다. 여기 없는 값을 표에 적으면 안 된다.

- [ ] **Step 2: 실사용 빈도를 확인해 "실제로 쓰이는 색"을 파악한다**

Run:
```bash
grep -rhoE '(bg|text|border)-(primary|secondary|gray)-[0-9]+|(bg|text|border)-\[?(var\(--color-[a-z0-9-]+\)|#[0-9a-fA-F]{3,8})\]?|bg-black|bg-white|text-white' src --include="*.tsx" | sort | uniq -c | sort -rn
```

Expected: `text-gray-700`, `border-gray-50`, `text-white`, `bg-white`, `text-gray-900`, `text-primary-700` 등이 상위에 오고, `secondary` 계열은 **한 건도 나오지 않는다**. `text-[#919db6]` 1건이 하드코딩 hex 사례로 나온다.

`secondary`가 0건임을 여기서 확인해야 스펙 3.3-5(신규 사용 금지)의 근거가 된다. 만약 1건 이상 나오면 그 파일을 확인하고 문서에 사실대로 기재한다.

- [ ] **Step 3: `docs/design/style-guide.md`를 만들고 머리말·목차·섹션 1~2를 쓴다**

머리말은 아래 형식을 그대로 쓴다.

```markdown
# KODA 디자인 스타일 가이드

이 문서는 KODA 웹사이트의 디자인 규칙 **정본**이다. 새 페이지·새 섹션을 만들 때 여기 적힌 값을 따른다.

- 설계 근거: `docs/superpowers/specs/2026-07-30-design-style-guide-design.md`
- 파생 문서: `docs/design/page-prompt.md`(프롬프트 템플릿), `CLAUDE.md`(하드 규칙)
- **이 문서를 고치면 파생 문서 2개도 함께 고쳐야 한다.** 파생 문서는 이 문서의 요약·인라인 사본이므로 자동으로 따라오지 않는다.
- 이 문서는 신규 코드의 기준이다. 기존 코드에는 여기 표준과 다른 부분이 남아 있으며, 그 목록은 9절에 있다.

## 목차

1. 디자인 성격
2. 컬러
3. 타이포그래피
4. 레이아웃
5. 컴포넌트 레시피
6. 모션
7. 페이지 유형별 골격
8. i18n 필수 규칙
9. 알려진 불일치
```

섹션 1은 스펙 3.1의 정본 문단을 그대로 옮긴다. 인용 블록(`>`)으로 감싸고, 그 뒤에 아래 한 문장을 덧붙인다.

```markdown
개별 규칙이 답하지 못하는 판단이 생기면 이 문단을 기준으로 결정한다. "더 화려하게"·"더 둥글게"·"색을 하나 더"는 이 성격에서 멀어지는 방향이다.
```

섹션 2는 아래 구조로 쓴다.

```markdown
## 2. 컬러

### 2.1 토큰 전체 (globals.css:10-43)

#### primary — 딥그린 계열

| 토큰 | hex | 유틸 예 | 실사용 |
|---|---|---|---|
| `primary-50` | `#e6fbf5` | `bg-primary-50` | 2차 버튼 hover 배경 |
| ... (10개 전부, Step 1 출력값 그대로) |

#### secondary — 블루 계열 (신규 사용 금지)

| 토큰 | hex |
|---|---|
| ... (10개 전부) |

정의만 되어 있고 `src/**`에서 실사용이 **0건**이다(Step 2 확인). 신규 코드에서 쓰지 않는다. 브랜드 강조는 primary 계열이 담당한다. 토큰 정의는 삭제하지 않는다.

#### gray — 초록기 도는 뉴트럴

| 토큰 | hex | 유틸 예 | 실사용 |
|---|---|---|---|
| ... (13개 전부. gray-5050 = gray-50의 50% 알파, gray-5020 = 20% 알파임을 비고에 적는다) |

`gray-900`이 `#00160f`로 순검정이 아니라 초록기가 섞인 값이다. 이 때문에 화면 전체가 primary와 한 계열로 묶인다. 뉴트럴을 중성회색(`#888` 류)으로 바꾸면 이 통일감이 깨진다.

### 2.2 시맨틱 별칭

토큰 이름은 값을 알려주지만 용도를 알려주지 않는다. 아래 별칭은 용도를 고정한다. 별칭은 문서상의 개념이고, 코드에서는 오른쪽 클래스를 그대로 쓴다(토큰을 새로 추가하지 않는다).

| 별칭 | 클래스 | 용도 |
|---|---|---|
(스펙 3.4의 10행을 그대로 옮긴다)

### 2.3 조합 규칙

- **섹션 배경은 3종만 교차한다** — `bg-white`(기본) / `bg-gray-5020`(옅은 워시) / `bg-primary-600`(문의 유도). 이 외의 배경색을 섹션에 쓰지 않는다.
- **초록 배경 위 버튼은 검정이다** — `bg-primary-600` 섹션의 CTA는 `bg-gray-900`이며 hover는 `bg-gray-700`이다. 초록 위에 흰 버튼이나 더 진한 초록 버튼을 쓰지 않는다. (근거: `src/components/home/ContactSection.tsx:26`)
- **흰/워시 배경 위 1차 버튼은 딥그린이다** — `bg-primary-800`, hover `bg-primary-900`, 텍스트 `text-white`. (근거: `src/components/home/HeroSection.tsx:44`)
- **면 구분은 테두리로 한다** — 카드·표·헤더 경계는 `border border-gray-50`(1px). 섀도는 모달·팝업·드롭다운처럼 실제로 떠 있는 요소에만 쓴다.
- **텍스트 3단계** — 제목 `text-gray-900`(기본값이므로 생략 가능), 본문 `text-gray-700`, 출처·캡션 `text-gray-500`.

### 2.4 금지 사항

- **하드코딩 hex 금지.** `text-[#919db6]` 같은 형태를 새로 쓰지 않는다. 필요한 색이 토큰에 없으면 토큰 표에서 가장 가까운 값을 쓴다.
- **`text-[var(--color-gray-700)]` 형태 금지.** `@theme`의 모든 토큰은 유틸 클래스를 생성하므로(`bg-gray-5020`까지 포함) 임의값 문법이 필요 없다. `text-gray-700`으로 쓴다.
- **`primary-500`(`#00d998`) 대면적 사용 금지.** 밝은 민트는 로고·아이콘의 포인트이고, 섹션 배경이나 버튼 면으로 쓰면 사이트 성격에서 벗어난다. 배경이 필요하면 `primary-600`을 쓴다.
- **`secondary` 계열 금지.** (2.1 참조)
- **새 색 도입 금지.** 팔레트에 없는 색이 필요하다고 느껴지면 대개 레이아웃이나 위계로 풀어야 하는 문제다.
```

표의 "실사용" 열은 Step 2 출력에서 확인된 것만 적는다. 확인되지 않은 토큰은 `—`로 둔다.

- [ ] **Step 4: 적은 hex 값이 소스와 일치하는지 대조한다**

Run:
```bash
node -e "
const fs=require('fs');
const css=fs.readFileSync('src/app/[locale]/globals.css','utf8');
const doc=fs.readFileSync('docs/design/style-guide.md','utf8');
const tokens=[...css.matchAll(/--color-([a-z0-9-]+):\s*(#[0-9a-fA-F]+);/g)].map(m=>[m[1],m[2]]);
let missing=[],wrong=[];
for(const [name,hex] of tokens){
  const re=new RegExp('\`'+name.replace(/[-]/g,'\\\\-')+'\`');
  if(!re.test(doc)) { missing.push(name); continue; }
  if(!doc.includes(hex)) wrong.push(name+' '+hex);
}
console.log('토큰 총개수:',tokens.length);
console.log('문서에 없는 토큰:',missing.length?missing:'없음');
console.log('hex 불일치:',wrong.length?wrong:'없음');
// 문서에 있으나 소스에 없는 hex 색출
const known=new Set(tokens.map(t=>t[1].toLowerCase()));
const docHex=[...doc.matchAll(/\\\`(#[0-9a-fA-F]{6})\\\`/g)].map(m=>m[1].toLowerCase());
const ghosts=[...new Set(docHex)].filter(h=>!known.has(h)&&h!=='#ffffff'&&h!=='#000000');
console.log('소스에 없는 유령 hex:',ghosts.length?ghosts:'없음');
"
```

Expected:
```
토큰 총개수: 32
문서에 없는 토큰: 없음
hex 불일치: 없음
소스에 없는 유령 hex: 없음
```

세 줄 중 하나라도 값이 나오면 문서를 고치고 다시 실행한다. `#ffffff`/`#000000`은 토큰이 아닌 Tailwind 기본색이라 예외로 둔다.

- [ ] **Step 5: 커밋**

```bash
git add docs/design/style-guide.md
git commit -m "docs(style-guide): 디자인 성격과 컬러 섹션 작성

globals.css의 컬러 토큰 33개를 전수 기재하고 시맨틱 별칭 10종,
조합 규칙 5개, 금지 사항 5개를 정리했다. secondary 팔레트는
src 전체에서 실사용 0건임을 확인해 신규 사용 금지로 명시했다."
```

---

### Task 2: 타이포그래피 섹션

**Files:**
- Modify: `docs/design/style-guide.md` (섹션 3 추가)

**Interfaces:**
- Consumes: Task 1이 만든 파일과 섹션 번호 체계. 섹션 2 뒤에 `## 3. 타이포그래피`를 덧붙인다.
- Produces: 섹션 3. Task 4의 컴포넌트 레시피와 Task 5의 번들용 프롬프트가 여기 정한 스케일 표를 참조한다.

- [ ] **Step 1: 타이포 토큰과 유틸 정의를 추출한다**

Run:
```bash
sed -n '45,96p' "src/app/[locale]/globals.css"
grep -n '@utility text-\|font-korean .text-\|font-english .text-' "src/app/[locale]/globals.css"
```

Expected: 첫 명령은 Display(한/영 각 3개), Headline 4개, Title 3개, Label 3개, Body 4개, Caption 2개의 px 값과 line-height 4종·letter-spacing 4종, breakpoint 7종을 출력한다. 둘째 명령은 `@utility` 선언 19개와 `.font-korean .text-display-*` 3개, `.font-english .text-display-*` 3개를 출력한다.

- [ ] **Step 2: 언어별 분기가 어디서 걸리는지 확인한다**

Run:
```bash
grep -n 'fontClass\|font-korean\|font-english' "src/app/[locale]/layout.tsx"
```

Expected:
```
88:  const fontClass = locale === 'ko' ? 'font-korean' : 'font-english';
91:    <html lang={locale || 'ko'} className={fontClass}>
```

이 두 줄이 언어별 Display 크기 전환의 전부다. 문서에 이 메커니즘을 설명해야 새 페이지 작성자가 `text-display-lg` 하나만 쓰면 한/영이 자동 처리된다는 걸 안다.

- [ ] **Step 3: 모바일→데스크톱 웨이트 하강 패턴의 실사용을 확인한다**

Run:
```bash
grep -rc 'font-medium lg:font-normal' src --include="*.tsx" | grep -v ':0'
```

Expected: `AchievementSection.tsx`, `MarketStatsSection.tsx`, `SecuritySection.tsx`, `SolutionsSection.tsx`, `FaqAccordion.tsx`, `HeroSection.tsx`(home/services) 등 여러 파일에서 1건 이상 나온다.

이 패턴이 우연이 아니라 관례임을 확인해야 문서에 규칙으로 적을 수 있다. 만약 2건 이하로만 나오면 규칙이 아니라 "관찰된 경향"으로 약하게 기재한다.

- [ ] **Step 4: 섹션 3을 작성한다**

아래 구조로 쓴다.

```markdown
## 3. 타이포그래피

### 3.1 폰트

| 언어 | 1순위 | 2순위 | 로드 방식 |
|---|---|---|---|
| 한국어 | Pretendard Variable | Inter | `@font-face` + 로컬 woff2 (`/fonts/PretendardVariable.woff2`), weight 45~920 |
| 영어 | Inter | Pretendard Variable | `@font-face` + 로컬 ttf variable, weight 100~900 |

`<html>`에 `font-korean` 또는 `font-english` 클래스가 붙고(`src/app/[locale]/layout.tsx:88-91`), 그 클래스가 `body`의 font-family 순서를 바꾼다. 둘 다 variable font이므로 `font-medium`·`font-semibold`·`font-bold`를 자유롭게 쓸 수 있다.

### 3.2 스케일

**모든 텍스트는 아래 유틸 클래스로 크기를 지정한다.** `text-[18px]`이나 `text-lg` 같은 임의값·Tailwind 기본 크기를 쓰지 않는다. 유틸 하나가 font-size·line-height·letter-spacing 3개를 함께 고정하므로, 임의값을 쓰면 행간과 자간이 어긋난다.

#### Display — 히어로 전용, 언어별 크기 자동 전환

| 유틸 | 한국어 | 영어 | line-height | letter-spacing |
|---|---|---|---|---|
| `text-display-lg` | 55px | 57px | 1.2 | -0.25px |
| `text-display-md` | 44px | 45px | 1.2 | 0 |
| `text-display-sm` | 34px | 36px | 1.2 | 0 |

같은 클래스를 쓰면 `<html>`의 언어 클래스에 따라 크기가 알아서 바뀐다. 언어별로 클래스를 나눠 쓸 필요가 없다.

#### Headline / Title / Label / Body / Caption — 언어 공통

(각 그룹별 표. Step 1 출력의 px·line-height·letter-spacing 값을 그대로 적고, 각 유틸의 실제 사용처를 "쓰임" 열에 적는다)

### 3.3 계층 조합

반응형은 **모바일 값 + `lg:` 데스크톱 값**을 짝지어 쓴다. 자주 쓰이는 짝:

| 역할 | 클래스 | 근거 |
|---|---|---|
| 랜딩 페이지 h1 | `text-headline-lg lg:text-display-lg font-bold` | `src/components/home/HeroSection.tsx:35` |
| 랜딩 섹션 h2 | `text-headline-sm lg:text-headline-lg font-bold` | `src/components/home/SecuritySection.tsx:27` |
| 랜딩 하위 그룹 h3 | `text-headline-xs lg:text-headline-md font-bold` | `src/components/home/SolutionsSection.tsx:120` |
| 카드 제목 h4 | `text-title-md lg:text-title-lg font-semibold` | `src/components/home/SolutionsSection.tsx:93` |
| 랜딩 본문 | `text-body-md lg:text-body-xl text-gray-700` | `src/components/home/SecuritySection.tsx:55` |
| 문서 페이지 h1 | `text-headline-sm lg:text-headline-lg font-bold` | `src/app/[locale]/work-guidelines/page.tsx:10` |
| 버튼 라벨 | `text-label-md lg:text-label-lg font-semibold` | `src/components/home/HeroSection.tsx:44` |
| 출처·주석 | `text-caption-lg lg:text-body-md text-gray-500 font-medium` | `src/components/home/MarketStatsSection.tsx:82` |

문서형 페이지는 위 조합을 직접 쓰지 않고 `src/components/typography`의 `H1`·`H2`·`H3`·`P`를 쓴다(5.6 참조).

### 3.4 웨이트 하강 규칙

본문 텍스트는 **모바일에서 `font-medium`, 데스크톱에서 `font-normal`** 로 떨어뜨린다.

\```tsx
<p className="text-body-md lg:text-body-xl font-medium lg:font-normal text-gray-700">
\```

작은 화면에서는 글자가 작아 얇은 웨이트가 흐려 보이고, 큰 화면에서는 굵으면 답답해 보이기 때문이다. 제목에는 적용하지 않는다(제목은 `font-bold` 또는 `font-semibold` 고정).
```

- [ ] **Step 5: 적은 px 값이 소스와 일치하는지 대조한다**

Run:
```bash
node -e "
const fs=require('fs');
const css=fs.readFileSync('src/app/[locale]/globals.css','utf8');
const doc=fs.readFileSync('docs/design/style-guide.md','utf8');
const sizes=[...css.matchAll(/--font-size-([a-z0-9-]+):\s*(\d+)px;/g)].map(m=>[m[1],m[2]]);
let bad=[];
for(const [name,px] of sizes){
  const util=name.replace(/-ko\$|-en\$/,'');
  if(!doc.includes('text-'+util)) bad.push('유틸 누락: text-'+util);
  if(!doc.includes(px+'px')) bad.push('px 누락: '+name+' = '+px+'px');
}
console.log('font-size 토큰:',sizes.length);
console.log(bad.length?bad:'전부 일치');
"
grep -c 'text-\[1[0-9]px\]\|text-\[2[0-9]px\]\|text-xs\b\|text-sm\b\|text-base\b\|text-lg\b\|text-xl\b' docs/design/style-guide.md || echo "임의 크기 예시 없음(정상)"
```

Expected: 첫 명령이 `font-size 토큰: 22` / `전부 일치`를 출력한다(Display가 한/영 각 3개로 중복 정의돼 있어 유틸 19개에 대해 토큰은 22개다). 둘째 명령은 `임의 크기 예시 없음(정상)` 또는 `0`을 출력한다 — 금지 예시로 인용한 경우가 있다면 그 줄이 "쓰지 않는다" 문맥인지 눈으로 확인한다.

- [ ] **Step 6: 커밋**

```bash
git add docs/design/style-guide.md
git commit -m "docs(style-guide): 타이포그래피 섹션 작성

6단계 스케일 20개 토큰의 px·행간·자간을 전수 기재하고, 한/영
Display 자동 전환 메커니즘과 모바일→데스크톱 웨이트 하강 규칙을
실제 사용처 근거와 함께 정리했다."
```

---

### Task 3: 레이아웃 · 모션 섹션

**Files:**
- Modify: `docs/design/style-guide.md` (섹션 4, 6 추가)

**Interfaces:**
- Consumes: Task 1~2의 파일. 섹션 3 뒤에 `## 4. 레이아웃`을 쓰고, 섹션 5(컴포넌트 레시피)는 Task 4가 채우므로 `## 5.` 자리를 비워두지 않고 **섹션 6을 먼저 쓴 뒤 Task 4가 5를 그 사이에 삽입**한다. 순서 혼란을 막기 위해 이 태스크에서는 `## 4.`와 `## 6.`을 문서 끝에 순서대로 붙이고, Task 4가 `## 5.`를 4와 6 사이에 삽입한다.
- Produces: 섹션 4(컨테이너 3종, 섹션 여백 2단계, 그리드 패턴, 브레이크포인트), 섹션 6(fade-up 규칙, Spline 조건).

- [ ] **Step 1: 컨테이너 3종의 실제 문자열을 확인한다**

Run:
```bash
echo "--- 랜딩 섹션 ---"
grep -rho 'max-w-\[1440px\] w-full px-5 lg:px-10 mx-auto' src --include="*.tsx" | sort | uniq -c
echo "--- 문서 본문/목록 ---"
grep -rhno 'max-w-\[1440px\][^"]*' "src/app/[locale]" --include="page.tsx" | sort | uniq -c
```

Expected: 랜딩 섹션 문자열이 여러 건 나오고, 문서 페이지는 스펙 3.5의 3종(본문형 `mb-[240px]`+`whitespace-pre-line`, 목록형 `mb-[180px]`+`min-h`, news `lg:px-[100px]`)이 나온다.

- [ ] **Step 2: 브레이크포인트를 확인한다**

Run:
```bash
grep -n 'breakpoint' "src/app/[locale]/globals.css"
```

Expected: `xs: 475px`, `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `xl2: 1300px`, `2xl: 1536px` 7종.

`xl2`는 Tailwind 기본이 아닌 커스텀이라 문서에 명시해야 한다. 실사용 여부도 확인한다:

```bash
grep -rc 'xl2:\|xs:' src --include="*.tsx" | grep -v ':0' || echo "xs/xl2 실사용 없음"
```

- [ ] **Step 3: 스크롤 애니메이션 훅의 실제 파라미터를 확인한다**

Run:
```bash
sed -n '11,16p' src/hooks/useScrollAnimation.ts
grep -rho 'transition-all duration-800 ease-out' src --include="*.tsx" | wc -l
grep -rho "opacity-100 translate-y-0' : 'opacity-0 translate-y-20" src --include="*.tsx" | wc -l
```

Expected: 훅 기본값이 `threshold = 0.1`, `rootMargin = '-200px 0px'`, `triggerOnce = true`로 나온다. 두 grep은 각각 10건 이상 나온다(랜딩 섹션 대부분이 이 조합을 쓴다).

- [ ] **Step 4: 섹션 4를 작성한다**

```markdown
## 4. 레이아웃

### 4.1 컨테이너

컨테이너는 페이지 유형에 따라 3종이다. 아래 문자열을 **그대로** 쓴다.

| 종류 | 클래스 문자열 | 사용처 |
|---|---|---|
(스펙 3.5의 3행 + news 예외 설명)

랜딩형은 좌우 여백이 좁아(`lg:px-10` = 40px) 카드 그리드가 넓게 퍼지고, 문서형은 좁혀서(`lg:px-[200px]`) 한 줄 길이를 읽기 편한 범위로 묶는다. 이 차이가 두 트랙의 인상을 가른다.

문서 목록형의 `min-h-[486px] lg:min-h-[788px]`은 항목이 적을 때 푸터가 화면 중간으로 올라붙는 것을 막는 장치다. 목록 페이지를 새로 만들 때 빼먹지 않는다.

### 4.2 섹션 여백

| 단계 | 클래스 | 언제 |
|---|---|---|
| 기본 | `pt-[72px] pb-20 lg:py-32` | 대부분의 랜딩 섹션 |
| 와이드 | `pt-[72px] pb-20 lg:py-[170px]` | 강조 섹션(솔루션·문의처럼 페이지의 무게중심이 되는 곳) |

모바일은 두 단계 모두 동일하다(`pt-[72px] pb-20`) — 작은 화면에서 여백을 더 벌리면 스크롤만 길어진다. 데스크톱에서만 128px / 170px로 갈린다.

### 4.3 그리드 패턴

랜딩 섹션에서 반복되는 3가지 배치:

**2열 분할** — 텍스트와 시각물을 좌우로 나눌 때
\```tsx
<div className="grid lg:grid-cols-2 items-center">
\```

**세로→가로 전환** — 모바일 세로 스택, 데스크톱 가로 배치
\```tsx
<div className="flex flex-col lg:flex-row gap-8">
\```

**모바일 순서 뒤집기** — 데스크톱은 텍스트가 왼쪽, 모바일은 시각물이 위
\```tsx
<div className="order-2 lg:order-1">{/* 텍스트 */}</div>
<div className="order-1 lg:order-2">{/* 시각물 */}</div>
\```
(근거: `src/components/home/HeroSection.tsx:34,51`)

카드를 나열할 때는 `grid` 대신 `flex flex-col lg:flex-row gap-8`을 쓰고 카드에 `w-full lg:w-[432px]` 같은 고정폭을 준다(`src/components/home/SolutionsSection.tsx:89,121`).

### 4.4 브레이크포인트

| 이름 | 값 | 비고 |
|---|---|---|
(7종 전부. `xs`와 `xl2`가 커스텀임을 명시하고 Step 2에서 확인한 실사용 여부를 적는다)

**실질적으로 `lg`(1024px) 하나가 기준선이다.** 이 사이트의 반응형은 대부분 "모바일 값 + `lg:` 데스크톱 값" 2단계로 처리된다. `md`나 `xl`로 중간 단계를 추가하는 것은 기존 패턴에서 벗어난다.
```

- [ ] **Step 5: 섹션 6을 작성한다**

```markdown
## 6. 모션

모션은 절제한다. **진입 애니메이션 1종 + hover 색 전환**이 전부다. 회전·스케일·바운스·패럴랙스·스크롤 연동 변형을 쓰지 않는다.

### 6.1 진입 fade-up

랜딩 섹션은 뷰포트에 들어올 때 한 번 나타난다. `useScrollAnimation` 훅과 조건부 클래스를 짝지어 쓴다.

\```tsx
'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ExampleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`pt-[72px] pb-20 lg:py-32 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* ... */}
    </section>
  );
};
\```

훅 기본값은 그대로 쓴다 — `threshold: 0.1`, `rootMargin: '-200px 0px'`, `triggerOnce: true`(`src/hooks/useScrollAnimation.ts:11-15`). `rootMargin`이 -200px이라 섹션이 화면에 충분히 들어온 뒤 시작하고, `triggerOnce`라 되돌아가도 다시 재생되지 않는다. 값을 바꾸면 다른 섹션과 리듬이 어긋난다.

**히어로 섹션에는 쓰지 않는다.** 첫 화면은 스크롤 없이 보이므로 진입 애니메이션이 의미가 없다.

### 6.2 Spline 3D

3D 씬은 **히어로에만** 쓴다. 다른 섹션에 넣으면 페이지 무게중심이 흐트러지고 로딩 비용도 커진다.

\```tsx
'use client';

import { useState, useEffect } from 'react';
import SplineScene from '@/components/common/SplineScene';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);
  if (!isMounted) return null;

  return (
    <div className="max-w-[1440px] w-full px-5 lg:px-10 mx-auto">
      <section className="mx-auto overflow-x-hidden">
        <div className={`grid lg:grid-cols-2 items-center lg:pt-10 transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">{/* 텍스트 */}</div>
          <SplineScene
            scene="https://prod.spline.design/<SCENE_ID>/scene.splinecode"
            className="order-1 lg:order-2 [&_canvas]:!w-full [&_canvas]:!h-auto pointer-events-none [&_canvas]:!scale-[1.0] lg:[&_canvas]:!scale-[1.2]"
            onSplineLoaded={() => setIsLoaded(true)}
            showOverlay={false}
          />
        </div>
      </section>
    </div>
  );
};
\```

세 가지가 필수다.
- `isMounted` 가드 — Spline은 SSR에서 렌더링할 수 없어 hydration 불일치가 난다.
- `onSplineLoaded` + `opacity` 전환(`duration-500`) — 씬이 로드되기 전 빈 캔버스가 보이는 것을 막는다.
- `pointer-events-none` — 3D 씬이 스크롤을 가로채지 않게 한다.

`scene` URL은 Spline에서 발행한 씬마다 다르다. 새 씬이 없으면 3D를 쓰지 말고 정적 이미지(`next/image`)로 대체한다.

### 6.3 hover

`transition-colors`만 쓴다. 배경색·글자색 변화 외의 hover 효과(들어올림, 확대, 테두리 굵어짐)를 쓰지 않는다.

| 요소 | hover |
|---|---|
| 1차 버튼 | `bg-primary-800` → `hover:bg-primary-900` |
| 2차 버튼 | 배경 없음 → `hover:bg-primary-50` |
| 역상 버튼(초록 배경 위) | `bg-gray-900` → `hover:bg-gray-700` |
| 아코디언 제목 | `text-gray-900` → `group-hover:text-primary-700` |

아코디언 펼침만 예외적으로 `transition-all duration-300 ease-in-out`과 `max-h` 전환을 쓴다(5.5 참조).
```

- [ ] **Step 6: 적은 클래스 문자열이 소스에 실제로 존재하는지 대조한다**

Run:
```bash
node -e "
const fs=require('fs'),cp=require('child_process');
const doc=fs.readFileSync('docs/design/style-guide.md','utf8');
// 문서가 '그대로 쓴다'고 지시한 핵심 문자열들
const must=[
  'max-w-[1440px] w-full px-5 lg:px-10 mx-auto',
  'pt-[72px] pb-20 lg:py-32',
  'pt-[72px] pb-20 lg:py-[170px]',
  'transition-all duration-800 ease-out',
  'opacity-0 translate-y-20',
  'grid lg:grid-cols-2 items-center',
];
for(const s of must){
  if(!doc.includes(s)){ console.log('문서에 누락:',s); continue; }
  const hits=cp.execSync('grep -rlF '+JSON.stringify(s)+' src --include=\"*.tsx\" | wc -l').toString().trim();
  console.log((hits==='0'?'소스에 없음(확인필요): ':'OK('+hits+'개 파일): ')+s);
}
"
```

Expected: 6줄 모두 `OK(n개 파일)`. `lg:py-[170px]`만 소스에 없을 수 있다 — 스펙 3.3-2에서 기존 3종(`lg:py-32`, `lg:pt-[170px] lg:pb-[200px]`, `lg:pt-[180px] lg:pb-[170px]`)을 2단계로 새로 정한 값이기 때문이다. 이 경우 `소스에 없음`이 정상이며, 섹션 9(알려진 불일치)에 그 사실이 기재되는지를 Task 4에서 확인한다.

- [ ] **Step 7: 커밋**

```bash
git add docs/design/style-guide.md
git commit -m "docs(style-guide): 레이아웃과 모션 섹션 작성

컨테이너 3종, 섹션 여백 2단계, 그리드 패턴 3종, 브레이크포인트
7종을 정리하고, 진입 fade-up·Spline·hover 규칙을 실제 파라미터
값과 필수 가드 설명을 붙여 문서화했다."
```

---

### Task 4: 컴포넌트 레시피 · 페이지 골격 · i18n · 알려진 불일치

**Files:**
- Modify: `docs/design/style-guide.md` (섹션 5를 4와 6 사이에 삽입, 섹션 7~9를 문서 끝에 추가)

**Interfaces:**
- Consumes: Task 1~3의 섹션 1·2·3·4·6. 섹션 5는 2절의 시맨틱 별칭과 3절의 스케일 표를 참조한다.
- Produces: `docs/design/style-guide.md` 완성본(섹션 1~9 전부). Task 5의 두 파생 문서가 이 완성본에서 발췌·인라인한다.

- [ ] **Step 1: 레시피로 옮길 원본 코드를 모은다**

Run:
```bash
sed -n '42,47p' src/components/home/HeroSection.tsx
sed -n '134,140p' src/components/home/SolutionsSection.tsx
sed -n '24,29p' src/components/home/ContactSection.tsx
sed -n '88,96p' src/components/home/SolutionsSection.tsx
sed -n '36,56p' src/components/home/MarketStatsSection.tsx
sed -n '32,67p' src/components/faq/FaqAccordion.tsx
```

Expected: 순서대로 1차 버튼(Typeform `PopupButton`), 2차 버튼(테두리 `Link` + 화살표), 역상 버튼, 아이콘 카드(`FeatureCard`), 통계 카드(흰/검정 2분할), 아코디언 항목이 출력된다.

레시피는 이 출력을 옮기되 **표준에 맞게 정리한다** — `bg-[var(--color-primary-800)]`는 `bg-primary-800`으로, `border-[var(--color-gray-50)]`는 `border-gray-50`으로 바꿔 적는다. 원본과 달라지는 부분은 섹션 9에 불일치로 기재한다.

- [ ] **Step 2: 문서형 컴포넌트의 export 목록을 확인한다**

Run:
```bash
cat src/components/typography/index.tsx
grep -n '^export function' src/components/typography/Lists.tsx
```

Expected: `index.tsx`가 `H1, H2, H3, P, Ol, Ul, Li, TableContainer, Thead, Tbody, Tr, Th, Td`를 내보내고, `Lists.tsx`에는 배럴에 없는 `SubOl`, `SubLi`, `SubCircledOl`, `SubCircledLi`가 추가로 있다.

배럴 누락은 문서에 반드시 적어야 한다 — 서브 리스트를 쓰려면 `@/components/typography/Lists`에서 직접 import해야 하고, 이걸 모르면 새 문서 페이지 작성 시 import 오류가 난다(`src/app/[locale]/work-guidelines/page.tsx:2`가 실제로 그렇게 하고 있다).

- [ ] **Step 3: i18n 사용 패턴을 확인한다**

Run:
```bash
cat src/i18n/brMap.tsx
grep -n 'locales\|defaultLocale\|localePrefix' src/i18n/routing.ts
node -e "const j=require('./messages/ko.json');console.log('상위 네임스페이스:',Object.keys(j).join(', '))"
node -e "
const ko=require('./messages/ko.json'),en=require('./messages/en.json');
const a=Object.keys(ko).sort().join(','),b=Object.keys(en).sort().join(',');
console.log('ko/en 상위 키 일치:',a===b?'예':'아니오 → '+a+' vs '+b);
"
grep -rc 't.rich(' src --include="*.tsx" | grep -v ':0' | wc -l
grep -rc 't.raw(' src --include="*.tsx" | grep -v ':0' | wc -l
```

Expected: `brMap`이 `brPc`/`brMo`/`brAll` 3개를 내보내고, 라우팅은 `locales: ['ko','en']`, `defaultLocale: 'ko'`, `localePrefix: 'as-needed'`다. 상위 네임스페이스 13개가 ko/en 양쪽 일치한다. `t.rich` 사용 파일이 10개 이상, `t.raw` 사용 파일이 5개 이상 나온다.

- [ ] **Step 4: 섹션 5를 4와 6 사이에 삽입한다**

각 레시피는 **복붙 가능한 완성된 코드 블록**이어야 한다. "위와 비슷하게"·"적절히 조정"으로 넘기지 않는다.

```markdown
## 5. 컴포넌트 레시피

아래 코드는 그대로 복사해 쓸 수 있다. 클래스 문자열을 임의로 줄이거나 값을 바꾸지 않는다.

### 5.1 1차 버튼 (딥그린 솔리드)

흰색·워시 배경 위의 주 행동. 문의는 Typeform 팝업으로 연결한다.

\```tsx
import { PopupButton } from '@typeform/embed-react';

<PopupButton
  id="bZKbfTne"
  className="text-white flex justify-center font-semibold text-label-md lg:text-label-lg lg:max-w-[180px] w-full mt-11 px-5 lg:px-[22px] py-4 lg:py-5 bg-primary-800 hover:bg-primary-900 transition-colors rounded-[4px] cursor-pointer"
>
  {t('cta.inquiry')}
</PopupButton>
\```

`id="bZKbfTne"`는 현재 사이트가 쓰는 문의 폼 ID다. 다른 폼이 필요하면 담당자에게 새 ID를 받는다. 일반 링크라면 `PopupButton` 대신 `next/link`의 `Link`에 같은 className을 쓴다.

모바일에서 `w-full`로 꽉 차고 데스크톱에서 `lg:max-w-[180px]`로 좁아지는 것이 이 사이트 버튼의 기본 거동이다.

### 5.2 2차 버튼 (테두리 + 화살표)

"자세히 보기"처럼 부차적인 이동.

\```tsx
import Link from 'next/link';
import IcArrowIcon from '@/public/assets/icons/main_ic_arrow.svg';

<Link
  href="/services"
  className="mt-12 lg:mt-0 text-label-lg w-full lg:max-w-[200px] justify-center flex items-center text-primary-800 font-semibold pl-[32px] pr-[22px] py-4 lg:py-[22px] border border-primary-700 rounded-[4px] hover:bg-primary-50 transition-colors"
>
  {t('cta.learnMore')}
  <IcArrowIcon />
</Link>
\```

좌우 패딩이 비대칭(`pl-[32px] pr-[22px]`)인 것은 오른쪽 화살표 아이콘이 시각적 여백을 만들기 때문이다. 의도된 값이다.

### 5.3 역상 버튼 (초록 배경 위 검정)

`bg-primary-600` 섹션 안의 CTA. 이 조합이 사이트의 시그니처다.

\```tsx
<PopupButton
  id="bZKbfTne"
  className="w-full lg:w-[165px] font-semibold px-5 py-4 lg:px-[22px] lg:py-[20px] bg-gray-900 text-label-md lg:text-label-lg rounded-[4px] text-white hover:bg-gray-700 transition-colors cursor-pointer"
>
  {t('cta.contact')}
</PopupButton>
\```

### 5.4 아이콘 카드

기능·특징을 아이콘과 함께 나열할 때. 아이콘은 124px 정사각 테두리 박스에 담는다.

\```tsx
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="flex flex-col space-y-1 lg:space-y-2 w-full lg:w-[432px]">
    <div className="flex justify-center items-center mb-4 lg:mb-5 w-[124px] h-[124px] border border-gray-50 rounded-[4px] bg-white">
      {icon}
    </div>
    <h4 className="text-title-md lg:text-title-lg font-semibold">{title}</h4>
    <p className="text-gray-700 font-medium lg:font-normal text-body-md lg:text-body-xl">{description}</p>
  </div>
);
\```

나열은 `<div className="flex flex-col lg:flex-row gap-8">`로 감싼다. 카드 3개까지가 한 줄에 들어간다(432px × 3 + gap = 1360px).

### 5.5 통계 카드 (흰/검정 2분할)

수치 두 개를 대비시킬 때. 오른쪽 검정 칸이 KODA 수치다.

\```tsx
<div className="rounded-[4px] border border-gray-50 overflow-hidden">
  <div className="flex flex-row">
    <div className="flex-1 bg-white p-6 lg:p-8">
      <div className="text-center space-y-2">
        <h3 className="text-title-sm lg:text-title-lg font-semibold">{t('stats.total.label')}</h3>
        <div className="text-title-lg lg:text-headline-md font-semibold lg:font-bold">
          {t('stats.total.amount')}
        </div>
      </div>
    </div>
    <div className="flex-1 bg-black p-6 lg:p-8">
      <div className="text-center space-y-2">
        <h3 className="text-white text-title-sm lg:text-title-lg font-semibold">{t('stats.koda.label')}</h3>
        <div className="text-white text-title-lg lg:text-headline-md font-semibold lg:font-bold">
          {t('stats.koda.amount')}
        </div>
      </div>
    </div>
  </div>
</div>
\```

`overflow-hidden`이 있어야 자식의 배경색이 4px 코너를 넘지 않는다.

### 5.6 아코디언

FAQ처럼 접히는 목록. 접근성 속성(`aria-expanded`, `aria-controls`, `role="region"`)을 빼지 않는다.

\```tsx
'use client';

import { useState, useCallback } from 'react';
import ArrowIcon from '@/public/assets/icons/arrow.svg';

const [openItems, setOpenItems] = useState<Set<number>>(new Set());

const toggleItem = useCallback((id: number) => {
  setOpenItems((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
}, []);

// 항목 하나
<article className="border-b border-gray-50 last:border-b-0 group">
  <header>
    <button
      id={`faq-button-${item.id}`}
      onClick={() => toggleItem(item.id)}
      className="w-full flex items-center justify-between pt-4 pb-5 lg:py-8 text-left cursor-pointer"
      aria-expanded={isOpen}
      aria-controls={`faq-content-${item.id}`}
    >
      <h3 className="text-headline-xs lg:text-headline-sm font-bold pr-4 text-gray-900 group-hover:text-primary-700 transition-colors">
        {t(item.questionKey)}
      </h3>
      <span
        className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        aria-hidden="true"
      >
        <ArrowIcon className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
      </span>
    </button>
  </header>
  <div
    id={`faq-content-${item.id}`}
    role="region"
    aria-labelledby={`faq-button-${item.id}`}
    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-4 lg:pb-8' : 'max-h-0'}`}
  >
    <p className="text-body-md font-medium lg:font-normal lg:text-body-lg text-gray-700 leading-relaxed whitespace-pre-line">
      {t(item.answerKey)}
    </p>
  </div>
</article>
\```

`max-h-96`(384px)이 펼친 높이의 상한이다. 답변이 그보다 길면 잘리므로 긴 답변에는 값을 키운다.

### 5.7 문서형 텍스트 컴포넌트

약관·정책·지침 페이지는 클래스를 직접 쓰지 않고 `src/components/typography`의 컴포넌트를 쓴다.

| 컴포넌트 | 렌더 | import |
|---|---|---|
| `H1` / `H2` / `H3` | 제목 3단계 (`H2`는 `my-6` 포함) | `@/components/typography` |
| `P` | 본문 (`text-body-sm lg:text-body-lg my-6`) | `@/components/typography` |
| `Ol` / `Li` / `Ul` | 번호·불릿 목록 | `@/components/typography` |
| `TableContainer` / `Thead` / `Tbody` / `Tr` / `Th` / `Td` | 표 (가로 스크롤 포함) | `@/components/typography` |
| `SubOl` / `SubLi` / `SubCircledOl` / `SubCircledLi` | 서브 목록(①②③ 스타일) | **`@/components/typography/Lists`** — 배럴에 없어 직접 import해야 한다 |

서브 목록 4종이 `index.tsx` 배럴에서 빠져 있다. 배럴에서 import하면 오류가 나므로 `Lists`에서 직접 가져온다(`src/app/[locale]/work-guidelines/page.tsx:2`가 그 예다).

원형 숫자 목록은 `globals.css`의 `@counter-style circled-decimal`과 `.k-circleol`·`.k-subcircled-li` 클래스로 구현돼 있다. 직접 마크업하지 말고 컴포넌트를 쓴다.
```

- [ ] **Step 5: 섹션 7(페이지 유형별 골격)을 쓴다**

```markdown
## 7. 페이지 유형별 골격

### 7.1 랜딩형

파일 배치:
\```
src/app/[locale]/<route>/page.tsx        ← 섹션을 조립만 한다
src/components/<route>/HeroSection.tsx
src/components/<route>/XxxSection.tsx
src/components/<route>/index.ts          ← 배럴 export
\```

`page.tsx`는 조립과 locale 분기만 담당한다.

\```tsx
import { HeroSection, FeatureSection, ContactSection } from '@/components/about';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;

  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ContactSection />
    </>
  );
};

export default Page;
\```

섹션 순서는 홈의 흐름을 따른다: **히어로 → 신뢰 근거(실적·투자자·수치) → 역량(보안·보험) → 상세(솔루션) → 외부 증빙(미디어) → 문의**. 배경은 `bg-white`와 `bg-gray-5020`을 번갈아 쓰고 마지막 문의 섹션만 `bg-primary-600`으로 끝낸다.

각 섹션 컴포넌트의 기본 형태:

\```tsx
'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { brMap } from '@/i18n/brMap';

const FeatureSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('about.feature');

  return (
    <section
      ref={ref}
      className={`pt-[72px] pb-20 lg:py-32 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-5 lg:px-10 mx-auto">
        <h2 className="text-headline-sm lg:text-headline-lg font-bold">{t.rich('title', brMap)}</h2>
        <p className="text-body-md lg:text-body-xl font-medium lg:font-normal text-gray-700">
          {t.rich('description', brMap)}
        </p>
      </div>
    </section>
  );
};

export default FeatureSection;
\```

`bg-gray-5020` 섹션이면 `<section>`의 className에 그것을 추가한다. 컨테이너 `<div>`는 배경과 무관하게 항상 같다.

### 7.2 문서형

파일 배치: `src/app/[locale]/<route>/page.tsx` 하나로 끝낸다. 섹션 컴포넌트를 만들지 않는다.

\```tsx
import { H2, H3, Li, Ol, P } from '@/components/typography';
import { getTranslations } from 'next-intl/server';

const Page = async () => {
  const t = await getTranslations('exampleDoc');

  return (
    <section className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] px-5 lg:px-[200px] mx-auto whitespace-pre-line">
      <h1 className="text-headline-sm lg:text-headline-lg mb-14 lg:mb-[120px] font-bold">{t('title')}</h1>

      <H2 className="mt-16">{t('sections.first.title')}</H2>
      <P>{t('sections.first.body')}</P>

      <H3>{t('sections.first.detail.title')}</H3>
      <Ol>
        {t.raw('sections.first.detail.items').map((item: string, index: number) => (
          <Li key={index}>{item}</Li>
        ))}
      </Ol>
    </section>
  );
};

export default Page;
\```

특징 4가지.
- 서버 컴포넌트다(`'use client'` 없음). `getTranslations`를 `await`로 쓴다.
- 진입 애니메이션이 없다. 문서는 읽으러 온 화면이므로 나타나는 연출이 방해가 된다.
- `whitespace-pre-line`이 컨테이너에 있어 메시지 JSON의 줄바꿈이 그대로 살아난다.
- h1만 직접 클래스를 쓰고 나머지는 `H2`/`H3`/`P` 컴포넌트를 쓴다.

목록형 페이지(공지·FAQ)는 컨테이너를 문서 목록형(4.1)으로 바꾸고 `min-h`를 넣는다.
```

- [ ] **Step 6: 섹션 8(i18n 필수 규칙)을 쓴다**

```markdown
## 8. i18n 필수 규칙

**이 절을 건너뛰면 새 페이지는 반드시 깨진다.** 이 사이트에 하드코딩된 문구는 없다. 모든 텍스트가 `messages/ko.json`·`messages/en.json`을 거친다.

### 8.1 라우팅

`src/i18n/routing.ts` 설정: `locales: ['ko', 'en']`, `defaultLocale: 'ko'`, `localePrefix: 'as-needed'`.

`as-needed`라서 한국어는 `/notice`, 영어는 `/en/notice`가 된다. 페이지 파일은 `src/app/[locale]/` 아래에 만든다. 내부 링크는 `next/link`의 `Link`를 쓰되 `href`에 locale을 직접 붙이지 않는다 — next-intl이 처리한다.

### 8.2 메시지 파일 동시 수정

새 문구를 추가할 때 **`messages/ko.json`과 `messages/en.json`에 같은 키를 동시에** 넣는다. 한쪽만 넣으면 다른 언어에서 런타임 오류가 난다.

현재 상위 네임스페이스 13개: `header`, `footer`, `home`, `service`, `notice`, `faq`, `news`, `privacyPolicy`, `ethicalManagement`, `workGuidelines`, `cryptoWarning`, `meta`, `modal`.

새 페이지는 새 상위 네임스페이스를 하나 만든다. 네이밍은 라우트 이름의 camelCase다(`/about-us` → `aboutUs`).

키 구조는 컴포넌트 구조를 따른다.
\```json
{
  "about": {
    "hero": { "title": "...", "description": "...", "cta": { "inquiry": "..." } },
    "feature": { "title": "...", "items": ["...", "..."] }
  }
}
\```

### 8.3 세 가지 호출 방식

| 호출 | 용도 | 반환 |
|---|---|---|
| `t('key')` | 일반 문자열 | `string` |
| `t.rich('key', brMap)` | 줄바꿈 토큰이 들어간 문구 | `ReactNode` |
| `t.raw('key')` | 배열·객체 (목록 렌더링) | 원본 값 |

`t.raw`로 배열을 받을 때는 타입을 명시한다: `t.raw('items').map((item: string, index: number) => ...)`.

### 8.4 줄바꿈 토큰 (brMap)

디자인상 줄바꿈 위치를 지정해야 할 때 메시지 안에 태그를 넣고 `brMap`을 넘긴다.

\```tsx
import { brMap } from '@/i18n/brMap';

<h2>{t.rich('title', brMap)}</h2>
\```

\```json
{ "title": "안전한 디지털 자산<brPc></brPc>수탁 서비스" }
```

| 토큰 | 동작 |
|---|---|
| `<brPc></brPc>` | 데스크톱(≥1024px)에서만 줄바꿈 |
| `<brMo></brMo>` | 모바일(<1024px)에서만 줄바꿈 |
| `<brAll></brAll>` | 항상 줄바꿈 |

`brPc`/`brMo`는 `<br className="hidden lg:block" />` / `<br className="block lg:hidden" />`로 렌더링된다(`src/i18n/brMap.tsx`).

`t.rich` 없이 `t`로 호출하면 태그가 문자 그대로 화면에 나온다. 반대로 `whitespace-pre-line`이 걸린 문서형 컨테이너에서는 JSON의 실제 개행(`\n`)을 그대로 쓸 수 있어 `brMap`이 필요 없다.

### 8.5 메타데이터

새 페이지마다 `generateMetadata`를 붙인다. `meta` 네임스페이스에 항목을 추가하고 `alternates.languages`에 ko/en/x-default 3종을 채운다(`src/app/[locale]/layout.tsx:10-76` 참조).

`src/app/sitemap.ts`에도 새 라우트를 추가한다.
```

- [ ] **Step 7: 섹션 9(알려진 불일치)를 쓴다**

각 항목에 실제 파일·라인 근거를 붙인다. 근거는 아래로 확인한다.

Run:
```bash
echo "--- 하드코딩 hex ---"; grep -rn 'text-\[#\|bg-\[#\|border-\[#' src --include="*.tsx"
echo "--- var() 임의값 ---"; grep -rln 'var(--color-' src --include="*.tsx" | head -20
echo "--- rounded 혼용 ---"; grep -rn 'rounded-md\|rounded-lg\|rounded-\[8px\]\|rounded-\[12px\]' src --include="*.tsx"
echo "--- 섹션 여백 편차 ---"; grep -rn 'lg:pt-\[1[0-9][0-9]px\]\|lg:pb-\[1[0-9][0-9]px\]\|lg:pb-\[2[0-9][0-9]px\]\|lg:py-\[140px\]' src/components --include="*.tsx"
```

```markdown
## 9. 알려진 불일치

아래는 **기존 코드에 남아 있는 편차**다. 이 문서의 표준과 다르지만 의도적으로 수정하지 않았다(정리는 별도 작업). 새 코드는 표준을 따른다.

| # | 편차 | 표준 | 실제 위치 |
|---|---|---|---|
(Step 7 명령 출력을 근거로 6개 항목을 채운다. 각 항목의 "실제 위치"는 `파일:라인` 형식으로 적는다)

특히 주의할 것:
- **`src/components/typography/Table.tsx`** 는 표준과 세 군데 다르다 — `rounded-lg`(표준은 `rounded-[4px]`), `border-gray-200`(표준은 `border-gray-50`), `text-[var(--color-gray-700)]`(표준은 `text-gray-700`). 이 컴포넌트를 **그대로 쓰는 것은 괜찮다**(문서형 페이지의 기존 표와 생김새를 맞춰야 하므로). 다만 이 코드를 새 컴포넌트의 본으로 삼아 복사하지 않는다.
- **`lg:py-[170px]`(와이드 여백)은 소스에 아직 없다.** 기존 강조 섹션은 `lg:pt-[170px] lg:pb-[200px]`(솔루션), `lg:pt-[180px] lg:pb-[170px]`(문의), `lg:py-[140px]`(실적)로 각각 다르다. 이 문서가 상하 대칭 170px로 새로 정한 값이므로 첫 사용자는 새 페이지 작성자가 된다.
- **`/news`의 `lg:px-[100px]`** 은 다른 목록 페이지(`lg:px-[200px]`)와 다르다. 그리드 배치를 위한 의도적 예외이므로, 카드 그리드형 목록 페이지를 새로 만들면 `lg:px-[100px]`을 따른다.
```

- [ ] **Step 8: 정본 완성 검증 — 섹션 순서·누락·플레이스홀더를 확인한다**

Run:
```bash
echo "=== 섹션 순서 ==="
grep -n '^## ' docs/design/style-guide.md
echo "=== 플레이스홀더 검사 (0건이어야 함) ==="
grep -nE 'TBD|TODO|추후|나중에 채움|비슷하게|적절히|\.\.\. \(' docs/design/style-guide.md || echo "없음"
echo "=== 금지 패턴이 예시로 새어들어갔는지 ==="
grep -n 'text-\[var(--color-\|bg-\[var(--color-' docs/design/style-guide.md
```

Expected:
- 섹션이 `## 1.` ~ `## 9.` 순서대로 나온다(중간 번호 누락·역순 없음).
- 플레이스홀더 검사가 `없음`을 출력한다. `... (` 패턴은 이 계획서의 표 축약 표기이므로 실제 문서에는 남아 있으면 안 된다.
- 마지막 검사에서 나오는 `var(--color-...)`는 전부 "이렇게 쓰지 않는다" 문맥(2.4 금지 사항, 9절 불일치)이어야 한다. 레시피 코드 블록 안에 있으면 표준 유틸 클래스로 고친다.

- [ ] **Step 9: 커밋**

```bash
git add docs/design/style-guide.md
git commit -m "docs(style-guide): 컴포넌트 레시피·페이지 골격·i18n·불일치 목록 작성

버튼 3종, 아이콘 카드, 통계 카드, 아코디언, 문서형 텍스트
컴포넌트의 복붙 가능한 코드를 표준 유틸 클래스로 정리했다.
랜딩형·문서형 페이지 골격과 next-intl·brMap 필수 규칙을 넣고,
기존 코드의 편차 6건을 파일·라인 근거와 함께 기재했다."
```

---

### Task 5: 프롬프트 템플릿과 CLAUDE.md

**Files:**
- Create: `docs/design/page-prompt.md`
- Create: `CLAUDE.md`

**Interfaces:**
- Consumes: Task 4가 완성한 `docs/design/style-guide.md` 전체.
- Produces: 두 파생 문서. Task 6이 `page-prompt.md`의 레포용 템플릿을 실제로 사용해 검증한다.

- [ ] **Step 1: `docs/design/page-prompt.md`를 만든다**

두 템플릿을 각각 하나의 코드 블록에 담아 그대로 복사할 수 있게 한다.

```markdown
# 새 페이지 생성 프롬프트 템플릿

`docs/design/style-guide.md`를 기준으로 새 페이지를 만들 때 쓰는 프롬프트다. 상황에 따라 두 버전 중 하나를 쓴다.

- **레포용** — Claude Code 등에서 이 저장소를 대상으로 작업할 때. 가이드 파일을 직접 읽을 수 있으니 짧다.
- **번들용** — v0·ChatGPT처럼 저장소를 못 읽는 도구에 쓸 때. 규칙을 프롬프트 본문에 전부 담는다.

> 이 문서는 `docs/design/style-guide.md`의 파생본이다. 정본이 바뀌면 여기도 함께 고친다.

## 1. 레포용 템플릿

아래를 복사해 `<...>` 부분을 채운다.

\```
docs/design/style-guide.md를 먼저 읽고, 거기 정한 표준을 지켜 새 페이지를 만들어줘.

## 페이지 사양
- 라우트: <예: /about — src/app/[locale]/about/page.tsx>
- 페이지 유형: <랜딩형 | 문서형(본문) | 문서형(목록)>
- 목적: <이 페이지가 방문자에게 무엇을 하게 하려는가>
- i18n 네임스페이스: <예: about>

## 섹션 구성
1. <섹션 이름> — <담을 내용. 카피 초안이 있으면 그대로 적기>
2. <섹션 이름> — <...>
3. <섹션 이름> — <...>

## 참고
- 비슷한 기존 섹션: <예: src/components/home/SolutionsSection.tsx의 카드 나열을 참고>
- 3D/이미지: <Spline 씬 URL이 있으면 적기. 없으면 "없음 — 정적 이미지 또는 시각물 없이">

## 지켜야 할 것
- 스타일 가이드 2~6절의 값을 그대로 쓴다. 컬러·크기·여백을 임의로 조정하지 않는다.
- 텍스트는 전부 messages/ko.json과 messages/en.json에 키로 넣는다. 하드코딩하지 않는다.
- 컴포넌트가 필요하면 5절 레시피를 복사해 쓴다.
- 완료 후 npm run build가 통과하는지 확인한다.

## 하지 말 것
- globals.css를 수정하지 말 것 (토큰 추가·변경 금지)
- 기존 컴포넌트·페이지를 수정하지 말 것
- secondary 팔레트, 하드코딩 hex, rounded-[4px] 외의 코너, 새 라이브러리 추가 금지
\```

## 2. 번들용 템플릿 (자기완결)

외부 도구는 저장소를 읽을 수 없으므로 규칙을 전부 담는다. 아래 블록 전체를 복사한 뒤 마지막 "페이지 사양"만 채운다.

\```
너는 KODA(한국디지털에셋, 디지털자산 수탁 사업자) 웹사이트의 새 페이지를 만든다.
Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS v4 + next-intl 4 환경이다.

# 디자인 성격
(스타일 가이드 1절 정본 문단을 그대로 인라인)

# 컬러 (Tailwind @theme 토큰 — 유틸 클래스로 사용)
(2.1의 primary 10 / gray 13 토큰과 hex를 인라인. secondary는 "사용 금지"로 한 줄만)

## 역할
- 섹션 배경: bg-white / bg-gray-5020 / bg-primary-600 (이 3종만 교차)
- 1차 버튼: bg-primary-800, hover bg-primary-900, text-white
- 2차 버튼: border-primary-700, text-primary-800, hover bg-primary-50
- 초록 배경 위 버튼: bg-gray-900, hover bg-gray-700, text-white
- 경계선: border border-gray-50 (1px) — 섀도 대신 테두리로 면을 구분
- 텍스트: 제목 text-gray-900 / 본문 text-gray-700 / 캡션 text-gray-500

## 금지
하드코딩 hex, secondary 팔레트, primary-500 대면적 사용, rounded-[4px] 외의 코너 반경, 섀도(모달 제외), 팔레트에 없는 새 색

# 타이포그래피
폰트는 Pretendard Variable(한국어) / Inter(영어). 아래 유틸 클래스로만 크기를 지정하고 text-[18px]·text-lg 같은 임의값·기본 크기를 쓰지 않는다.
(3.2의 전체 스케일 표를 인라인 — 유틸명 / px / line-height / letter-spacing)

반응형은 "모바일 값 + lg: 데스크톱 값" 2단계다. 본문은 font-medium lg:font-normal로 웨이트를 떨어뜨린다.
자주 쓰는 조합:
(3.3의 조합 표 8행을 인라인)

# 레이아웃
- 컨테이너: (4.1의 3종 문자열 인라인)
- 섹션 여백: 기본 pt-[72px] pb-20 lg:py-32 / 와이드 pt-[72px] pb-20 lg:py-[170px]
- 브레이크포인트: 실질적으로 lg(1024px) 하나가 기준. md·xl로 중간 단계를 만들지 않는다.
- 그리드: grid lg:grid-cols-2 items-center / flex flex-col lg:flex-row gap-8 / order-2 lg:order-1

# 모션
진입 애니메이션 1종 + hover 색 전환이 전부다. 회전·스케일·바운스·패럴랙스 금지.
(6.1의 fade-up 코드 블록 인라인)

# 컴포넌트 코드
(5.1~5.6 레시피 코드 블록 전체 인라인)

# i18n
모든 텍스트를 messages/ko.json과 messages/en.json에 같은 키로 넣는다. 하드코딩 금지.
- t('key') 일반 문자열 / t.rich('key', brMap) 줄바꿈 토큰 포함 / t.raw('key') 배열
- 줄바꿈 토큰: <brPc></brPc> 데스크톱만, <brMo></brMo> 모바일만, <brAll></brAll> 항상
- 랜딩형 섹션은 'use client' + useTranslations, 문서형 페이지는 서버 컴포넌트 + await getTranslations

# 페이지 사양
- 라우트: <...>
- 페이지 유형: <랜딩형 | 문서형>
- 목적: <...>
- 섹션 구성: <...>

위 규칙을 지켜 page.tsx, 섹션 컴포넌트, ko.json/en.json 추가분을 모두 작성해라.
\```

## 3. 어느 쪽을 쓸지

| 상황 | 템플릿 |
|---|---|
| 이 저장소에서 Claude Code로 작업 | 레포용 |
| 외부 AI 도구로 초안만 뽑아 옮겨오기 | 번들용 |
| 초안을 받은 뒤 저장소에서 마무리 | 번들용으로 초안 → 레포용으로 "가이드에 맞게 정리해줘" |
```

번들용 템플릿의 `(...)` 로 표시한 부분은 **실제 내용으로 채운다.** 참조로 남기면 외부 도구에서 무용지물이 된다.

- [ ] **Step 2: `CLAUDE.md`를 만든다**

장문 금지. 하드 규칙만 쓴다.

```markdown
# KODA 웹사이트 작업 규칙

## 디자인

새 페이지·섹션·컴포넌트를 만들 때 **`docs/design/style-guide.md`를 먼저 읽는다.** 새 페이지 생성 프롬프트는 `docs/design/page-prompt.md`에 있다.

하드 규칙:

- 컬러는 Tailwind 유틸 클래스만 쓴다 — `text-gray-700` (O) / `text-[var(--color-gray-700)]`, `text-[#919db6]` (X)
- 코너 반경은 `rounded-[4px]` 고정. 원형 배지만 `rounded-full` 예외
- 텍스트 크기는 타이포 유틸만 쓴다 — `text-body-md`, `text-headline-lg` (O) / `text-[18px]`, `text-lg` (X)
- `secondary` 팔레트(블루)는 쓰지 않는다
- 섹션 여백은 `pt-[72px] pb-20 lg:py-32`(기본) 또는 `pt-[72px] pb-20 lg:py-[170px]`(와이드)
- 컨테이너는 랜딩 `max-w-[1440px] w-full px-5 lg:px-10 mx-auto` / 문서 `max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] px-5 lg:px-[200px] mx-auto whitespace-pre-line`
- 면 구분은 `border border-gray-50`(1px). 섀도는 모달·팝업만
- `src/app/[locale]/globals.css`의 토큰을 수정·추가하지 않는다

## i18n

- 화면에 보이는 문구를 하드코딩하지 않는다. `messages/ko.json`과 `messages/en.json`에 **같은 키를 동시에** 추가한다
- 줄바꿈이 필요하면 `t.rich('key', brMap)` + `<brPc></brPc>`/`<brMo></brMo>`/`<brAll></brAll>`
- 배열은 `t.raw('key')`로 받고 타입을 명시한다

## 구조

- 랜딩 페이지: `page.tsx`는 조립만, 섹션은 `src/components/<route>/XxxSection.tsx` + `index.ts` 배럴
- 문서 페이지: `page.tsx` 하나로 끝내고 `src/components/typography`의 `H1`·`H2`·`H3`·`P`·`Ol`·`Li`를 쓴다. 서브 목록(`SubCircledOl` 등)은 배럴에 없으니 `@/components/typography/Lists`에서 직접 import
- 새 라우트를 만들면 `src/app/sitemap.ts`와 `generateMetadata`(`alternates.languages` ko/en/x-default)를 함께 추가한다

## 검증

작업 후 `npm run build`와 `npm run lint`를 돌린다.
```

- [ ] **Step 3: 파생 문서가 정본과 어긋나지 않는지 대조한다**

Run:
```bash
node -e "
const fs=require('fs');
const g=fs.readFileSync('docs/design/style-guide.md','utf8');
const p=fs.readFileSync('docs/design/page-prompt.md','utf8');
const c=fs.readFileSync('CLAUDE.md','utf8');
// 파생 문서에 등장하는 핵심 표준 문자열이 정본에도 있어야 한다
const must=[
  'max-w-[1440px] w-full px-5 lg:px-10 mx-auto',
  'pt-[72px] pb-20 lg:py-32',
  'pt-[72px] pb-20 lg:py-[170px]',
  'rounded-[4px]',
  'bg-primary-800','bg-primary-900','bg-primary-600','bg-gray-5020',
  'border border-gray-50','text-gray-700','brPc','brMo','brAll',
];
let bad=[];
for(const s of must){
  if(!g.includes(s)) bad.push('정본 누락: '+s);
  if(!p.includes(s)&&!c.includes(s)) bad.push('파생 양쪽 모두 누락: '+s);
}
console.log(bad.length?bad:'핵심 표준 문자열 전부 정합');
// 번들용 템플릿에 미완성 참조가 남았는지
const stub=[...p.matchAll(/\(\d(\.\d)?[^)]*(인라인|그대로 옮긴다|참조)\)/g)].map(m=>m[0]);
console.log('번들용 미완성 참조:',stub.length?stub:'없음');
console.log('CLAUDE.md 줄 수:',c.split('\n').length);
"
```

Expected: `핵심 표준 문자열 전부 정합` / `번들용 미완성 참조: 없음`. `CLAUDE.md 줄 수`는 60줄 이하가 적정하다 — 넘으면 하드 규칙이 아닌 설명이 섞인 것이니 정본으로 옮긴다.

- [ ] **Step 4: 커밋**

```bash
git add docs/design/page-prompt.md CLAUDE.md
git commit -m "docs: 새 페이지 생성 프롬프트 템플릿과 CLAUDE.md 규칙 추가

레포용(가이드 참조형)과 번들용(자기완결형) 프롬프트 2계층을 만들고,
이 저장소 작업 시 자동 적용될 하드 규칙을 CLAUDE.md에 정리했다."
```

---

### Task 6: 생성 검증과 빌드 확인

**Files:**
- 임시 생성 후 삭제: `src/app/[locale]/__probe/page.tsx`, `src/components/__probe/*`
- 임시 수정 후 복구: `messages/ko.json`, `messages/en.json`
- Modify: `docs/design/style-guide.md`, `docs/design/page-prompt.md`, `CLAUDE.md` (검증에서 드러난 누락 반영)

**Interfaces:**
- Consumes: Task 5가 만든 `docs/design/page-prompt.md`의 레포용 템플릿.
- Produces: 검증을 통과한 문서 3개. 이 태스크 이후 임시 파일은 남지 않는다.

이 태스크의 목적은 **문서만 보고 페이지를 만들 수 있는지**를 확인하는 것이다. 만들다가 문서를 다시 봐야 하는 지점이 생기면 그게 문서의 빈 구멍이다.

- [ ] **Step 1: 검증 시작 전 작업 트리가 깨끗한지 확인한다**

Run:
```bash
git status --short
```

Expected: 출력이 비어 있다. 임시 파일을 만들기 전에 확인해야 나중에 무엇이 임시인지 구분할 수 있다. 출력이 있으면 먼저 커밋하거나 stash한다.

- [ ] **Step 2: 레포용 템플릿만 보고 임시 페이지를 만든다**

`docs/design/page-prompt.md`의 레포용 템플릿에 아래 사양을 채워 페이지를 만든다. **작업 중 `src/**`의 기존 코드를 열어보지 않는다** — 스타일 가이드만 참조한다. 기존 코드를 봐야 진행되는 지점이 생기면 그 사실을 메모한다(Step 5에서 문서에 반영한다).

사양:
- 라우트: `/__probe` — `src/app/[locale]/__probe/page.tsx`
- 페이지 유형: 랜딩형
- 목적: 스타일 가이드 검증용 임시 페이지
- i18n 네임스페이스: `probe`
- 섹션 구성:
  1. 히어로 — 제목 + 설명 + 1차 버튼 (Spline 없음, 시각물 없이)
  2. 특징 — `bg-gray-5020` 배경, 아이콘 카드 3개 나열 (아이콘은 기존 SVG 아무거나 재사용)
  3. 문의 — `bg-primary-600` 배경, 역상 버튼

만들 것: `src/app/[locale]/__probe/page.tsx`, `src/components/__probe/HeroSection.tsx`, `FeatureSection.tsx`, `ContactSection.tsx`, `index.ts`, 그리고 `messages/ko.json`·`messages/en.json`의 `probe` 네임스페이스.

- [ ] **Step 3: 빌드와 린트를 돌린다**

Run:
```bash
npm run lint 2>&1 | tail -20
npm run build 2>&1 | tail -30
```

Expected: 린트 오류 0건. 빌드가 성공하고 라우트 목록에 `/[locale]/__probe`가 나타난다.

실패하면 원인을 기록한다 — 실패 원인이 "스타일 가이드에 없던 정보"라면 그게 문서의 구멍이다(예: import 경로 관례, `next.config.ts`의 SVG 로더 설정, `params` 타입 시그니처).

- [ ] **Step 4: 생성 결과가 표준을 지켰는지 기계적으로 검사한다**

Run:
```bash
echo "=== 금지 패턴 (0건이어야 함) ==="
grep -rn 'var(--color-\|text-\[#\|bg-\[#\|rounded-md\|rounded-lg\|text-\[1[0-9]px\]\|secondary-' src/app/\[locale\]/__probe src/components/__probe
echo "=== 필수 패턴 ==="
grep -rn 'max-w-\[1440px\] w-full px-5 lg:px-10 mx-auto' src/components/__probe | wc -l
grep -rn 'rounded-\[4px\]' src/components/__probe | wc -l
grep -rn 'useTranslations\|getTranslations' src/components/__probe src/app/\[locale\]/__probe | wc -l
echo "=== 하드코딩 한글 문구 (0건이어야 함) ==="
grep -rnP '>[^<>{}\n]*[가-힣][^<>{}\n]*<' src/components/__probe src/app/\[locale\]/__probe || echo "없음"
echo "=== ko/en 키 대칭 ==="
node -e "
const ko=require('./messages/ko.json'),en=require('./messages/en.json');
const flat=(o,p='')=>Object.entries(o).flatMap(([k,v])=>v&&typeof v==='object'&&!Array.isArray(v)?flat(v,p+k+'.'):[p+k]);
const a=new Set(flat(ko.probe||{})),b=new Set(flat(en.probe||{}));
const onlyKo=[...a].filter(k=>!b.has(k)),onlyEn=[...b].filter(k=>!a.has(k));
console.log('ko 전용:',onlyKo.length?onlyKo:'없음');
console.log('en 전용:',onlyEn.length?onlyEn:'없음');
"
```

Expected: 금지 패턴 0건, 하드코딩 한글 `없음`, ko/en 전용 키 각각 `없음`. 컨테이너·`rounded-[4px]`·번역 훅은 1건 이상.

금지 패턴이 잡히면 **문서를 고친다** — 생성 결과만 고치면 다음 사람이 같은 실수를 반복한다. 규칙이 문서에 있는데도 어겼다면 눈에 띄지 않는 위치라는 뜻이므로 해당 규칙을 더 앞·더 강하게 배치한다.

- [ ] **Step 5: 검증에서 드러난 구멍을 문서에 반영한다**

Step 2~4에서 메모한 항목을 문서에 채운다. 흔히 빠지는 것들:
- SVG를 컴포넌트로 import하는 방식(`@svgr/webpack` 설정과 `@/public/assets/icons/*.svg` 경로 관례)
- `page.tsx`의 `params: Promise<{ locale: string }>` 타입 시그니처
- `index.ts` 배럴 작성 형식
- 이미지 사용 시 `next/image` + `@/public/...` static import 관례

반영 후 Task 4 Step 8의 플레이스홀더 검사와 Task 5 Step 3의 정합성 검사를 다시 돌린다.

Run:
```bash
grep -nE 'TBD|TODO|추후|비슷하게|적절히' docs/design/style-guide.md docs/design/page-prompt.md CLAUDE.md || echo "플레이스홀더 없음"
```

Expected: `플레이스홀더 없음`.

- [ ] **Step 6: 임시 파일을 전부 되돌린다**

Run:
```bash
rm -rf "src/app/[locale]/__probe" src/components/__probe
git checkout -- messages/ko.json messages/en.json
git status --short
```

Expected: `git status --short`에 `docs/` 와 `CLAUDE.md` 변경만 남고 `src/`·`messages/` 관련 항목은 없다. 남아 있으면 수동으로 정리한다.

- [ ] **Step 7: 임시 파일 제거 후 빌드가 여전히 통과하는지 확인한다**

Run:
```bash
npm run build 2>&1 | tail -15
```

Expected: 빌드 성공. 라우트 목록에 `__probe`가 **없다**. 이걸 확인해야 검증 잔여물이 남지 않았음을 안다.

- [ ] **Step 8: 커밋**

```bash
git add docs/design/style-guide.md docs/design/page-prompt.md CLAUDE.md
git commit -m "docs: 생성 검증 결과 반영

레포용 프롬프트만으로 임시 랜딩 페이지를 만들어 빌드·린트를
통과시키고, 그 과정에서 드러난 누락 정보를 문서에 채웠다.
검증용 임시 파일은 제거했다."
```

- [ ] **Step 9: 최종 상태를 확인한다**

Run:
```bash
git log --oneline main..HEAD
git diff --stat main..HEAD
```

Expected: 커밋 7개(스펙 1 + 계획 1 + Task 1~6 중 커밋한 5개... 실제 개수는 진행에 따라 다르다). `git diff --stat`에 `docs/**`와 `CLAUDE.md`만 나오고 **`src/**`와 `messages/**`는 한 줄도 나오지 않아야 한다.**

`src/`나 `messages/`가 diff에 나오면 Global Constraints 위반이다. 해당 변경을 되돌린다.

---

## Self-Review 결과

**스펙 커버리지**

| 스펙 항목 | 담당 태스크 |
|---|---|
| 3.1 디자인 성격 정본 문단 | Task 1 Step 3 |
| 3.2 페이지 유형 2트랙 | Task 4 Step 5 (섹션 7) |
| 3.3-1 컬러 참조 표준 | Task 1 Step 3 (2.4 금지 사항) |
| 3.3-2 섹션 여백 2단계 | Task 3 Step 4 (4.2) |
| 3.3-3 코너 반경 | Task 1·4 (금지 사항 + 레시피 전체) |
| 3.3-4 알파 토큰 별칭 | Task 1 Step 3 (2.2) |
| 3.3-5 secondary 금지 | Task 1 Step 2·3 |
| 3.3-6 / 3.5 컨테이너 3종 | Task 3 Step 4 (4.1) |
| 3.4 시맨틱 별칭 10행 | Task 1 Step 3 (2.2) |
| 4.1 정본 9개 섹션 | Task 1(1·2), 2(3), 3(4·6), 4(5·7·8·9) |
| 4.2 프롬프트 2계층 | Task 5 Step 1 |
| 4.3 CLAUDE.md | Task 5 Step 2 |
| 6.1 근거 대조 | Task 1 Step 4, Task 2 Step 5, Task 3 Step 6 |
| 6.2 유틸 생성 확인 | 스펙 작성 중 완료(CLI v4.3.3로 확인) |
| 6.3 생성 검증 | Task 6 Step 2~5 |
| 6.4 빌드 확인 | Task 6 Step 3·7 |
| 2. 비목표(기존 코드 불변) | Global Constraints + Task 6 Step 6·9 |

빠진 스펙 항목 없음.

**플레이스홀더**

계획서 안의 `(... 10개 전부)`·`(스펙 3.4의 10행을 그대로 옮긴다)` 같은 표기는 **문서에 옮길 내용의 출처 지시**이며, 옮길 값은 모두 확정된 소스(`globals.css`, 스펙 표)에 존재한다. Task 4 Step 8과 Task 6 Step 5의 검사가 이 표기가 실제 산출물에 새어 들어가지 않았음을 확인한다.

**섹션 번호 일관성**

정본 섹션 번호를 태스크 간에 대조했다 — Task 1은 1~2, Task 2는 3, Task 3은 4와 6, Task 4는 5(삽입)와 7~9. Task 3이 5를 건너뛰고 6을 먼저 쓰는 이유와 Task 4가 5를 삽입하는 절차를 양쪽 Interfaces에 명시했다. 상호 참조(`5.6 참조`, `4.1`, `2.2`)가 가리키는 번호가 실제 배치와 일치한다.
