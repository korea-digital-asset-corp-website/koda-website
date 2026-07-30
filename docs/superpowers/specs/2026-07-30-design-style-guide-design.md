# KODA 디자인 스타일 가이드 — 설계 문서

- 작성일: 2026-07-30
- 대상 저장소: `koda-website` (Next.js 15 App Router, Tailwind CSS v4, next-intl)

## 1. 목적

KODA 웹사이트의 색감·타이포·레이아웃·모션 규칙을 문서로 고정해, 이후 AI 프롬프팅으로 새 페이지를 만들 때 기존 사이트와 이질감 없는 결과를 얻는다.

현재 `src/app/[locale]/globals.css`에 디자인 토큰(컬러 30개, 타이포 6단계)은 정의되어 있으나, **그 토큰을 어떻게 조합해 KODA다운 화면을 만드는가**에 대한 문서가 없다. 그 결과 컬러 참조 방식이 3가지로 갈리고, 섹션 패딩이 섹션마다 다른 값을 쓰는 등의 편차가 생겼다. 이 문서는 그 조합 규칙을 정하는 작업의 설계다.

## 2. 목표와 비목표

### 목표

- 사람이 읽고 판단 근거로 삼을 수 있는 스타일 가이드 문서
- AI에게 그대로 붙여 새 페이지를 요청할 수 있는 프롬프트 템플릿 (저장소 안 / 외부 툴 양쪽 대비)
- 이 저장소에서 작업할 때 자동 적용될 `CLAUDE.md` 하드 규칙

### 비목표

- **기존 코드 리팩토링을 하지 않는다.** 하드코딩 hex 제거, 섹션 패딩 토큰화, 공용 `Container` 컴포넌트 추출 등은 이번 범위 밖이다. 표준은 정하되 적용 대상은 신규 코드로 한정한다.
- `globals.css`의 기존 토큰을 수정·삭제하지 않는다. (신규 토큰 추가도 이번 범위에 넣지 않는다 — 3.3 참조)
- 라이브 스타일 가이드 페이지(`/style-guide` 라우트)를 만들지 않는다. 향후 확장 사항으로 남긴다.

## 3. 확정 사항

### 3.1 디자인 성격 (정본 문단)

이 문단은 스타일 가이드와 프롬프트 템플릿 양쪽에 동일한 문장으로 실린다. 개별 규칙이 답하지 못하는 판단이 생겼을 때의 기준점이다.

> **조용한 기관형 미니멀 + 딥그린 앵커.** 배경은 순백과 아주 옅은 뉴트럴 워시(`#e8eae9` 20% 알파)만 교차한다. 강조는 밝은 민트(`#00d998`)가 아니라 딥그린이 담당한다 — 버튼은 `primary-800 #006d4c`, 강조 섹션 배경은 `primary-600 #00c68c`. 대비 앵커는 순검정이며, 초록 섹션 위에 검정 버튼을 얹는 조합이 시그니처다. 뉴트럴도 중성회색이 아니라 초록기가 도는 회색(`gray-900 = #00160f`)이어서 화면 전체가 한 계열로 묶인다. 섀도 대신 `1px #e8eae9` 얇은 테두리로 면을 구분하고, 코너는 `4px`로 각져서 금융기관다운 절제가 나온다. 여백은 넉넉하며(데스크톱 섹션 상하 128~200px), 모션은 fade + 20px 상승 한 번(`duration-800 ease-out`)으로 끝낸다. 3D Spline 씬은 히어로에만 쓰는 유일한 화려함이다.

### 3.2 페이지 유형

두 트랙을 모두 문서화한다.

| 트랙 | 해당 페이지 | 특징 |
|---|---|---|
| 랜딩형 | `/`, `/services` | Spline 히어로, Display 타이포, 섹션 배경 교차, fade-up 진입 애니메이션 |
| 문서형 | `/notice`, `/privacy-policy`, `/work-guidelines`, `/ethical-management`, `/crypto-warning`, `/faq` | 흰 배경 고정, 번호 리스트·표, 애니메이션 없음, `src/components/typography/*` 사용 |

### 3.3 불일치 해소 — 정한 표준

