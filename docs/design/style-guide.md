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

---

## 1. 디자인 성격

> **조용한 기관형 미니멀 + 딥그린 앵커.** 배경은 순백과 아주 옅은 뉴트럴 워시(`#e8eae9` 20% 알파)만 교차한다. 강조는 밝은 민트(`#00d998`)가 아니라 딥그린이 담당한다 — 버튼은 `primary-800 #006d4c`, 강조 섹션 배경은 `primary-600 #00c68c`. 대비 앵커는 순검정이며, 초록 섹션 위에 검정 버튼을 얹는 조합이 시그니처다. 뉴트럴도 중성회색이 아니라 초록기가 도는 회색(`gray-900 = #00160f`)이어서 화면 전체가 한 계열로 묶인다. 섀도 대신 `1px #e8eae9` 얇은 테두리로 면을 구분하고, 코너는 `4px`로 각져서 금융기관다운 절제가 나온다. 여백은 넉넉하며(데스크톱 섹션 상하 128~200px), 모션은 fade + 20px 상승 한 번(`duration-800 ease-out`)으로 끝낸다. 3D Spline 씬은 히어로에만 쓰는 유일한 화려함이다.

개별 규칙이 답하지 못하는 판단이 생기면 이 문단을 기준으로 결정한다. "더 화려하게"·"더 둥글게"·"색을 하나 더"는 이 성격에서 멀어지는 방향이다.

---

## 2. 컬러

### 2.1 토큰 전체

`src/app/[locale]/globals.css:9-43`의 `@theme` 블록에 32개가 정의돼 있다(primary 10, secondary 10, gray 12). Tailwind v4는 `@theme`의 `--color-*` 토큰마다 유틸 클래스를 생성하므로 `bg-primary-800`·`text-gray-700`·`bg-gray-5020` 형태로 바로 쓸 수 있다.

#### primary — 딥그린 계열

| 토큰 | hex | 실사용 |
|---|---|---|
| `primary-50` | `#e6fbf5` | 2차 버튼 hover 배경 |
| `primary-100` | `#ccf7ea` | — |
| `primary-200` | `#99f0d6` | — |
| `primary-300` | `#66e8c1` | — |
| `primary-400` | `#33e1ad` | — |
| `primary-500` | `#00d998` | SVG 아이콘 내부의 포인트 색 (`public/assets/icons/*.svg`). 클래스로는 쓰지 않는다 |
| `primary-600` | `#00c68c` | 문의 유도 섹션 배경 |
| `primary-700` | `#00986a` | 강조 텍스트, 활성 내비 링크, 2차 버튼 테두리 |
| `primary-800` | `#006d4c` | 1차 버튼 배경, 2차 버튼 텍스트 |
| `primary-900` | `#00573d` | 1차 버튼 hover 배경 |

`primary-100`~`primary-400`은 정의만 되어 있고 쓰이지 않는다. 옅은 초록이 필요하면 `primary-50`을 쓴다.

#### secondary — 블루 계열 (신규 사용 금지)

| 토큰 | hex |
|---|---|
| `secondary-50` | `#e7ebf9` |
| `secondary-100` | `#d0d8f2` |
| `secondary-200` | `#a1b0e5` |
| `secondary-300` | `#7189d9` |
| `secondary-400` | `#4261cc` |
| `secondary-500` | `#2b4ec5` |
| `secondary-600` | `#133abf` |
| `secondary-700` | `#0f2e99` |
| `secondary-800` | `#0b2373` |
| `secondary-900` | `#08174c` |

정의만 되어 있고 `src/**`에서 실사용이 **0건**이다. 신규 코드에서 쓰지 않는다. 브랜드 강조는 primary 계열이 담당한다. 토큰 정의는 삭제하지 않는다.

#### gray — 초록기 도는 뉴트럴

| 토큰 | hex | 실사용 |
|---|---|---|
| `gray-50` | `#e8eae9` | 경계선(`border-gray-50`, 13건), 옅은 배경 |
| `gray-5050` | `#e8eae980` | — (`gray-50`의 50% 알파) |
| `gray-5020` | `#e8eae933` | 교차 섹션 배경, 표 헤더 배경 (`gray-50`의 20% 알파) |
| `gray-100` | `#ccd0cf` | — |
| `gray-200` | `#b3b9b7` | 검정 배경(푸터) 위 본문, 표 외곽선 |
| `gray-300` | `#99a29f` | 보조 텍스트 |
| `gray-400` | `#808b87` | 검정 배경 위 저작권 표기 |
| `gray-500` | `#66736f` | 출처·캡션 |
| `gray-600` | `#4d5c57` | — |
| `gray-700` | `#33453f` | **본문 텍스트**(17건), 역상 버튼 hover 배경 |
| `gray-800` | `#1a2d27` | 헤더 내비 비활성 링크, 자산명 |
| `gray-900` | `#00160f` | 역상 버튼 배경, hover 전환의 기점 색 |

