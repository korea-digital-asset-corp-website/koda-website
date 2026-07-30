# KODA 테크블로그 — 설계 문서

- 작성일: 2026-07-30
- 선행 작업: `docs/design/style-guide.md` (디자인 정본), `CLAUDE.md` (하드 규칙)
- 성격: **스타일 가이드 검증을 겸한 실제 사용 가능 수준의 테크블로그.** 더미 글로 채우되 데이터 구조는 실운영을 염두에 두고 설계한다. 메인 머지 여부는 나중에 결정한다.

## 1. 목적

두 가지를 동시에 달성한다.

1. **검증** — 스타일 가이드·프롬프트 템플릿·CLAUDE.md만으로 지금까지 없던 유형의 페이지(콘텐츠 블로그)를 만들 수 있는지 확인한다. 가이드가 답하지 못하는 지점이 나오면 그것이 검증의 수확이며, 가이드에 반영한다.
2. **결과물** — 기업 테크블로그(토스·우아한형제들·당근·Stripe 류)의 표준 해부도를 KODA 디자인 시스템으로 번역한, 장차 실제 운영 가능한 블로그 골격.

## 2. 확정 사항

| 항목 | 결정 |
|---|---|
| 범위 | 목록 페이지 + 상세 페이지. 카테고리 필터링 동작은 범위 밖(카드에 라벨만 표시) |
| 콘텐츠 저장 | 레포 선례(공지 `noticeContentMap`) 준수 — `data/blogPosts.ts` 메타 + 글별 TSX 콘텐츠 컴포넌트. MDX는 새 의존성 금지 규칙에 걸려 탈락 |
| i18n | 목록·상세 UI 문자열만 ko/en(`blog` 네임스페이스). 글 제목·본문은 한국어 고정 — 국내 테크블로그 표준 방식 |
| 콘텐츠 워크플로 | 에디터 없음. 노션에 초안 작성 → Claude가 `notion_page_read`로 읽어 본문 TSX로 변환·커밋. 절차는 `docs/design/blog-post-workflow.md`에 문서화 |
| 썸네일 | 텍스트 우선 카드. `thumbnail`은 옵션 필드로 두되 더미 글은 쓰지 않는다(가짜 이미지를 만들지 않는다) |
| 신택스 하이라이팅 | 하지 않는다(의존성 0 원칙). 모노스페이스 + `bg-gray-5020` 면으로 처리 |
| 구현 시 스킬 | `frontend-design` 스킬을 구현 단계에서 로드해 시각 디테일을 다듬는다 |

## 3. 라우트·파일 구조

```
src/app/[locale]/blog/page.tsx          목록
src/app/[locale]/blog/[slug]/page.tsx   상세 (generateStaticParams + generateMetadata)
src/components/blog/
  ├ FeaturedPostCard.tsx                목록 히어로 (최신 글 1개 크게)
  ├ PostCard.tsx                        카드
  ├ PostGrid.tsx                        카드 그리드
  ├ PostHeader.tsx                      상세 상단 (카테고리·제목·날짜·저자)
  ├ AuthorCard.tsx                      상세 하단 저자 카드
  ├ RelatedPosts.tsx                    같은 카테고리 최신 2개
  ├ PostElements.tsx                    본문 킷: CodeBlock·InlineCode·Figure·Blockquote·Callout
  ├ posts/<slug>.tsx                    글 본문 (노션→변환 결과물)
  └ index.ts                            배럴
src/data/blogPosts.ts                   메타 배열 + slug→콘텐츠 컴포넌트 맵
docs/design/blog-post-workflow.md       글 등록 절차
```

## 4. 데이터 모델

```ts
export type BlogCategory = 'Security' | 'Engineering' | 'Insight';

export interface BlogAuthor {
  name: string; // 예: '김코다'
  role: string; // 예: 'Security Engineer'
}

export interface BlogPost {
  slug: string; // URL 조각. kebab-case
  title: string; // 한국어 고정
  description: string; // 목록 카드·메타 설명용 1~2문장
  category: BlogCategory;
  date: string; // 'YYYY.MM.DD' — 레포 관례(notices.ts)와 동일. utils/dateFormat.ts의 formatDate가 이 형식을 파싱한다
  author: BlogAuthor;
  thumbnail?: string; // 옵션. 더미 글은 미사용
}
```

- `blogPosts` 배열은 최신순 정렬을 데이터 자체가 보장한다(맨 앞이 최신). 목록 히어로는 `blogPosts[0]`.
- 본문 매핑은 `blogContentMap: Record<string, ComponentType>` — `noticeContentMap` 패턴.
- 카테고리는 3종 고정 문자열. 표시 색은 전 카테고리 공통(`text-primary-700`) — 카테고리별 색 분화는 팔레트 확장 없이 불가능하므로 하지 않는다.

## 5. 목록 페이지

- **컨테이너**: 그리드형 목록이므로 스타일 가이드 4.1 규칙대로 `max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[100px] mx-auto` — news 예외 규칙(`lg:px-[100px]`)의 첫 재사용이자 검증 포인트.
- **h1 + 소개문**: 문서형 h1 조합(`text-headline-sm lg:text-headline-lg font-bold`).
- **Featured 카드**: `blogPosts[0]`을 2열 분할(`grid lg:grid-cols-2`)로 크게. 왼쪽 카테고리·제목(`text-headline-sm lg:text-headline-md font-bold`)·요약·메타, 오른쪽은 썸네일 없으면 `bg-gray-5020` 면에 카테고리 워드마크(텍스트) — 가짜 이미지 대신 절제된 면.
- **카드 그리드**: 나머지 글을 `grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`(그리드 열 수 조절은 가이드가 허용한 `sm:` 사용처). 카드는 `border border-gray-50 rounded-[4px] bg-white` + 내부 패딩, hover는 `transition-colors` 계열만(제목 `group-hover:text-primary-700`).
- **문서형 트랙**이므로 진입 애니메이션 없음.