발견된 6건에 대해 각각 하나를 정본으로 정한다. 기존 코드의 상충 사례는 스타일 가이드 "알려진 불일치" 섹션에 사실로 기재하고 수정하지 않는다.

| # | 불일치 | 정한 표준 |
|---|---|---|
| 1 | 컬러 참조 방식 3종 (`text-gray-700` / `text-[var(--color-gray-700)]` / `text-[#919db6]`) | **Tailwind 유틸 클래스**를 쓴다. `@theme`의 토큰은 모두 유틸로 생성되므로 `var()` 임의값은 불필요하다. 하드코딩 hex는 금지한다. |
| 2 | 섹션 상하 여백 (`lg:py-32`, `lg:pt-[170px] lg:pb-[200px]`, `lg:pt-[180px] lg:pb-[170px]`) | 2단계로 고정한다. **기본** `pt-[72px] pb-20 lg:py-32` / **와이드** `pt-[72px] pb-20 lg:py-[170px]`. 와이드는 강조 섹션(솔루션·문의 등)에만 쓴다. |
| 3 | 코너 반경 (`rounded-[4px]` 15회 vs `rounded-md`/`rounded-lg` 6회) | **`rounded-[4px]` 고정.** 예외는 원형 배지·아바타의 `rounded-full`뿐이다. |
| 4 | `--color-gray-5050`, `--color-gray-5020` 네이밍이 스케일처럼 보임 | 토큰명은 그대로 두고, **가이드에 시맨틱 별칭 표**를 둔다 (`surface/subtle = gray-5020` 등). 클래스는 기존 유틸(`bg-gray-5020`)을 쓰므로 코드 변경이 없다. |
| 5 | `secondary` 팔레트(블루 10단계) 정의만 되고 미사용 | 신규 페이지에서 **사용 금지**. 브랜드 강조는 `primary` 계열이 담당한다. 정의는 삭제하지 않는다. |
| 6 | 컨테이너 클래스 문자열이 섹션마다 복붙 | 3.5의 **컨테이너 3종**을 정본으로 고정하고 신규 코드도 해당 문자열을 그대로 쓴다. 공용 컴포넌트 추출은 비목표다. |

### 3.4 시맨틱 별칭 (3.3-4의 구체안)

가이드에 실을 매핑. 토큰을 추가하지 않고 의미만 부여한다.

| 별칭 | 실제 토큰 | 클래스 | 용도 |
|---|---|---|---|
| surface/base | `#ffffff` | `bg-white` | 기본 섹션 배경, 카드 면 |
| surface/subtle | `--color-gray-5020` | `bg-gray-5020` | 교차 섹션 배경 |
| surface/accent | `--color-primary-600` | `bg-primary-600` | 문의 유도 섹션 배경 |
| surface/inverse | `#000000` | `bg-black` | 대비 강조 카드, 역상 버튼 |
| border/hairline | `--color-gray-50` | `border-gray-50` | 카드·표·헤더 경계선 (1px) |
| text/primary | `--color-gray-900` | `text-gray-900` | 제목 |
| text/secondary | `--color-gray-700` | `text-gray-700` | 본문 |
| text/tertiary | `--color-gray-500` | `text-gray-500` | 출처·캡션 |
| action/solid | `--color-primary-800` | `bg-primary-800` (hover `primary-900`) | 1차 버튼 |
| action/outline | `--color-primary-700` 테두리 + `primary-800` 텍스트 | `border-primary-700 text-primary-800` (hover `bg-primary-50`) | 2차 버튼 |

### 3.5 컨테이너 규격 (3.3-6의 구체안)

계획 수립 중 실측한 결과, 컨테이너는 하나가 아니라 페이지 유형에 따라 3종이며 각 종류 안에서는 매우 일관되게 쓰이고 있었다. 3종 모두를 정본으로 문서화한다.