`gray-900`이 `#00160f`로 순검정이 아니라 초록기가 섞인 값이다. 이 때문에 화면 전체가 primary와 한 계열로 묶인다. 뉴트럴을 중성회색(`#888` 류)으로 바꾸면 이 통일감이 깨진다.

알파 변형 두 개(`gray-5050`, `gray-5020`)는 이름이 스케일처럼 보이지만 실제로는 `gray-50`의 투명도 변형이다. `5050` = 50% 알파, `5020` = 20% 알파로 읽는다.

### 2.2 시맨틱 별칭

토큰 이름은 값을 알려주지만 용도를 알려주지 않는다. 아래 별칭은 용도를 고정한다. 별칭은 이 문서상의 개념이고, 코드에서는 오른쪽 클래스를 그대로 쓴다(토큰을 새로 추가하지 않는다).

| 별칭 | 클래스 | 용도 |
|---|---|---|
| surface/base | `bg-white` | 기본 섹션 배경, 카드 면 |
| surface/subtle | `bg-gray-5020` | 교차 섹션 배경 |
| surface/accent | `bg-primary-600` | 문의 유도 섹션 배경 |
| surface/inverse | `bg-black` | 대비 강조 카드, 푸터 |
| border/hairline | `border-gray-50` | 카드·표·헤더 경계선 (1px) |
| text/primary | (색 클래스 생략) | 제목 — 2.3 참조 |
| text/secondary | `text-gray-700` | 본문 |
| text/tertiary | `text-gray-500` | 출처·캡션 |
| action/solid | `bg-primary-800` + `hover:bg-primary-900` + `text-white` | 1차 버튼 |
| action/outline | `border-primary-700` + `text-primary-800` + `hover:bg-primary-50` | 2차 버튼 |
| action/inverse | `bg-gray-900` + `hover:bg-gray-700` + `text-white` | 초록 배경 위 버튼 |

### 2.3 제목 색은 지정하지 않는다

`globals.css`에 전역 텍스트 색 선언이 없다. 따라서 색 클래스를 생략한 텍스트는 브라우저 기본 순검정(`#000`)으로 렌더링되며, `gray-900`(`#00160f`)과는 미세하게 다르다.

기존 코드는 제목에 색을 **생략하는 쪽이 지배적**이다(생략 32건 vs `text-gray-900` 명시 9건). 표준도 이를 따른다.

- **제목**: 색 클래스를 쓰지 않는다. `<h2 className="text-headline-sm lg:text-headline-lg font-bold">`
- **본문**: `text-gray-700`을 명시한다.
- **`text-gray-900`을 쓰는 경우는 하나** — hover 색 전환의 기점이 필요할 때다. `transition-colors`는 시작 색이 명시돼 있어야 동작하므로 아코디언 제목처럼 hover에서 색이 바뀌는 요소에는 `text-gray-900 group-hover:text-primary-700 transition-colors`로 기점을 준다.

### 2.4 조합 규칙

- **섹션 배경은 3종만 교차한다** — `bg-white`(기본) / `bg-gray-5020`(옅은 워시) / `bg-primary-600`(문의 유도). 이 외의 배경색을 섹션에 쓰지 않는다.
- **초록 배경 위 버튼은 검정이다** — `bg-primary-600` 섹션의 CTA는 `bg-gray-900`, hover는 `bg-gray-700`이다. 초록 위에 흰 버튼이나 더 진한 초록 버튼을 쓰지 않는다. (근거: `src/components/home/ContactSection.tsx:26`)
- **흰·워시 배경 위 1차 버튼은 딥그린이다** — `bg-primary-800`, hover `bg-primary-900`, 텍스트 `text-white`. (근거: `src/components/home/HeroSection.tsx:44`)
- **면 구분은 테두리로 한다** — 카드·표·헤더 경계는 `border border-gray-50`(1px). 섀도는 모달·팝업·드롭다운처럼 실제로 떠 있는 요소에만 쓴다.
- **검정 면 위 텍스트는 한 단계 밝은 회색이다** — `bg-black` 푸터의 본문은 `text-gray-200`, 저작권은 `text-gray-400`을 쓴다. 검정 위에 순백 본문을 크게 깔지 않는다.

