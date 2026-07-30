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

| 토큰          | hex       | 실사용                                                                            |
| ------------- | --------- | --------------------------------------------------------------------------------- |
| `primary-50`  | `#e6fbf5` | 2차 버튼 hover 배경                                                               |
| `primary-100` | `#ccf7ea` | —                                                                                 |
| `primary-200` | `#99f0d6` | —                                                                                 |
| `primary-300` | `#66e8c1` | —                                                                                 |
| `primary-400` | `#33e1ad` | —                                                                                 |
| `primary-500` | `#00d998` | SVG 아이콘 내부의 포인트 색 (`public/assets/icons/*.svg`). 클래스로는 쓰지 않는다 |
| `primary-600` | `#00c68c` | 문의 유도 섹션 배경                                                               |
| `primary-700` | `#00986a` | 강조 텍스트, 활성 내비 링크, 2차 버튼 테두리                                      |
| `primary-800` | `#006d4c` | 1차 버튼 배경, 2차 버튼 텍스트                                                    |
| `primary-900` | `#00573d` | 1차 버튼 hover 배경                                                               |

`primary-100`~`primary-400`은 정의만 되어 있고 쓰이지 않는다. 옅은 초록이 필요하면 `primary-50`을 쓴다.

#### secondary — 블루 계열 (신규 사용 금지)

| 토큰            | hex       |
| --------------- | --------- |
| `secondary-50`  | `#e7ebf9` |
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

| 토큰        | hex         | 실사용                                              |
| ----------- | ----------- | --------------------------------------------------- |
| `gray-50`   | `#e8eae9`   | 경계선(`border-gray-50`, 13건), 옅은 배경           |
| `gray-5050` | `#e8eae980` | — (`gray-50`의 50% 알파)                            |
| `gray-5020` | `#e8eae933` | 교차 섹션 배경, 표 헤더 배경 (`gray-50`의 20% 알파) |
| `gray-100`  | `#ccd0cf`   | —                                                   |
| `gray-200`  | `#b3b9b7`   | 검정 배경(푸터) 위 본문, 표 외곽선                  |
| `gray-300`  | `#99a29f`   | 보조 텍스트                                         |
| `gray-400`  | `#808b87`   | 검정 배경 위 저작권 표기                            |
| `gray-500`  | `#66736f`   | 출처·캡션                                           |
| `gray-600`  | `#4d5c57`   | —                                                   |
| `gray-700`  | `#33453f`   | **본문 텍스트**(17건), 역상 버튼 hover 배경         |
| `gray-800`  | `#1a2d27`   | 헤더 내비 비활성 링크, 자산명                       |
| `gray-900`  | `#00160f`   | 역상 버튼 배경, hover 전환의 기점 색                |

`gray-900`이 `#00160f`로 순검정이 아니라 초록기가 섞인 값이다. 이 때문에 화면 전체가 primary와 한 계열로 묶인다. 뉴트럴을 중성회색(`#888` 류)으로 바꾸면 이 통일감이 깨진다.

알파 변형 두 개(`gray-5050`, `gray-5020`)는 이름이 스케일처럼 보이지만 실제로는 `gray-50`의 투명도 변형이다. `5050` = 50% 알파, `5020` = 20% 알파로 읽는다.

### 2.2 시맨틱 별칭

토큰 이름은 값을 알려주지만 용도를 알려주지 않는다. 아래 별칭은 용도를 고정한다. 별칭은 이 문서상의 개념이고, 코드에서는 오른쪽 클래스를 그대로 쓴다(토큰을 새로 추가하지 않는다).

| 별칭            | 클래스                                                            | 용도                      |
| --------------- | ----------------------------------------------------------------- | ------------------------- |
| surface/base    | `bg-white`                                                        | 기본 섹션 배경, 카드 면   |
| surface/subtle  | `bg-gray-5020`                                                    | 교차 섹션 배경            |
| surface/accent  | `bg-primary-600`                                                  | 문의 유도 섹션 배경       |
| surface/inverse | `bg-black`                                                        | 대비 강조 카드, 푸터      |
| border/hairline | `border-gray-50`                                                  | 카드·표·헤더 경계선 (1px) |
| text/primary    | (색 클래스 생략)                                                  | 제목 — 2.3 참조           |
| text/secondary  | `text-gray-700`                                                   | 본문                      |
| text/tertiary   | `text-gray-500`                                                   | 출처·캡션                 |
| action/solid    | `bg-primary-800` + `hover:bg-primary-900` + `text-white`          | 1차 버튼                  |
| action/outline  | `border-primary-700` + `text-primary-800` + `hover:bg-primary-50` | 2차 버튼                  |
| action/inverse  | `bg-gray-900` + `hover:bg-gray-700` + `text-white`                | 초록 배경 위 버튼         |

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

> **주의 — Tailwind 소스 스캔 범위.** `globals.css`는 `@import 'tailwindcss' source(none)` + `@source '../..'`로 스캔 범위를 `src/`에 고정해 두었다. Tailwind v4의 기본 자동 감지는 문서 파일까지 스캔하므로, 이 설정이 없으면 이 가이드에 적힌 금지 예시 문자열(`text-[var(--color-*)]` 등)이 실제 클래스로 생성되어 dev 서버가 CSS 파싱 오류로 깨진다. 이 설정을 제거하지 않는다. (테크블로그 검증에서 확인)

---

## 3. 타이포그래피

### 3.1 폰트

| 언어   | 1순위               | 2순위               | 로드 방식                                                                                    |
| ------ | ------------------- | ------------------- | -------------------------------------------------------------------------------------------- |
| 한국어 | Pretendard Variable | Inter               | `@font-face` + 로컬 woff2 (`/fonts/PretendardVariable.woff2`), weight 45~920                 |
| 영어   | Inter               | Pretendard Variable | `@font-face` + 로컬 ttf variable (`/fonts/Inter-VariableFont_opsz,wght.ttf`), weight 100~900 |

`<html>`에 `font-korean` 또는 `font-english` 클래스가 붙고(`src/app/[locale]/layout.tsx:88-91`), 그 클래스가 `body`의 font-family 순서를 바꾼다.

