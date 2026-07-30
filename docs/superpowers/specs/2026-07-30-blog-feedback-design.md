# 블로그 피드백 반영 — 설계 문서

- 작성일: 2026-07-30
- 선행 작업: PR #114(테크블로그), PR #115(Netlify·audit 수정). 이 작업은 #115 위에서 분기한 `feat/blog-feedback`에서 진행하며, PR은 #115 머지 후 `dev` 베이스로 올린다.
- 출처: 팀 피드백 8건. 판단이 갈린 4건은 사용자 확정을 받았다.

## 1. 확정 사항

| # | 피드백 | 결정 |
|---|---|---|
| 1 | 본문 가로폭이 넓어 촌스럽다 (Medium 기준, 960px 언급) | **960px** (`max-w-[960px] mx-auto`). 블로그 상세만 적용, 기존 문서형 페이지는 무변경 |
| 2 | 글 하단 SNS 공유 버튼 | **링크 복사 + X + 페이스북 + 링크드인** — 전부 URL 인텐트 방식, 외부 SDK 없음 |
| 3 | "목록으로" 버튼 불필요 | 제거 (컴포넌트·배럴·i18n 키 삭제) |
| 4 | 하단 저자 재노출이 공간 낭비 | `AuthorCard` 제거 (PostHeader의 저자 표기로 충분) |
| 5 | 목록은 무한 스크롤로 충분 | **무한 스크롤** — 초기 9개, 센티넬 IntersectionObserver로 9개씩 추가 |
| 6 | 노션 → 페이지 변환 스킬 출시 | `.claude/skills/blog-post/SKILL.md` 프로젝트 스킬 신설 |
| 7 | 노션처럼 우측 제목 내비(TOC), 미니멀 선호 → 숨김 기능 | **데스크톱(xl≥1280px)만 + 숨김 토글(localStorage 기억)**, 기본 표시 |
| 8 | 상단 메뉴에 링크 추가 | `navItems.ts`에 blog 항목 + `header.navigation.blog` ko/en 키 |

## 2. 상세 페이지 구조 변화

```
변경 전                          변경 후
─────────────────               ─────────────────
컨테이너 lg:px-[200px] (~1040px)   외곽 max-w-[1440px] relative
  PostHeader                       아티클 max-w-[960px] mx-auto px-5
  본문                               PostHeader
  AuthorCard        ← 제거           본문
  RelatedPosts                       ShareButtons   ← 신설
  BackToBlogButton  ← 제거           RelatedPosts
                                   TocNav (xl+, 우측 sticky)  ← 신설
```

- 외곽 컨테이너: `max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] mx-auto relative`
- 아티클: `max-w-[960px] w-full mx-auto px-5`
- TOC가 숨겨져 있어도 아티클은 항상 중앙 정렬(레이아웃 이동 없음). TOC는 `absolute` 우측 영역 안에서 `sticky`.

## 3. 신설 컴포넌트

### 3.1 `ShareButtons` (클라이언트)

- props: `{ title: string }`. URL은 `window.location.href` 사용(locale 접두사 자동 포함).
- 링크 복사: `navigator.clipboard.writeText` → 성공 시 2초간 체크 아이콘으로 전환. clipboard API 미지원 환경은 버튼 비활성 대신 무동작 허용(사내 브라우저 기준 불필요한 폴백 생략).
- X: `https://twitter.com/intent/tweet?url=<url>&text=<title>` / 페이스북: `https://www.facebook.com/sharer/sharer.php?u=<url>` / 링크드인: `https://www.linkedin.com/sharing/share-offsite/?url=<url>` — 새 창(`window.open`, `noopener`).
- 아이콘 4종은 인라인 SVG 자체 제작(24px, `currentColor`). 버튼: `w-10 h-10 border border-gray-50 rounded-[4px] text-gray-500 hover:bg-gray-5020 transition-colors`.
- 접근성: 각 버튼 `aria-label`(i18n). 위치: 본문 끝, RelatedPosts 위. 상단에 헤어라인 구분선.
- i18n 키: `blog.share.copyLink`·`copied`·`shareOnX`·`shareOnFacebook`·`shareOnLinkedIn`.

### 3.2 `TocNav` (클라이언트)