### 2.5 금지 사항

- **하드코딩 hex 금지.** `text-[#919db6]` 같은 형태를 새로 쓰지 않는다. 필요한 색이 토큰에 없으면 토큰 표에서 가장 가까운 값을 쓴다.
- **`text-[var(--color-gray-700)]` 형태 금지.** `@theme`의 모든 토큰은 유틸 클래스를 생성하므로(알파 변형 `bg-gray-5020`까지 포함) 임의값 문법이 필요 없다. `text-gray-700`으로 쓴다.
- **`primary-500`(`#00d998`) 을 클래스로 쓰지 않는다.** 밝은 민트는 SVG 아이콘 내부의 포인트 색이다. 배경이나 버튼 면으로 쓰면 사이트 성격에서 벗어난다. 초록 배경이 필요하면 `primary-600`을 쓴다.
- **`secondary` 계열 금지.** (2.1 참조)
- **새 색 도입 금지.** 팔레트에 없는 색이 필요하다고 느껴지면 대개 레이아웃이나 위계로 풀어야 하는 문제다.

---

## 3. 타이포그래피

### 3.1 폰트

| 언어 | 1순위 | 2순위 | 로드 방식 |
|---|---|---|---|
| 한국어 | Pretendard Variable | Inter | `@font-face` + 로컬 woff2 (`/fonts/PretendardVariable.woff2`), weight 45~920 |
| 영어 | Inter | Pretendard Variable | `@font-face` + 로컬 ttf variable (`/fonts/Inter-VariableFont_opsz,wght.ttf`), weight 100~900 |

`<html>`에 `font-korean` 또는 `font-english` 클래스가 붙고(`src/app/[locale]/layout.tsx:88-91`), 그 클래스가 `body`의 font-family 순서를 바꾼다.

```tsx
const fontClass = locale === 'ko' ? 'font-korean' : 'font-english';
return <html lang={locale || 'ko'} className={fontClass}>
```

둘 다 variable font이므로 `font-medium`·`font-semibold`·`font-bold`를 자유롭게 쓸 수 있다. 웹폰트 파일을 추가하지 않는다.

### 3.2 스케일

**모든 텍스트는 아래 유틸 클래스로 크기를 지정한다.** `text-[18px]` 같은 임의값이나 `text-lg` 같은 Tailwind 기본 크기를 쓰지 않는다. 유틸 하나가 font-size·line-height·letter-spacing 3개를 함께 고정하므로, 임의값을 쓰면 행간과 자간이 어긋난다.

#### Display — 가장 큰 단계, 언어별 크기 자동 전환

| 유틸 | 한국어 | 영어 | line-height | letter-spacing | 쓰임 |
|---|---|---|---|---|---|
| `text-display-lg` | 55px | 57px | 1.2 | -0.25px | 히어로 h1 (홈·서비스) |
| `text-display-md` | 44px | 45px | 1.2 | 0 | 문의 섹션 h2, 강조 수치 |
| `text-display-sm` | 34px | 36px | 1.2 | 0 | — (미사용) |

같은 클래스를 쓰면 `<html>`의 언어 클래스에 따라 크기가 알아서 바뀐다. 언어별로 클래스를 나눠 쓸 필요가 없다. Display는 이 3단계만 언어 분기가 있고, 아래 나머지는 전부 언어 공통이다.

Display는 항상 모바일 Headline과 짝지어 쓴다 — 55px를 작은 화면에 그대로 내보내지 않는다.

#### Headline — 섹션 제목 계층

| 유틸 | 크기 | line-height | letter-spacing | 쓰임 |
|---|---|---|---|---|
| `text-headline-lg` | 32px | 1.25 | 0 | 데스크톱 섹션 h2, 모바일 히어로 h1 (25건) |
| `text-headline-md` | 28px | 1.3 | 0 | 데스크톱 하위 그룹 h3, 강조 수치 (9건) |
| `text-headline-sm` | 24px | 1.3 | 0 | 모바일 섹션 h2, 문서 페이지 h1 (25건) |
| `text-headline-xs` | 20px | 1.3 | 0 | 모바일 하위 그룹 h3 (12건) |

#### Title — 카드·항목 제목

| 유틸 | 크기 | line-height | letter-spacing | 쓰임 |
|---|---|---|---|---|
| `text-title-lg` | 20px | 1.3 | 0 | 데스크톱 카드 제목 h4 (8건) |
| `text-title-md` | 16px | 1.5 | 0.15px | 모바일 카드 제목 h4 (4건) |
| `text-title-sm` | 14px | 1.5 | 0.1px | 모바일 통계 라벨 (2건) |