```tsx
const fontClass = locale === 'ko' ? 'font-korean' : 'font-english';
return <html lang={locale || 'ko'} className={fontClass}>
```

둘 다 variable font이므로 `font-medium`·`font-semibold`·`font-bold`를 자유롭게 쓸 수 있다. 웹폰트 파일을 추가하지 않는다.

### 3.2 스케일

**모든 텍스트는 아래 유틸 클래스로 크기를 지정한다.** `text-[18px]` 같은 임의값이나 `text-lg` 같은 Tailwind 기본 크기를 쓰지 않는다. 유틸 하나가 font-size·line-height·letter-spacing 3개를 함께 고정하므로, 임의값을 쓰면 행간과 자간이 어긋난다.

#### Display — 가장 큰 단계, 언어별 크기 자동 전환

| 유틸              | 한국어 | 영어 | line-height | letter-spacing | 쓰임                    |
| ----------------- | ------ | ---- | ----------- | -------------- | ----------------------- |
| `text-display-lg` | 55px   | 57px | 1.2         | -0.25px        | 히어로 h1 (홈·서비스)   |
| `text-display-md` | 44px   | 45px | 1.2         | 0              | 문의 섹션 h2, 강조 수치 |
| `text-display-sm` | 34px   | 36px | 1.2         | 0              | — (미사용)              |

같은 클래스를 쓰면 `<html>`의 언어 클래스에 따라 크기가 알아서 바뀐다. 언어별로 클래스를 나눠 쓸 필요가 없다. Display는 이 3단계만 언어 분기가 있고, 아래 나머지는 전부 언어 공통이다.

Display는 항상 모바일 Headline과 짝지어 쓴다 — 55px를 작은 화면에 그대로 내보내지 않는다.

#### Headline — 섹션 제목 계층

| 유틸               | 크기 | line-height | letter-spacing | 쓰임                                      |
| ------------------ | ---- | ----------- | -------------- | ----------------------------------------- |
| `text-headline-lg` | 32px | 1.25        | 0              | 데스크톱 섹션 h2, 모바일 히어로 h1 (25건) |
| `text-headline-md` | 28px | 1.3         | 0              | 데스크톱 하위 그룹 h3, 강조 수치 (9건)    |
| `text-headline-sm` | 24px | 1.3         | 0              | 모바일 섹션 h2, 문서 페이지 h1 (25건)     |
| `text-headline-xs` | 20px | 1.3         | 0              | 모바일 하위 그룹 h3 (12건)                |

#### Title — 카드·항목 제목

| 유틸            | 크기 | line-height | letter-spacing | 쓰임                        |
| --------------- | ---- | ----------- | -------------- | --------------------------- |
| `text-title-lg` | 20px | 1.3         | 0              | 데스크톱 카드 제목 h4 (8건) |
| `text-title-md` | 16px | 1.5         | 0.15px         | 모바일 카드 제목 h4 (4건)   |
| `text-title-sm` | 14px | 1.5         | 0.1px          | 모바일 통계 라벨 (2건)      |

#### Label — 버튼·내비게이션

| 유틸            | 크기 | line-height | letter-spacing | 쓰임                            |
| --------------- | ---- | ----------- | -------------- | ------------------------------- |
| `text-label-lg` | 16px | 1.5         | 0              | 데스크톱 버튼, 헤더 내비 (11건) |
| `text-label-md` | 15px | 1.5         | 0              | 모바일 버튼 (4건)               |
| `text-label-sm` | 14px | 1.5         | 0              | 헤더 문의 버튼 모바일 (1건)     |

#### Body — 본문

| 유틸           | 크기 | line-height | letter-spacing | 쓰임                                   |
| -------------- | ---- | ----------- | -------------- | -------------------------------------- |
| `text-body-xl` | 20px | 1.5         | 0              | 데스크톱 랜딩 본문 (12건)              |
| `text-body-lg` | 18px | 1.5         | 0              | 데스크톱 문서 본문, 히어로 설명 (18건) |
| `text-body-md` | 16px | 1.5         | 0              | 모바일 본문 — 가장 많이 쓰인다 (32건)  |
| `text-body-sm` | 15px | 1.5         | 0              | 모바일 문서 본문, 목록 항목 (26건)     |

랜딩형 본문은 `text-body-md lg:text-body-xl`, 문서형 본문은 `text-body-sm lg:text-body-lg`로 짝짓는다. 문서형이 한 단계 작은 이유는 컨테이너가 좁아(4.1) 같은 크기여도 더 커 보이기 때문이다.

#### Caption — 출처·주석

| 유틸              | 크기 | line-height | letter-spacing | 쓰임                         |
| ----------------- | ---- | ----------- | -------------- | ---------------------------- |
| `text-caption-lg` | 14px | 1.5         | 0              | 출처 표기, 투자자 설명 (4건) |
| `text-caption-sm` | 12px | 1.5         | 0              | — (미사용)                   |

### 3.3 계층 조합

반응형은 **모바일 값 + `lg:` 데스크톱 값**을 짝지어 쓴다. 자주 쓰이는 짝:

| 역할                | 클래스                                                                  | 근거                                            |
| ------------------- | ----------------------------------------------------------------------- | ----------------------------------------------- |
| 랜딩 h1 (히어로)    | `text-headline-lg lg:text-display-lg font-bold`                         | `src/components/home/HeroSection.tsx:35`        |
| 랜딩 h2 (일반 섹션) | `text-headline-sm lg:text-headline-lg font-bold`                        | `src/components/home/SecuritySection.tsx:27`    |
| 랜딩 h2 (문의 섹션) | `text-headline-lg lg:text-display-md font-bold text-center`             | `src/components/home/ContactSection.tsx:21`     |
| 랜딩 h3 (하위 그룹) | `text-headline-xs lg:text-headline-md font-bold`                        | `src/components/home/SolutionsSection.tsx:120`  |
| 카드 제목 h4        | `text-title-md lg:text-title-lg font-semibold`                          | `src/components/home/SolutionsSection.tsx:93`   |
| 랜딩 본문           | `text-body-md lg:text-body-xl font-medium lg:font-normal text-gray-700` | `src/components/home/SecuritySection.tsx:55`    |
| 문서 h1             | `text-headline-sm lg:text-headline-lg font-bold`                        | `src/app/[locale]/work-guidelines/page.tsx:10`  |
| 버튼 라벨           | `text-label-md lg:text-label-lg font-semibold`                          | `src/components/home/HeroSection.tsx:44`        |
| 출처·주석           | `text-caption-lg lg:text-body-md font-medium text-gray-500`             | `src/components/home/MarketStatsSection.tsx:82` |