| 종류 | 클래스 문자열 | 사용처 |
|---|---|---|
| 랜딩 섹션 | `max-w-[1440px] w-full px-5 lg:px-10 mx-auto` | 홈·서비스의 모든 섹션. 좌우 여백이 좁아 카드 그리드가 넓게 퍼진다. |
| 문서 본문 | `max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] px-5 lg:px-[200px] mx-auto whitespace-pre-line` | 약관·개인정보처리방침·업무지침·투자경고. 본문폭을 좁혀 가독성을 확보하고 `whitespace-pre-line`으로 메시지의 줄바꿈을 살린다. |
| 문서 목록 | `max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[200px] mx-auto min-h-[486px] lg:min-h-[788px]` | 공지 목록·공지 상세·FAQ. 항목이 적을 때 푸터가 올라붙지 않도록 `min-h`로 지면을 확보한다. |

`/news`는 그리드 배치 때문에 `lg:px-[100px]`을 쓰는 단독 예외다. 이 사실은 "알려진 불일치"에 기재하되, 그리드형 목록 페이지를 새로 만들 때는 `lg:px-[100px]`을 따르도록 안내한다.

## 4. 산출물

### 4.1 `docs/design/style-guide.md`

사람이 읽는 원칙서 겸 AI 참조서. 9개 섹션.

1. **디자인 성격** — 3.1의 정본 문단
2. **컬러** — 토큰 표(30개 전체, hex 포함) + 3.4 시맨틱 별칭 표 + 조합 규칙(초록 배경 위 검정 버튼, 워시 배경 위 흰 카드 등) + 금지 사항(하드코딩 hex, secondary 사용, primary-500 대면적 사용)
3. **타이포그래피** — 6단계 스케일 표(Display/Headline/Title/Label/Body/Caption, px·line-height·letter-spacing) + 한/영 자동 전환 구조(`layout.tsx`의 `font-korean`/`font-english` 클래스와 Display 크기 분기) + 페이지 유형별 계층 조합 + 모바일→데스크톱 웨이트 하강 패턴(`font-medium lg:font-normal`)
4. **레이아웃** — 컨테이너 규격, 3.3-2의 섹션 여백 2단계, 그리드 패턴(`grid lg:grid-cols-2`, `flex-col lg:flex-row`), 브레이크포인트 표(커스텀 `xs: 475px`, `xl2: 1300px` 포함), 모바일 우선 순서 뒤집기(`order-2 lg:order-1`)
5. **컴포넌트 레시피** — 복붙 가능한 실제 코드. 1차 버튼(Typeform `PopupButton`), 2차 버튼(테두리+화살표 `Link`), 아이콘 카드(124px 정사각 테두리 박스), 통계 카드(흰/검정 2분할), 아코디언(`FaqAccordion` 패턴), 표·리스트(`src/components/typography/*`)
6. **모션** — `useScrollAnimation` 훅 사용법(`threshold 0.1`, `rootMargin -200px 0px`, `triggerOnce`), fade-up 클래스 조합(`opacity-0 translate-y-20` → `opacity-100 translate-y-0`, `duration-800 ease-out`), Spline 사용 조건(히어로 한정, `isMounted` 가드 + `onSplineLoaded` 페이드인), hover는 `transition-colors`만
7. **페이지 유형별 골격** — 랜딩형/문서형 각각의 섹션 순서 템플릿과 파일 배치 관례(`src/components/<page>/*Section.tsx` + `index.ts` 배럴)
8. **i18n 필수 규칙** — `useTranslations` 네임스페이스 관례, `t.rich(key, brMap)`과 줄바꿈 토큰(`brPc`/`brMo`/`brAll`), `messages/ko.json`·`messages/en.json` 동시 수정 의무, `generateMetadata`와 `alternates.languages` 패턴. 이 규칙을 모르면 신규 페이지가 반드시 깨지므로 별도 섹션으로 둔다.
9. **알려진 불일치** — 3.3의 6건을 "기존 코드에 남아 있으나 신규 코드는 표준을 따른다"로 명시. 각 항목에 실제 파일·라인 근거를 붙인다.

### 4.2 `docs/design/page-prompt.md`

프롬프트 템플릿 2계층.