#### Label — 버튼·내비게이션

| 유틸 | 크기 | line-height | letter-spacing | 쓰임 |
|---|---|---|---|---|
| `text-label-lg` | 16px | 1.5 | 0 | 데스크톱 버튼, 헤더 내비 (11건) |
| `text-label-md` | 15px | 1.5 | 0 | 모바일 버튼 (4건) |
| `text-label-sm` | 14px | 1.5 | 0 | 헤더 문의 버튼 모바일 (1건) |

#### Body — 본문

| 유틸 | 크기 | line-height | letter-spacing | 쓰임 |
|---|---|---|---|---|
| `text-body-xl` | 20px | 1.5 | 0 | 데스크톱 랜딩 본문 (12건) |
| `text-body-lg` | 18px | 1.5 | 0 | 데스크톱 문서 본문, 히어로 설명 (18건) |
| `text-body-md` | 16px | 1.5 | 0 | 모바일 본문 — 가장 많이 쓰인다 (32건) |
| `text-body-sm` | 15px | 1.5 | 0 | 모바일 문서 본문, 목록 항목 (26건) |

랜딩형 본문은 `text-body-md lg:text-body-xl`, 문서형 본문은 `text-body-sm lg:text-body-lg`로 짝짓는다. 문서형이 한 단계 작은 이유는 컨테이너가 좁아(4.1) 같은 크기여도 더 커 보이기 때문이다.

#### Caption — 출처·주석

| 유틸 | 크기 | line-height | letter-spacing | 쓰임 |
|---|---|---|---|---|
| `text-caption-lg` | 14px | 1.5 | 0 | 출처 표기, 투자자 설명 (4건) |
| `text-caption-sm` | 12px | 1.5 | 0 | — (미사용) |

### 3.3 계층 조합

반응형은 **모바일 값 + `lg:` 데스크톱 값**을 짝지어 쓴다. 자주 쓰이는 짝:

| 역할 | 클래스 | 근거 |
|---|---|---|
| 랜딩 h1 (히어로) | `text-headline-lg lg:text-display-lg font-bold` | `src/components/home/HeroSection.tsx:35` |
| 랜딩 h2 (일반 섹션) | `text-headline-sm lg:text-headline-lg font-bold` | `src/components/home/SecuritySection.tsx:27` |
| 랜딩 h2 (문의 섹션) | `text-headline-lg lg:text-display-md font-bold text-center` | `src/components/home/ContactSection.tsx:21` |
| 랜딩 h3 (하위 그룹) | `text-headline-xs lg:text-headline-md font-bold` | `src/components/home/SolutionsSection.tsx:120` |
| 카드 제목 h4 | `text-title-md lg:text-title-lg font-semibold` | `src/components/home/SolutionsSection.tsx:93` |
| 랜딩 본문 | `text-body-md lg:text-body-xl font-medium lg:font-normal text-gray-700` | `src/components/home/SecuritySection.tsx:55` |
| 문서 h1 | `text-headline-sm lg:text-headline-lg font-bold` | `src/app/[locale]/work-guidelines/page.tsx:10` |
| 버튼 라벨 | `text-label-md lg:text-label-lg font-semibold` | `src/components/home/HeroSection.tsx:44` |
| 출처·주석 | `text-caption-lg lg:text-body-md font-medium text-gray-500` | `src/components/home/MarketStatsSection.tsx:82` |

문서형 페이지는 위 조합을 직접 쓰지 않고 `src/components/typography`의 `H1`·`H2`·`H3`·`P`를 쓴다(5.7 참조). 문서 h1만 예외로 직접 클래스를 쓴다.

### 3.4 웨이트 하강 규칙

본문 텍스트는 **모바일에서 `font-medium`, 데스크톱에서 `font-normal`** 로 떨어뜨린다.

```tsx
<p className="text-body-md lg:text-body-xl font-medium lg:font-normal text-gray-700">
```

작은 화면에서는 글자가 작아 얇은 웨이트가 흐려 보이고, 큰 화면에서는 굵으면 답답해 보이기 때문이다. `src/**`의 15개 파일에서 쓰이는 확립된 관례다.

제목에는 적용하지 않는다 — 제목은 `font-bold`(섹션 제목) 또는 `font-semibold`(카드 제목·버튼) 고정이다. 수치 강조는 예외적으로 `font-semibold lg:font-bold`로 올린다(`src/components/home/MarketStatsSection.tsx:41`).