문서형 페이지는 위 조합을 직접 쓰지 않고 `src/components/typography`의 `H1`·`H2`·`H3`·`P`를 쓴다(5.7 참조). 문서 h1만 예외로 직접 클래스를 쓴다.

### 3.4 웨이트 하강 규칙

본문 텍스트는 **모바일에서 `font-medium`, 데스크톱에서 `font-normal`** 로 떨어뜨린다.

```tsx
<p className="text-body-md lg:text-body-xl font-medium lg:font-normal text-gray-700">
```

작은 화면에서는 글자가 작아 얇은 웨이트가 흐려 보이고, 큰 화면에서는 굵으면 답답해 보이기 때문이다. `src/**`의 15개 파일에서 쓰이는 확립된 관례다.

제목에는 적용하지 않는다 — 제목은 `font-bold`(섹션 제목) 또는 `font-semibold`(카드 제목·버튼) 고정이다. 수치 강조는 예외적으로 `font-semibold lg:font-bold`로 올린다(`src/components/home/MarketStatsSection.tsx:41`).

---

## 4. 레이아웃

### 4.1 컨테이너

컨테이너는 페이지 유형에 따라 3종이다. 아래 문자열을 **그대로** 쓴다.

| 종류      | 클래스 문자열                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------ |
| 랜딩 섹션 | `max-w-[1440px] w-full px-5 lg:px-10 mx-auto`                                                                            |
| 문서 본문 | `max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] px-5 lg:px-[200px] mx-auto whitespace-pre-line`            |
| 문서 목록 | `max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[200px] mx-auto min-h-[486px] lg:min-h-[788px]` |

| 종류      | 사용처                                     |
| --------- | ------------------------------------------ |
| 랜딩 섹션 | 홈·서비스의 모든 섹션 (11건)               |
| 문서 본문 | 약관, 개인정보처리방침, 업무지침, 투자경고 |
| 문서 목록 | 공지 목록, 공지 상세, FAQ                  |

랜딩형은 좌우 여백이 좁아(`lg:px-10` = 40px) 카드 그리드가 넓게 퍼지고, 문서형은 좁혀서(`lg:px-[200px]`) 한 줄 길이를 읽기 편한 범위로 묶는다. 이 차이가 두 트랙의 인상을 가른다.

세 가지 주의점.

- **랜딩 섹션은 `<section>`과 컨테이너 `<div>`를 분리한다.** 배경색과 상하 여백은 `<section>`이, 좌우 여백과 최대폭은 안쪽 `<div>`가 담당한다. 배경을 화면 끝까지 채우면서 내용만 가운데 모으려면 이 분리가 필요하다.
- **문서형은 컨테이너 하나가 상하 여백까지 겸한다.** `<section>` 자체에 `mt`/`mb`가 붙어 있어 별도 래퍼가 없다.
- **문서 목록형의 `min-h-[486px] lg:min-h-[788px]`** 은 항목이 적을 때 푸터가 화면 중간으로 올라붙는 것을 막는 장치다. 목록 페이지를 새로 만들 때 빼먹지 않는다.

`/news`와 `/blog`는 카드 그리드 배치 때문에 `lg:px-[100px]`을 쓴다. 그리드형 목록 페이지를 새로 만들면 `lg:px-[100px]`을 따른다.

**TSX 본문 상세 페이지는 문서 본문 컨테이너에서 `whitespace-pre-line`을 뺀다.** `whitespace-pre-line`은 메시지 JSON의 개행을 살리는 장치인데, 본문이 TSX 컴포넌트인 페이지(블로그 상세 등)에서는 소스 코드의 개행이 의도치 않은 줄바꿈으로 렌더링된다. `src/app/[locale]/blog/[slug]/page.tsx`가 선례다. (테크블로그 검증에서 확인)

### 4.2 섹션 여백

| 단계   | 클래스                          | 언제                                                    |
| ------ | ------------------------------- | ------------------------------------------------------- |
| 기본   | `pt-[72px] pb-20 lg:py-32`      | 대부분의 랜딩 섹션 (7건)                                |
| 와이드 | `pt-[72px] pb-20 lg:py-[170px]` | 강조 섹션 — 솔루션·문의처럼 페이지의 무게중심이 되는 곳 |

모바일은 두 단계 모두 동일하다(`pt-[72px] pb-20`) — 작은 화면에서 여백을 더 벌리면 스크롤만 길어진다. 데스크톱에서만 128px / 170px로 갈린다.

**히어로 섹션은 이 규칙 밖이다.** 헤더 바로 아래에 붙고 3D 씬 높이가 여백을 대신하므로 `lg:pt-10` 정도만 준다(`src/components/home/HeroSection.tsx:30`).

와이드 단계는 이 문서가 새로 정한 값이다 — 기존 강조 섹션은 상하 비대칭 값을 각각 다르게 쓰고 있다(9절 참조).

### 4.3 그리드 패턴

랜딩 섹션에서 반복되는 3가지 배치.

**2열 분할** — 텍스트와 시각물을 좌우로 나눌 때

```tsx
<div className="grid lg:grid-cols-2 items-center">
```

**세로→가로 전환** — 모바일 세로 스택, 데스크톱 가로 배치

```tsx
<div className="flex flex-col lg:flex-row gap-8">
```

**모바일 순서 뒤집기** — 데스크톱은 텍스트가 왼쪽, 모바일은 시각물이 위