- **레포용 (짧은 버전)** — `docs/design/style-guide.md`를 읽으라는 지시 + 페이지 사양 슬롯(목적 / 라우트 / 페이지 유형(랜딩·문서) / 섹션 목록과 각 섹션 카피 / i18n 키 네임스페이스 / 참고할 기존 섹션). Claude Code에서 이 저장소를 대상으로 쓴다.
- **번들용 (자기완결 버전)** — 외부 툴(v0·ChatGPT 등)은 저장소를 읽을 수 없으므로, 3.1 성격 문단 + 컬러 토큰 + 타이포 스케일 + 레이아웃 규칙 + 컴포넌트 레시피 코드를 프롬프트 본문에 전부 문자로 포함한다. 그대로 복사해 붙일 수 있는 하나의 코드 블록으로 제공한다.

두 버전 모두 "지켜야 할 것"과 "하지 말 것"을 명시 목록으로 둔다.

### 4.3 `CLAUDE.md` (저장소 루트, 신규)

이 저장소에서 작업할 때 자동 적용되는 압축 규칙. 장문 금지 — 하드 규칙만 10줄 안팎.

포함할 항목: 스타일 가이드 경로 안내 / 컬러는 유틸 클래스만(하드코딩 hex 금지) / 코너는 `rounded-[4px]` / 컨테이너 표준 문자열 / 섹션 여백 2단계 / 텍스트는 타이포 유틸 클래스 사용(임의 `text-[18px]` 금지) / `secondary` 팔레트 사용 금지 / 문구는 `messages/ko.json`·`en.json` 동시 추가 / 새 섹션 컴포넌트는 `src/components/<page>/`에 배치.

## 5. 작업 단위와 의존 관계

문서 3개는 내용상 의존한다. `style-guide.md`가 정본이고, 나머지 둘은 그것의 요약·파생이다.

```
style-guide.md (정본)
  ├─→ page-prompt.md (번들용 버전이 정본 내용을 인라인)
  └─→ CLAUDE.md (하드 규칙만 발췌)
```

따라서 작성 순서는 `style-guide.md` → `page-prompt.md` → `CLAUDE.md`다. 정본이 바뀌면 나머지 둘을 함께 갱신해야 하며, 이 사실을 `style-guide.md` 머리말에 적어 둔다.

## 6. 검증

문서 작업이라 자동 테스트가 없다. 다음으로 확인한다.

1. **근거 대조** — 가이드에 적은 모든 토큰 값·클래스 문자열이 실제 소스와 일치하는지 확인한다. 특히 컬러 hex 30개와 타이포 스케일 px 값은 `globals.css`와 1:1 대조한다.
2. **유틸 생성 확인 (완료)** — 알파 변형 토큰(`--color-gray-5020`, `--color-gray-5050`)이 유틸 클래스를 만드는지 불확실했다. 기존 코드는 전부 `bg-[var(--color-gray-5020)]`로 우회하고 있어 컴파일 결과만으로는 판단할 수 없었다. Tailwind CLI v4.3.3으로 해당 클래스를 담은 파일을 직접 컴파일해 확인한 결과 `.bg-gray-5020 { background-color: var(--color-gray-5020) }`가 정상 생성됐다. 따라서 3.3-1의 유틸 클래스 표준에 예외를 두지 않는다.
3. **생성 검증** — 완성된 `page-prompt.md`(레포용)만 가지고 샘플 페이지 1개(예: 회사 소개 성격의 랜딩형 페이지) 초안을 만들어 본다. 가이드에 빠진 정보가 있으면 이 단계에서 드러난다. 초안은 검증 목적이므로 커밋하지 않는다.
4. **빌드 확인** — 검증용 초안이 `npm run build`를 통과하는지 확인한다. 통과하면 가이드의 코드 스니펫이 현재 Tailwind v4·Next 15 설정에서 유효하다는 뜻이다.

## 7. 열린 사항

- 라이브 스타일 가이드 페이지(`/style-guide`)는 이번에 만들지 않는다. 디자이너 공유 필요가 생기면 별도 작업으로 다룬다.
- 기존 코드 정리(하드코딩 hex 1건, 섹션 패딩 편차, 컨테이너 중복)는 별도 작업으로 분리한다. 이번 문서의 "알려진 불일치" 섹션이 그 작업의 목록 역할을 한다.