## 6. 상세 페이지

- **컨테이너**: 문서 본문 컨테이너에서 **`whitespace-pre-line`을 뺀** `max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] px-5 lg:px-[200px] mx-auto`. TSX 본문에서는 소스 개행이 의도치 않은 줄바꿈을 만들기 때문. **가이드가 답하지 못한 첫 사례이므로 검증 결과로 가이드 4.1에 반영한다.**
- **구조**: `PostHeader`(카테고리 라벨 → h1 제목 `text-headline-sm lg:text-headline-lg font-bold` → 날짜·저자 메타 `text-caption-lg text-gray-500` → 헤어라인 구분선) → 본문 → `AuthorCard` → `RelatedPosts` → 목록으로 버튼(2차 버튼 스타일, `notice/BackToListButton` 패턴).
- **내부 링크는 `@/i18n/navigation`의 `Link`를 쓴다.** `next/link`를 직접 쓰면 en 로케일에서 `/blog` 이동 시 locale 접두사가 빠진다. `BackToListButton`이 올바른 선례다. (스타일 가이드 8.1이 `next/link`로 안내하고 있어 보강 필요 — 검증 수확 1호)
- **존재하지 않는 slug**: `notFound()` 호출(Next.js 표준).
- **generateStaticParams**: `blogPosts`의 slug 전체 반환. **generateMetadata**: 글 메타에서 title·description·OG 생성.

## 7. 본문 컴포넌트 킷 (`PostElements.tsx`)

노션 블록과 1:1 대응이 설계 기준 — 변환이 기계적이어야 한다.

| 노션 블록 | 컴포넌트 | 스타일 |
|---|---|---|
| heading_2 / heading_3 | 기존 `H2`·`H3` 재사용 (`@/components/typography`) | — |
| paragraph | 기존 `P` 재사용 | — |
| code | `CodeBlock({ language?, children })` | `bg-gray-5020` + `border border-gray-50` + `rounded-[4px]`, 상단에 언어 라벨(`text-caption-lg text-gray-500`), 본문 `font-mono text-body-sm`, `overflow-x-auto` |
| 인라인 코드 | `InlineCode({ children })` | `bg-gray-5020 text-primary-800 font-mono rounded-[4px] px-1.5 py-0.5` |
| image | `Figure({ src, alt, caption?, width, height })` | `next/image` + 캡션 `text-caption-lg text-gray-500 text-center` |
| quote | `Blockquote({ children })` | `border-l-2 border-primary-700 pl-5 text-gray-700` |
| callout | `Callout({ children })` | `bg-primary-50 rounded-[4px] p-5` |
| bulleted/numbered list | 기존 `Ul`·`Ol`·`Li` 재사용 | — |

- 본문 폭 안에서만 동작하고 전역 스타일을 만들지 않는다.
- 모든 색·크기·반경은 스타일 가이드 토큰/표준 안에서 해결한다. 새 값 도입 금지.

## 8. 더미 콘텐츠 (3편)

본문 킷의 모든 요소가 최소 1회 등장하도록 배치한다.

| slug | 카테고리 | 제목 | 킷 검증 포인트 |
|---|---|---|---|
| `mpc-key-management` | Security | MPC 기반 키 관리 아키텍처 | CodeBlock(수도코드)·Blockquote·Callout |
| `cold-wallet-withdrawal-automation` | Engineering | 콜드월렛 출금 승인 파이프라인 자동화 | CodeBlock(TypeScript)·InlineCode·Ol 목록 |
| `digital-asset-custody-trends` | Insight | 디지털자산 수탁 시장의 세 가지 흐름 | Blockquote·Ul 목록·Figure(기존 `img_graph.png` 재사용 1회) |

저자는 가상 인물 2~3명(이름+역할). 날짜는 2026년 상반기로 분산해 최신순 정렬이 눈에 보이게 한다.

## 9. i18n·SEO·연결

- `messages/ko.json`·`en.json`에 `blog` 네임스페이스: 목록 제목·소개문·"목록으로"·"관련 글"·날짜 포맷 관련 라벨. **ko 먼저**(타입 원천).
- `sitemap.ts`에 `/blog` + 글 URL 추가.
- 헤더 내비 추가는 범위 밖 — 라우트 직접 접근으로 검증한다. (`navItems.ts` 수정 없음)

## 10. 비목표

- 카테고리 필터링·검색·페이지네이션 (글 3편에 불필요 — YAGNI)
- 신택스 하이라이팅, MDX, CMS/에디터
- 글 본문 영어 번역
- 헤더 내비게이션 메뉴 추가
- RSS·구독

## 11. 검증

1. `npm run lint`·`npm run build` 통과, 빌드 라우트 목록에 `/[locale]/blog`와 글 경로 확인.
2. 표준 준수 기계 검사(probe 검증과 동일한 grep): 금지 패턴 0건, ko/en 키 대칭.
3. 가이드가 답하지 못한 지점 목록화 → `style-guide.md`(필요시 파생 문서까지) 반영. 이미 예정된 1건: 상세 컨테이너의 `whitespace-pre-line` 제외.
4. 개발 서버에서 목록·상세·404(없는 slug)·en 로케일 4개 화면 육안 확인.