```tsx
<div className="order-2 lg:order-1">{/* 텍스트 */}</div>
<div className="order-1 lg:order-2">{/* 시각물 */}</div>
```

근거: `src/components/home/HeroSection.tsx:34,51`.

카드를 나열할 때는 `grid` 대신 `flex flex-col lg:flex-row gap-8`을 쓰고 카드에 `w-full lg:w-[432px]` 고정폭을 준다(`src/components/home/SolutionsSection.tsx:89,121`). 좌우 절반을 나란히 세울 때는 양쪽에 `lg:flex-1`과 같은 `lg:min-h-[...]`를 주어 높이를 맞춘다(`src/components/home/SecuritySection.tsx:25-26`).

### 4.4 브레이크포인트

| 이름  | 값     | 비고               |
| ----- | ------ | ------------------ |
| `xs`  | 475px  | 커스텀. 실사용 0건 |
| `sm`  | 640px  | Tailwind 기본      |
| `md`  | 768px  | Tailwind 기본      |
| `lg`  | 1024px | **실질적 기준선**  |
| `xl`  | 1280px | Tailwind 기본      |
| `xl2` | 1300px | 커스텀. 실사용 0건 |
| `2xl` | 1536px | Tailwind 기본      |

**실질적으로 `lg`(1024px) 하나가 기준선이다.** 이 사이트의 반응형은 대부분 "모바일 값 + `lg:` 데스크톱 값" 2단계로 처리된다. `md`나 `xl`로 중간 단계를 추가하는 것은 기존 패턴에서 벗어난다 — 카드 그리드 열 수를 조절할 때처럼 꼭 필요한 경우에만 `sm:`을 끼운다(`src/components/services/AssetsSection.tsx:53`).

커스텀 브레이크포인트 `xs`와 `xl2`는 정의만 되어 있고 쓰이지 않는다. 새로 쓰지 않는다.

---

## 5. 컴포넌트 레시피

아래 코드는 그대로 복사해 쓸 수 있다. 클래스 문자열을 임의로 줄이거나 값을 바꾸지 않는다. 원본 코드에 남아 있는 `var(--color-*)` 임의값 표기는 표준 유틸 클래스로 바꿔 적었다(9절 참조).

### 5.1 1차 버튼 (딥그린 솔리드)

흰색·워시 배경 위의 주 행동. 문의는 Typeform 팝업으로 연결한다.

```tsx
import { PopupButton } from '@typeform/embed-react';

<PopupButton
  id="bZKbfTne"
  className="text-white flex justify-center font-semibold text-label-md lg:text-label-lg lg:max-w-[180px] w-full mt-11 px-5 lg:px-[22px] py-4 lg:py-5 bg-primary-800 hover:bg-primary-900 transition-colors rounded-[4px] cursor-pointer"
>
  {t('cta.inquiry')}
</PopupButton>;
```

`id="bZKbfTne"`는 현재 사이트가 쓰는 문의 폼 ID다. 다른 폼이 필요하면 담당자에게 새 ID를 받는다. 팝업이 아닌 일반 링크라면 `PopupButton` 대신 `@/i18n/navigation`의 `Link`에 같은 className을 쓴다(8.1 참조).

모바일에서 `w-full`로 꽉 차고 데스크톱에서 `lg:max-w-[180px]`로 좁아지는 것이 이 사이트 버튼의 기본 거동이다.

### 5.2 2차 버튼 (테두리 + 화살표)

"자세히 보기"처럼 부차적인 이동.

```tsx
import { Link } from '@/i18n/navigation';
import IcArrowIcon from '@/public/assets/icons/main_ic_arrow.svg';

<Link
  href="/services"
  className="mt-12 lg:mt-0 text-label-lg w-full lg:max-w-[200px] justify-center flex items-center text-primary-800 font-semibold pl-[32px] pr-[22px] py-4 lg:py-[22px] border border-primary-700 rounded-[4px] hover:bg-primary-50 transition-colors"
>
  {t('cta.learnMore')}
  <IcArrowIcon />
</Link>;
```

좌우 패딩이 비대칭(`pl-[32px] pr-[22px]`)인 것은 오른쪽 화살표 아이콘이 시각적 여백을 만들기 때문이다. 의도된 값이다.

### 5.3 역상 버튼 (초록 배경 위 검정)

`bg-primary-600` 섹션 안의 CTA. 이 조합이 사이트의 시그니처다.

```tsx
<PopupButton
  id="bZKbfTne"
  className="w-full lg:w-[165px] font-semibold px-5 py-4 lg:px-[22px] lg:py-[20px] bg-gray-900 text-label-md lg:text-label-lg rounded-[4px] text-white hover:bg-gray-700 transition-colors cursor-pointer"
>
  {t('cta.contact')}
</PopupButton>
```

### 5.4 아이콘 카드

기능·특징을 아이콘과 함께 나열할 때. 아이콘은 124px 정사각 테두리 박스에 담는다.

```tsx
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
```

나열은 `<div className="flex flex-col lg:flex-row gap-8">`로 감싼다. 카드 3개까지가 한 줄에 들어간다(432px × 3 + gap 32px × 2 = 1360px, 컨테이너 내부폭 1360px).

아이콘은 SVG를 컴포넌트로 import해 넣는다: `import ColdWalletIcon from '@/public/assets/icons/cold_wallet.svg'` 후 `icon={<ColdWalletIcon />}`.

**경로 별칭이 두 개라는 점에 주의한다** — `@/*`는 `src/*`, `@/public/*`는 `public/*`을 가리킨다(`tsconfig.json`). SVG는 `public/` 아래 있으므로 `@/public/assets/icons/...`로 import해야 하고, `next.config.ts`의 turbopack 규칙이 `@svgr/webpack`으로 React 컴포넌트로 변환한다. `next/image`용 이미지도 같은 별칭으로 static import한다(`import IsmsImg from '@/public/assets/images/img_isms_color.png'`).

### 5.5 통계 카드 (흰/검정 2분할)