- 마운트 후 `article` 내 `h2, h3`를 스캔해 id가 없으면 `toc-<index>` 부여, 목차 트리 생성.
- IntersectionObserver(`rootMargin: '-80px 0px -70% 0px'`)로 현재 섹션 감지 → 해당 항목 `text-primary-700`, 나머지 `text-gray-500`.
- 클릭 시 `scrollIntoView({ behavior: 'smooth' })` + URL 해시 갱신 없음(미니멀).
- 숨김 토글: 우상단 접기 버튼. 상태는 `localStorage('blog-toc-hidden')`에 기억. 숨김 상태에선 작은 펼침 버튼만 남는다.
- 표기: h2는 기본, h3는 `pl-3` 들여쓰기. `text-caption-lg`. 최대 높이 `max-h-[60vh] overflow-y-auto`.
- 렌더 조건: `hidden xl:block`, 외곽 컨테이너 우측 `absolute right-10 top-0 bottom-0` 안에서 `sticky top-28 w-[200px]`.
- 헤딩이 1개 이하이면 렌더하지 않는다.

### 3.3 `BlogListContainer` (클라이언트)

- props: `{ posts: BlogPost[] }` (featured 제외분). 초기 `visibleCount = 9`.
- 바닥 센티넬 `<div ref>`를 IntersectionObserver로 감지 → `visibleCount += 9`. 전부 노출되면 옵저버 해제.
- `PostCard`를 서버 → **클라이언트** 컴포넌트로 전환(`useLocale` 훅 + 기존 `formatDate` 유틸). `/news`의 `NewsContainer` 선례와 동일한 구도. `RelatedPosts`(서버)가 클라이언트 `PostCard`를 자식으로 두는 것은 props가 직렬화 가능하므로 문제없다.

## 4. 제거 대상

- `src/components/blog/BackToBlogButton.tsx` + 배럴 export + `blog.detail.backToList` (ko/en)
- `src/components/blog/AuthorCard.tsx` + 배럴 export (i18n 키 없음)

## 5. 내비게이션

- `navItems.ts`: `{ key: 'blog', href: '/blog' }`를 `news` 다음(마지막)에 추가 — 콘텐츠성 메뉴끼리 묶는다.
- `header.navigation.blog`: ko `"테크블로그"` / en `"Tech Blog"`.
- Navigation(데스크톱)·MobileSidebar 모두 `navItems`를 순회하므로 데이터 추가만으로 반영된다.

## 6. 노션 변환 스킬

- 위치: `.claude/skills/blog-post/SKILL.md` (프로젝트 스킬, `/blog-post <노션 URL>`로 호출).
- 내용: `docs/design/blog-post-workflow.md`의 절차를 실행 지침으로 옮긴다 — ① `notion_page_read`로 읽기(МCP 불가 시 공개 페이지 한정 WebFetch) ② 이미지 서명 URL 즉시 다운로드(`public/assets/images/blog/`, `sips` 실측) ③ 블록 대응표대로 `posts/<PascalCase>.tsx` 생성 ④ `blogPosts.ts` 맨 앞 메타 + `blogContentMap.tsx` 연결 ⑤ `npm run lint`·`npm run build` ⑥ `feat/blog-post-<slug>` 브랜치 커밋 + PR. 대응표는 워크플로 문서를 참조로 링크하고 중복 기재하지 않는다.
- 스킬 frontmatter: `name: blog-post`, `description`: 노션 페이지 URL을 받아 KODA 테크블로그 글로 변환·등록. 트리거 문구 포함.

## 7. 스타일 가이드 반영

- 4.1 컨테이너 표에 "블로그 상세(아티클)" 행 추가: 외곽 + `max-w-[960px]` 아티클 구조와 이유(장문 가독성, 피드백 반영).
- 6.3 hover 표에 공유 버튼 행 추가는 불필요(기존 `hover:bg-gray-5020`은 신규 조합이므로 5.8 블로그 킷 절에 ShareButtons·TocNav 한 줄씩 추가).

## 8. 비목표

- 모바일 TOC, 공유 카운트 표시, 카카오톡 공유(SDK 필요), URL 페이지네이션, 기존 문서형 페이지 폭 변경, `/news`의 더보기 → 무한 스크롤 전환.

## 9. 검증

1. `npm run lint`·`npm run build` 통과.
2. 프로덕션 서버 스모크: 목록·상세 200.
3. 육안(개발 서버): ① 상세 본문 폭 960px 중앙 ② TOC 하이라이트·클릭 이동·숨김 토글·새로고침 후 상태 유지 ③ 공유 4종 동작(복사 피드백 포함) ④ 목록 무한 스크롤(글 4편이라 확인은 임시로 초기 개수를 2로 낮춰 동작 확인 후 9로 복원) ⑤ 헤더·모바일 사이드바에 테크블로그 메뉴.
4. 스킬 검증: `/blog-post` 스킬 파일이 스킬 목록 규격(frontmatter)에 맞는지 확인.