수치 두 개를 대비시킬 때. 오른쪽 검정 칸이 KODA 수치다.

```tsx
<div className="rounded-[4px] border border-gray-50 overflow-hidden">
  <div className="flex flex-row">
    <div className="flex-1 bg-white p-6 lg:p-8">
      <div className="text-center space-y-2">
        <h3 className="text-title-sm lg:text-title-lg font-semibold">{t('stats.total.label')}</h3>
        <div className="text-title-lg lg:text-headline-md font-semibold lg:font-bold">{t('stats.total.amount')}</div>
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
```

`overflow-hidden`이 있어야 자식의 배경색이 4px 코너를 넘지 않는다.

### 5.6 아코디언

FAQ처럼 접히는 목록. 접근성 속성(`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`)을 빼지 않는다.

```tsx
'use client';

import { useState, useCallback } from 'react';
import ArrowIcon from '@/public/assets/icons/arrow.svg';

const Accordion = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = useCallback((id: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  return (
    <section className="space-y-0">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <article key={item.id} className="border-b border-gray-50 last:border-b-0 group">
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
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 pb-4 lg:pb-8' : 'max-h-0'
              }`}
            >
              <p className="text-body-md font-medium lg:font-normal lg:text-body-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {t(item.answerKey)}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};
```

`max-h-96`(384px)이 펼친 높이의 상한이다. 답변이 그보다 길면 잘리므로 긴 답변에는 값을 키운다.

`text-gray-900`을 명시한 이유는 `group-hover:text-primary-700` 전환의 기점이 필요하기 때문이다(2.3 참조).

### 5.7 문서형 텍스트 컴포넌트

약관·정책·지침 페이지는 클래스를 직접 쓰지 않고 `src/components/typography`의 컴포넌트를 쓴다.

| 컴포넌트                                                  | 렌더                                                  | import 경로                         |
| --------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------- |
| `H1`                                                      | `text-headline-lg font-bold`                          | `@/components/typography`           |
| `H2`                                                      | `text-headline-xs lg:text-headline-sm font-bold my-6` | `@/components/typography`           |
| `H3`                                                      | `text-title-md lg:text-headline-xs font-bold`         | `@/components/typography`           |
| `P`                                                       | `text-body-sm lg:text-body-lg my-6`                   | `@/components/typography`           |
| `Ol` / `Li` / `Ul`                                        | 번호·불릿 목록                                        | `@/components/typography`           |
| `TableContainer` / `Thead` / `Tbody` / `Tr` / `Th` / `Td` | 표 (가로 스크롤 포함)                                 | `@/components/typography`           |
| `SubOl` / `SubLi` / `SubCircledOl` / `SubCircledLi`       | 서브 목록 (①②③ 스타일)                                | **`@/components/typography/Lists`** |

**서브 목록 4종은 배럴(`index.tsx`)에서 빠져 있다.** `@/components/typography`에서 import하면 오류가 나므로 `@/components/typography/Lists`에서 직접 가져온다. `src/app/[locale]/work-guidelines/page.tsx:2`가 그 예다.

```tsx
import { H2, H3, Li, Ol, P } from '@/components/typography';
import { SubCircledLi, SubCircledOl } from '@/components/typography/Lists';
```

원형 숫자 목록(①②③)은 `globals.css`의 `@counter-style circled-decimal`과 `.k-circleol`·`.k-subcircled-li` 클래스로 구현돼 있다. 직접 마크업하지 말고 컴포넌트를 쓴다.

### 5.8 블로그 본문 킷

장문 콘텐츠(테크블로그 등)에는 위 문서형 컴포넌트에 더해 `@/components/blog/PostElements`의 5종을 쓴다 — `CodeBlock`(언어 라벨 + 코드 블록), `InlineCode`, `Figure`(이미지+캡션), `Blockquote`, `Callout`. 노션 블록과 1:1 대응하도록 설계돼 있으며, 노션 초안을 글로 변환하는 절차는 `docs/design/blog-post-workflow.md`에 있다.

목록 안에 서브 목록을 넣는 형태:

```tsx
<Ol>
  {t.raw('sections.first.items').map((item: string, index: number) => (
    <Li key={index}>
      {item}
      {index === 1 && (
        <SubCircledOl>
          {t.raw('sections.first.subItems').map((subItem: string, subIndex: number) => (
            <SubCircledLi key={subIndex}>{subItem}</SubCircledLi>
          ))}
        </SubCircledOl>
      )}
    </Li>
  ))}
</Ol>
```

---

## 6. 모션

모션은 절제한다. **진입 애니메이션 1종 + hover 색 전환**이 전부다. 회전·스케일·바운스·패럴랙스·스크롤 연동 변형을 쓰지 않는다.

### 6.1 진입 fade-up

랜딩 섹션은 뷰포트에 들어올 때 한 번 나타난다. `useScrollAnimation` 훅과 조건부 클래스를 짝지어 쓴다. `src/**`의 13개 섹션이 이 조합을 쓴다.

```tsx
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
      {/* 컨테이너 div와 내용 */}
    </section>
  );
};
```

훅 기본값은 그대로 쓴다 — `threshold: 0.1`, `rootMargin: '-200px 0px'`, `triggerOnce: true`(`src/hooks/useScrollAnimation.ts:11-15`). `rootMargin`이 -200px이라 섹션이 화면에 충분히 들어온 뒤 시작하고, `triggerOnce`라 되돌아가도 다시 재생되지 않는다. 값을 바꾸면 다른 섹션과 리듬이 어긋난다.

**히어로 섹션에는 쓰지 않는다.** 첫 화면은 스크롤 없이 보이므로 진입 애니메이션이 의미가 없다. 히어로는 대신 3D 씬 로드 완료 시점의 페이드인을 쓴다(6.2).

**문서형 페이지에도 쓰지 않는다.** 읽으러 온 화면에서는 나타나는 연출이 방해가 된다.

### 6.2 Spline 3D

3D 씬은 **히어로에만** 쓴다. 다른 섹션에 넣으면 페이지 무게중심이 흐트러지고 로딩 비용도 커진다.

```tsx
'use client';

import { useState, useEffect } from 'react';
import SplineScene from '@/components/common/SplineScene';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="max-w-[1440px] w-full px-5 lg:px-10 mx-auto">
      <section className="mx-auto overflow-x-hidden">
        <div
          className={`grid lg:grid-cols-2 items-center lg:pt-10 transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">{/* 제목·설명·버튼 */}</div>
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
```

네 가지가 필수다.

- **`isMounted` 가드** — Spline은 SSR에서 렌더링할 수 없어 hydration 불일치가 난다.
- **`onSplineLoaded` + `opacity` 전환(`duration-500`)** — 씬이 로드되기 전 빈 캔버스가 보이는 것을 막는다. 텍스트까지 함께 페이드인되도록 래퍼 `<div>`에 걸어야 한다.
- **`pointer-events-none`** — 3D 씬이 스크롤을 가로채지 않게 한다.
- **`[&_canvas]:!scale-[1.0] lg:[&_canvas]:!scale-[1.2]`** — 씬은 캔버스 크기가 고정이라 데스크톱에서 확대해야 여백이 맞는다.

`scene` URL은 Spline에서 발행한 씬마다 다르다.

**씬이 없을 때는 3D를 억지로 넣지 않는다.** 두 가지 대안이 있다.

- **정적 이미지로 대체** — 위 구조를 그대로 두고 `SplineScene` 자리에 `next/image`를 넣는다. `isMounted` 가드와 `onSplineLoaded` 페이드인은 필요 없어지므로 서버 컴포넌트로 만들 수 있다.
- **시각물 없이 텍스트만** — 2열 그리드를 쓰지 않는다. 컨테이너 안에 텍스트 블록 하나만 두고, 데스크톱에서 왼쪽 정렬로 둔다. 빈 오른쪽 칸을 남기면 레이아웃이 깨져 보인다.

```tsx
<div className="max-w-[1440px] w-full px-5 lg:px-10 mx-auto">
  <section className="mx-auto overflow-x-hidden">
    <div className="lg:pt-10">
      <div className="space-y-4 lg:space-y-6">
        <h1 className="text-center lg:text-left text-headline-lg lg:text-display-lg font-bold">
          {t.rich('title', brMap)}
        </h1>
        <p className="text-center lg:text-left text-body-md lg:text-body-lg font-medium lg:font-normal text-gray-700">
          {t.rich('description', brMap)}
        </p>
        {/* 1차 버튼 (5.1) */}
      </div>
    </div>
  </section>
</div>
```

모바일 가운데 정렬 → 데스크톱 왼쪽 정렬(`text-center lg:text-left`)은 시각물이 있든 없든 히어로의 공통 규칙이다.

### 6.3 hover

`transition-colors`만 쓴다. 배경색·글자색 변화 외의 hover 효과(들어올림, 확대, 테두리 굵어짐, 섀도 추가)를 쓰지 않는다.

| 요소                     | hover                                            |
| ------------------------ | ------------------------------------------------ |
| 1차 버튼                 | `bg-primary-800` → `hover:bg-primary-900`        |
| 2차 버튼                 | 배경 없음 → `hover:bg-primary-50`                |
| 역상 버튼 (초록 배경 위) | `bg-gray-900` → `hover:bg-gray-700`              |
| 아코디언 제목            | `text-gray-900` → `group-hover:text-primary-700` |
| 내비 링크                | `text-gray-800` → `hover:text-primary-700`       |

아코디언 펼침만 예외적으로 `transition-all duration-300 ease-in-out`과 `max-h` 전환을 쓴다(5.6 참조). 화살표 회전(`rotate-180`)도 이 경우에만 허용한다 — 열림/닫힘 상태를 알리는 기능적 표시이기 때문이다.

---

## 7. 페이지 유형별 골격

### 7.1 랜딩형

파일 배치:

```
src/app/[locale]/<route>/page.tsx        ← 섹션을 조립만 한다
src/components/<route>/HeroSection.tsx
src/components/<route>/XxxSection.tsx
src/components/<route>/index.ts          ← 배럴 export
```

`page.tsx`는 조립과 locale 분기만 담당한다.

```tsx
import { ContactSection, FeatureSection, HeroSection } from '@/components/about';

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
```

`params`가 `Promise`라는 점에 주의한다 — Next.js 15에서 바뀐 시그니처다. locale을 쓰지 않는 페이지면 `params`를 받지 않아도 된다.

**라우트 디렉터리 이름을 `_`로 시작하지 않는다.** Next.js는 `_`로 시작하는 폴더를 private folder로 보고 라우팅에서 제외한다. `src/app/[locale]/_draft/page.tsx`를 만들면 타입 검사와 빌드는 통과하지만 라우트가 생성되지 않고 빌드 결과의 라우트 목록에도 나타나지 않는다.

배럴은 이렇게 쓴다.

```ts
export { default as HeroSection } from './HeroSection';
export { default as FeatureSection } from './FeatureSection';
export { default as ContactSection } from './ContactSection';
```

섹션 순서는 홈의 흐름을 따른다: **히어로 → 신뢰 근거(실적·투자자·수치) → 역량(보안·보험) → 상세(솔루션) → 외부 증빙(미디어) → 문의**. 배경은 `bg-white`와 `bg-gray-5020`을 번갈아 쓰고 마지막 문의 섹션만 `bg-primary-600`으로 끝낸다.

각 섹션 컴포넌트의 기본 형태:

```tsx
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
        <div className="space-y-3 lg:space-y-4">
          <h2 className="text-headline-sm lg:text-headline-lg font-bold">{t.rich('title', brMap)}</h2>
          <p className="text-body-md lg:text-body-xl font-medium lg:font-normal text-gray-700">
            {t.rich('description', brMap)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
```

`bg-gray-5020` 섹션이면 `<section>`의 className에 그것을 추가한다. 컨테이너 `<div>`는 배경과 무관하게 항상 같다.

### 7.2 문서형

파일 배치: `src/app/[locale]/<route>/page.tsx` 하나로 끝낸다. 섹션 컴포넌트를 만들지 않는다.

```tsx
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
```

특징 네 가지.

- **서버 컴포넌트다** (`'use client'` 없음). `getTranslations`를 `await`로 쓴다.
- **진입 애니메이션이 없다.** 읽으러 온 화면에서는 나타나는 연출이 방해가 된다.
- **`whitespace-pre-line`이 컨테이너에 있어** 메시지 JSON의 실제 개행이 그대로 살아난다. 이 경우 `brMap` 줄바꿈 토큰이 필요 없다.
- **h1만 직접 클래스를 쓰고** 나머지는 `H2`/`H3`/`P` 컴포넌트를 쓴다. h1 아래 여백이 `lg:mb-[120px]`로 크게 벌어지는 것이 문서 페이지의 인상을 만든다.

목록형 페이지(공지·FAQ)는 컨테이너를 문서 목록형(4.1)으로 바꾸고 `min-h`를 넣는다. 목록 자체는 클라이언트 상태(펼침·더보기)가 필요하면 별도 컴포넌트로 분리한다.

---

## 8. i18n 필수 규칙

**이 절을 건너뛰면 새 페이지는 반드시 깨진다.** 이 사이트에 하드코딩된 문구는 없다. 모든 텍스트가 `messages/ko.json`·`messages/en.json`을 거친다.

### 8.1 라우팅

`src/i18n/routing.ts` 설정: `locales: ['ko', 'en']`, `defaultLocale: 'ko'`, `localePrefix: 'as-needed'`.

`as-needed`라서 한국어는 `/notice`, 영어는 `/en/notice`가 된다. 페이지 파일은 `src/app/[locale]/` 아래에 만든다.

**내부 링크는 `@/i18n/navigation`의 `Link`를 쓴다.** `next/link`를 직접 쓰면 en 페이지에서 `/blog`로 이동할 때 locale 접두사가 빠져 한국어 페이지로 떨어진다. `href`에는 locale 없는 경로만 적는다 — 접두사는 next-intl이 붙인다.

```tsx
import { Link } from '@/i18n/navigation';

<Link href="/blog">테크블로그</Link>; // ko에선 /blog, en에선 /en/blog
```

기존 랜딩 섹션 일부는 `next/link`를 직접 쓰고 있는데 이는 잠재 버그다(9절 참조). 올바른 선례는 `src/components/notice/BackToListButton.tsx`다. (테크블로그 검증에서 확인)

### 8.2 메시지 파일 동시 수정

새 문구를 추가할 때 **`messages/ko.json`과 `messages/en.json`에 같은 키를 동시에** 넣는다. 한쪽만 넣으면 다른 언어에서 런타임 오류가 난다.

현재 상위 네임스페이스 13개: `header`, `footer`, `home`, `service`, `notice`, `faq`, `news`, `privacyPolicy`, `ethicalManagement`, `workGuidelines`, `cryptoWarning`, `meta`, `modal`.

새 페이지는 새 상위 네임스페이스를 하나 만든다. 네이밍은 라우트 이름의 camelCase다(`/about-us` → `aboutUs`).

키 구조는 컴포넌트 구조를 따른다.

```json
{
  "about": {
    "hero": { "title": "...", "description": "...", "cta": { "inquiry": "..." } },
    "feature": { "title": "...", "items": ["...", "..."] }
  }
}
```

**`messages/ko.json`이 타입의 원천이다.** `next.config.ts`의 next-intl 플러그인이 `createMessagesDeclaration: './messages/ko.json'`으로 설정돼 있어, ko.json에서 `messages/ko.d.json.ts`를 자동 생성한다. 따라서 ko.json에 없는 키를 `t()`로 호출하면 타입 오류가 난다. 영어만 먼저 추가하는 순서로 작업하지 않는다 — ko를 먼저 넣는다.

`messages/ko.d.json.ts`는 빌드·개발 서버 실행 시 자동으로 다시 만들어지며 `.gitignore`에 등록돼 있다(`.gitignore:44`). 직접 편집하거나 커밋하지 않는다.

### 8.3 세 가지 호출 방식

| 호출                   | 용도                      | 반환        |
| ---------------------- | ------------------------- | ----------- |
| `t('key')`             | 일반 문자열               | `string`    |
| `t.rich('key', brMap)` | 줄바꿈 토큰이 들어간 문구 | `ReactNode` |
| `t.raw('key')`         | 배열·객체 (목록 렌더링)   | 원본 값     |

`t.raw`로 배열을 받을 때는 타입을 명시한다: `t.raw('items').map((item: string, index: number) => ...)`. 타입을 생략하면 `any` 오류가 난다.

클라이언트 컴포넌트는 `useTranslations('namespace')`, 서버 컴포넌트는 `await getTranslations('namespace')`를 쓴다. 네임스페이스는 점 표기로 하위까지 지정할 수 있다(`useTranslations('home.hero')`).

### 8.4 줄바꿈 토큰 (brMap)

디자인상 줄바꿈 위치를 지정해야 할 때 메시지 안에 태그를 넣고 `brMap`을 넘긴다.

```tsx
import { brMap } from '@/i18n/brMap';

<h2>{t.rich('title', brMap)}</h2>;
```

```json
{ "title": "안전한 디지털 자산<brPc></brPc>수탁 서비스" }
```

| 토큰              | 동작                           | 렌더 결과                            |
| ----------------- | ------------------------------ | ------------------------------------ |
| `<brPc></brPc>`   | 데스크톱(≥1024px)에서만 줄바꿈 | `<br className="hidden lg:block" />` |
| `<brMo></brMo>`   | 모바일(<1024px)에서만 줄바꿈   | `<br className="block lg:hidden" />` |
| `<brAll></brAll>` | 항상 줄바꿈                    | `<br />`                             |

정의는 `src/i18n/brMap.tsx`에 있다. `t.rich` 없이 `t`로 호출하면 태그가 문자 그대로 화면에 나온다.

반대로 `whitespace-pre-line`이 걸린 문서형 컨테이너에서는 JSON의 실제 개행을 그대로 쓸 수 있어 `brMap`이 필요 없다. 랜딩형에서도 `lg:whitespace-pre-line`을 걸어 데스크톱에서만 개행을 살리는 방식을 쓰기도 한다(`src/components/home/SolutionsSection.tsx:108`).

### 8.5 메타데이터

새 페이지마다 `generateMetadata`를 붙인다. `meta` 네임스페이스에 항목을 추가하고 `alternates.languages`에 ko/en/x-default 3종을 채운다.

```tsx
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('about.title'),
    description: t('about.description'),
    alternates: {
      canonical: `https://kodax.com/${locale}/about`,
      languages: {
        ko: 'https://kodax.com/about',
        en: 'https://kodax.com/en/about',
        'x-default': 'https://kodax.com/about',
      },
    },
  };
}
```

전체 형태는 `src/app/[locale]/layout.tsx:10-76`을 참고한다. 루트 레이아웃이 `title.template`을 `%s | ${siteName}`으로 잡아두었으므로 페이지에서는 `title`에 페이지 이름만 넣는다.

`src/app/sitemap.ts`에도 새 라우트를 추가한다.

---

## 9. 알려진 불일치

아래는 **기존 코드에 남아 있는 편차**다. 이 문서의 표준과 다르지만 의도적으로 수정하지 않았다(정리는 별도 작업). 새 코드는 표준을 따른다.

| #   | 편차                                | 표준                            | 실제 위치                                                                                                                                                                                                                                                                                                                                                                   |
| --- | ----------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 하드코딩 hex `text-[#919db6]`       | 토큰 유틸 클래스                | `src/components/modal/ImagePopup.tsx:53` (1건)                                                                                                                                                                                                                                                                                                                              |
| 2   | `var(--color-*)` 임의값 표기        | 유틸 클래스 (`text-gray-700`)   | 22개 파일, 50건. 홈·서비스 섹션 전반                                                                                                                                                                                                                                                                                                                                        |
| 3   | 코너 반경 혼용                      | `rounded-[4px]`                 | `rounded-lg`: `typography/Table.tsx:16`, `home/InvestorsSection.tsx:50`, `contexts/ModalContext.tsx:37` / `rounded-md`: `notice/BackToListButton.tsx:10`, `news/MoreListViewButton.tsx:13`, `Header/MobileMenuButton.tsx:23` / `rounded`: `Header/ContactButton.tsx:12` / `rounded-[8px]`: `services/DashBoardSection.tsx:69` / `rounded-[12px]`: `modal/ImagePopup.tsx:50` |
| 4   | 강조 섹션 여백이 상하 비대칭·제각각 | `pt-[72px] pb-20 lg:py-[170px]` | `home/SolutionsSection.tsx:101` = `lg:pt-[170px] lg:pb-[200px]` / `home/ContactSection.tsx:15`·`services/ContactSection.tsx:15` = `lg:pt-[180px] lg:pb-[170px]` / `home/AchievementSection.tsx:16` = `pt-[230px] pb-[80px] lg:py-[140px]`                                                                                                                                   |
| 5   | 섀도를 떠 있지 않은 요소에 사용     | 섀도는 모달·팝업만              | `services/DashBoardSection.tsx:69` (`shadow-lg`를 이미지에 적용)                                                                                                                                                                                                                                                                                                            |
| 6   | 컨테이너 상단 여백 누락             | 문서 본문 컨테이너 문자열       | `src/app/[locale]/privacy-policy/[version]/page.tsx:55` — `mt-[72px]`가 없고 `mt-32`로 시작해 모바일 상단 여백이 다르다                                                                                                                                                                                                                                                     |
| 7   | 목록 페이지 좌우 여백               | `lg:px-[200px]`                 | `src/app/[locale]/news/page.tsx:7` = `lg:px-[100px]` (카드 그리드용 의도적 예외)                                                                                                                                                                                                                                                                                            |

특히 주의할 것.

- **`src/components/typography/Table.tsx`는 표준과 세 군데 다르다** — `rounded-lg`(표준 `rounded-[4px]`), `border-gray-200`(표준 `border-gray-50`), `text-[var(--color-gray-700)]`(표준 `text-gray-700`). 이 컴포넌트를 **그대로 쓰는 것은 괜찮다** — 문서형 페이지의 기존 표와 생김새를 맞춰야 하기 때문이다. 다만 이 코드를 새 컴포넌트의 본으로 삼아 복사하지 않는다.

- **`lg:py-[170px]`(와이드 여백)은 소스에 아직 없다.** 기존 강조 섹션이 위 표 4번처럼 각각 다른 값을 쓰고 있어, 이 문서가 상하 대칭 170px로 새로 정했다. 첫 사용자는 새 페이지 작성자가 된다.

- **`AchievementSection`의 여백은 특수 사례다** — 상단에 벤처기업 배지를 `absolute`로 겹쳐 놓아서(`-top-[248px] lg:-top-[170px]`) 그 공간을 확보하려고 `pt-[230px]`를 준다. 오버랩 배지가 없는 섹션에 이 값을 복사하지 않는다.

- **`secondary` 팔레트와 커스텀 브레이크포인트 `xs`·`xl2`는 정의만 있고 실사용이 0건이다.** 편차라기보다 미사용 자산이다. 삭제하지 않되 새로 쓰지도 않는다.

- **제목 색 표기가 갈린다** — 색 생략 32건, `text-gray-900` 명시 9건. 표준은 생략이며 `text-gray-900`은 hover 전환 기점으로만 쓴다(2.3).

- **기존 랜딩 섹션 일부가 내부 링크에 `next/link`를 직접 쓴다** — `home/SolutionsSection.tsx:14`, `home/MediaSection.tsx` 등. en 로케일에서 locale 접두사가 빠지는 잠재 버그이며, 표준은 `@/i18n/navigation`의 `Link`다(8.1). 올바른 선례는 `notice/BackToListButton.tsx`·`blog/*`. (테크블로그 검증에서 확인)
