# 새 페이지 생성 프롬프트 템플릿

`docs/design/style-guide.md`를 기준으로 새 페이지를 만들 때 쓰는 프롬프트다. 상황에 따라 두 버전 중 하나를 쓴다.

- **레포용** — Claude Code 등에서 이 저장소를 대상으로 작업할 때. 가이드 파일을 직접 읽을 수 있으니 짧다.
- **번들용** — v0·ChatGPT처럼 저장소를 못 읽는 도구에 쓸 때. 규칙을 프롬프트 본문에 전부 담는다.

> 이 문서는 `docs/design/style-guide.md`의 파생본이다. 정본이 바뀌면 여기도 함께 고친다.

---

## 1. 레포용 템플릿

아래를 복사해 `<...>` 부분을 채운다.

```
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
- 텍스트는 전부 messages/ko.json과 messages/en.json에 같은 키로 넣는다. 하드코딩하지 않는다.
- 컴포넌트가 필요하면 5절 레시피를 복사해 쓴다.
- 새 라우트면 src/app/sitemap.ts와 generateMetadata도 추가한다.
- 완료 후 npm run lint와 npm run build가 통과하는지 확인한다.

## 하지 말 것
- src/app/[locale]/globals.css를 수정하지 말 것 (토큰 추가·변경 금지)
- 기존 컴포넌트·페이지를 수정하지 말 것
- secondary 팔레트, 하드코딩 hex, var(--color-*) 임의값, rounded-[4px] 외의 코너, 새 라이브러리 추가 금지
```

---

## 2. 번들용 템플릿 (자기완결)

외부 도구는 저장소를 읽을 수 없으므로 규칙을 전부 담는다. 아래 블록 전체를 복사한 뒤 마지막 "페이지 사양"만 채운다.

````
너는 KODA(한국디지털에셋, 디지털자산 수탁 사업자) 웹사이트의 새 페이지를 만든다.
Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS v4 + next-intl 4 환경이다.

# 디자인 성격

조용한 기관형 미니멀 + 딥그린 앵커. 배경은 순백과 아주 옅은 뉴트럴 워시(#e8eae9 20% 알파)만
교차한다. 강조는 밝은 민트(#00d998)가 아니라 딥그린이 담당한다 — 버튼은 primary-800 #006d4c,
강조 섹션 배경은 primary-600 #00c68c. 대비 앵커는 순검정이며, 초록 섹션 위에 검정 버튼을 얹는
조합이 시그니처다. 뉴트럴도 중성회색이 아니라 초록기가 도는 회색(gray-900 = #00160f)이어서 화면
전체가 한 계열로 묶인다. 섀도 대신 1px #e8eae9 얇은 테두리로 면을 구분하고, 코너는 4px로 각져서
금융기관다운 절제가 나온다. 여백은 넉넉하며(데스크톱 섹션 상하 128~170px), 모션은 fade + 20px
상승 한 번(duration-800 ease-out)으로 끝낸다. 3D 씬은 히어로에만 쓰는 유일한 화려함이다.

판단이 애매할 때는 이 성격을 기준으로 결정한다. "더 화려하게"·"더 둥글게"·"색을 하나 더"는
이 성격에서 멀어지는 방향이다.

# 컬러

Tailwind v4 @theme 토큰이다. 반드시 유틸 클래스로 쓴다 (bg-primary-800, text-gray-700 형태).

primary (딥그린):
  primary-50  #e6fbf5   2차 버튼 hover 배경
  primary-100 #ccf7ea   미사용
  primary-200 #99f0d6   미사용
  primary-300 #66e8c1   미사용
  primary-400 #33e1ad   미사용
  primary-500 #00d998   SVG 아이콘 내부 전용. 클래스로 쓰지 않는다
  primary-600 #00c68c   문의 유도 섹션 배경
  primary-700 #00986a   강조 텍스트, 활성 내비, 2차 버튼 테두리
  primary-800 #006d4c   1차 버튼 배경, 2차 버튼 텍스트
  primary-900 #00573d   1차 버튼 hover 배경

gray (초록기 도는 뉴트럴):
  gray-50   #e8eae9     경계선, 옅은 배경
  gray-5050 #e8eae980   미사용 (gray-50의 50% 알파)
  gray-5020 #e8eae933   교차 섹션 배경, 표 헤더 (gray-50의 20% 알파)
  gray-100  #ccd0cf     미사용
  gray-200  #b3b9b7     검정 배경 위 본문
  gray-300  #99a29f     보조 텍스트
  gray-400  #808b87     검정 배경 위 저작권
  gray-500  #66736f     출처·캡션
  gray-700  #33453f     본문 텍스트 (가장 많이 쓰임), 역상 버튼 hover
  gray-800  #1a2d27     헤더 내비 비활성 링크
  gray-900  #00160f     역상 버튼 배경, hover 전환 기점

secondary (블루 10단계)는 정의만 있고 실사용 0건이다. 절대 쓰지 않는다.

## 역할
- 섹션 배경: bg-white / bg-gray-5020 / bg-primary-600 — 이 3종만 교차한다
- 1차 버튼: bg-primary-800, hover:bg-primary-900, text-white
- 2차 버튼: border border-primary-700, text-primary-800, hover:bg-primary-50
- 초록 배경 위 버튼: bg-gray-900, hover:bg-gray-700, text-white  ← 시그니처 조합
- 경계선: border border-gray-50 (1px) — 섀도 대신 테두리로 면을 구분한다
- 본문: text-gray-700 / 출처·캡션: text-gray-500
- 제목: 색 클래스를 쓰지 않는다 (전역 기본 검정). 단 hover로 색이 바뀌는 요소는
  text-gray-900을 기점으로 명시한다 (transition-colors가 시작 색을 필요로 함)
- 검정 면 위 텍스트: 본문 text-gray-200, 저작권 text-gray-400

## 금지
하드코딩 hex(text-[#919db6] 등), text-[var(--color-*)] 임의값, secondary 팔레트,
primary-500을 클래스로 사용, rounded-[4px] 외의 코너 반경, 모달이 아닌 요소에 섀도,
팔레트에 없는 새 색

# 타이포그래피

폰트는 Pretendard Variable(한국어) / Inter(영어). <html>에 font-korean 또는 font-english
클래스가 붙어 자동 전환된다. 둘 다 variable font이므로 웨이트를 자유롭게 쓴다.

아래 유틸 클래스로만 크기를 지정한다. text-[18px] 같은 임의값이나 text-lg 같은 Tailwind
기본 크기를 쓰지 않는다. 유틸 하나가 font-size·line-height·letter-spacing 3개를 함께
고정하므로 임의값을 쓰면 행간과 자간이 어긋난다.

Display (언어별 크기 자동 전환 — 같은 클래스를 쓰면 알아서 바뀐다):
  text-display-lg   한 55px / 영 57px   행간 1.2   자간 -0.25px   히어로 h1
  text-display-md   한 44px / 영 45px   행간 1.2   자간 0         문의 섹션 h2, 강조 수치
  text-display-sm   한 34px / 영 36px   행간 1.2   자간 0         미사용

Headline (언어 공통):
  text-headline-lg  32px  행간 1.25  자간 0   데스크톱 섹션 h2, 모바일 히어로 h1
  text-headline-md  28px  행간 1.3   자간 0   데스크톱 하위 그룹 h3, 강조 수치
  text-headline-sm  24px  행간 1.3   자간 0   모바일 섹션 h2, 문서 페이지 h1
  text-headline-xs  20px  행간 1.3   자간 0   모바일 하위 그룹 h3

Title:
  text-title-lg     20px  행간 1.3   자간 0        데스크톱 카드 제목 h4
  text-title-md     16px  행간 1.5   자간 0.15px   모바일 카드 제목 h4
  text-title-sm     14px  행간 1.5   자간 0.1px    모바일 통계 라벨

Label (버튼·내비):
  text-label-lg     16px  행간 1.5   자간 0   데스크톱 버튼, 헤더 내비
  text-label-md     15px  행간 1.5   자간 0   모바일 버튼
  text-label-sm     14px  행간 1.5   자간 0   헤더 문의 버튼 모바일

Body:
  text-body-xl      20px  행간 1.5   자간 0   데스크톱 랜딩 본문
  text-body-lg      18px  행간 1.5   자간 0   데스크톱 문서 본문, 히어로 설명
  text-body-md      16px  행간 1.5   자간 0   모바일 본문 (가장 많이 쓰임)
  text-body-sm      15px  행간 1.5   자간 0   모바일 문서 본문, 목록 항목

Caption:
  text-caption-lg   14px  행간 1.5   자간 0   출처 표기
  text-caption-sm   12px  행간 1.5   자간 0   미사용

## 계층 조합 (모바일 값 + lg: 데스크톱 값 2단계로 짝짓는다)
  랜딩 h1 (히어로):      text-headline-lg lg:text-display-lg font-bold
  랜딩 h2 (일반 섹션):    text-headline-sm lg:text-headline-lg font-bold
  랜딩 h2 (문의 섹션):    text-headline-lg lg:text-display-md font-bold text-center
  랜딩 h3 (하위 그룹):    text-headline-xs lg:text-headline-md font-bold
  카드 제목 h4:          text-title-md lg:text-title-lg font-semibold
  랜딩 본문:             text-body-md lg:text-body-xl font-medium lg:font-normal text-gray-700
  문서 h1:              text-headline-sm lg:text-headline-lg font-bold
  버튼 라벨:             text-label-md lg:text-label-lg font-semibold
  출처·주석:             text-caption-lg lg:text-body-md font-medium text-gray-500

## 웨이트 하강 규칙
본문은 모바일 font-medium, 데스크톱 font-normal로 떨어뜨린다 (font-medium lg:font-normal).
작은 화면에서 얇은 웨이트가 흐려 보이고 큰 화면에서 굵으면 답답해 보이기 때문이다.
제목에는 적용하지 않는다 — 섹션 제목은 font-bold, 카드 제목·버튼은 font-semibold 고정.
수치 강조만 예외로 font-semibold lg:font-bold로 올린다.

# 레이아웃

## 컨테이너 (그대로 쓴다)
  랜딩 섹션:  max-w-[1440px] w-full px-5 lg:px-10 mx-auto
  문서 본문:  max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] px-5 lg:px-[200px] mx-auto whitespace-pre-line
  문서 목록:  max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[200px] mx-auto min-h-[486px] lg:min-h-[788px]

랜딩 섹션은 <section>(배경색 + 상하 여백)과 안쪽 <div>(좌우 여백 + 최대폭)를 분리한다.
배경을 화면 끝까지 채우면서 내용만 가운데 모으려면 이 분리가 필요하다.
문서형은 컨테이너 하나가 상하 여백까지 겸한다.
문서 목록형의 min-h는 항목이 적을 때 푸터가 올라붙는 것을 막는 장치다 — 빼먹지 않는다.

## 섹션 여백
  기본:    pt-[72px] pb-20 lg:py-32        대부분의 랜딩 섹션
  와이드:  pt-[72px] pb-20 lg:py-[170px]   강조 섹션(페이지의 무게중심)

모바일은 두 단계 모두 동일하다 — 작은 화면에서 여백을 더 벌리면 스크롤만 길어진다.
히어로는 이 규칙 밖이다 (헤더 바로 아래 붙고 lg:pt-10 정도만 준다).

## 그리드
  2열 분할:        grid lg:grid-cols-2 items-center
  세로→가로 전환:   flex flex-col lg:flex-row gap-8
  모바일 순서 뒤집기: 텍스트에 order-2 lg:order-1, 시각물에 order-1 lg:order-2

카드 나열은 grid 대신 flex flex-col lg:flex-row gap-8을 쓰고 카드에 w-full lg:w-[432px]
고정폭을 준다. 카드 3개까지 한 줄에 들어간다.

## 브레이크포인트
실질적으로 lg(1024px) 하나가 기준선이다. 반응형은 대부분 "모바일 값 + lg: 데스크톱 값"
2단계로 처리한다. md나 xl로 중간 단계를 만들지 않는다. 카드 그리드 열 수 조절처럼 꼭
필요할 때만 sm:(640px)을 끼운다. 커스텀 xs(475px)·xl2(1300px)는 실사용 0건이니 쓰지 않는다.

# 모션

진입 애니메이션 1종 + hover 색 전환이 전부다. 회전·스케일·바운스·패럴랙스 금지.

## 진입 fade-up (랜딩 섹션)
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

useScrollAnimation 훅의 기본값(threshold 0.1, rootMargin '-200px 0px', triggerOnce true)을
그대로 쓴다. 값을 바꾸면 다른 섹션과 리듬이 어긋난다.
히어로와 문서형 페이지에는 쓰지 않는다.

## hover
transition-colors만 쓴다. 들어올림·확대·테두리 굵어짐·섀도 추가 금지.
  1차 버튼:    bg-primary-800 → hover:bg-primary-900
  2차 버튼:    배경 없음 → hover:bg-primary-50
  역상 버튼:    bg-gray-900 → hover:bg-gray-700
  아코디언 제목: text-gray-900 → group-hover:text-primary-700
  내비 링크:    text-gray-800 → hover:text-primary-700

아코디언 펼침만 예외로 transition-all duration-300 ease-in-out과 max-h 전환, 화살표
rotate-180을 쓴다 (열림/닫힘을 알리는 기능적 표시이므로).

# 컴포넌트 코드 (그대로 복사해 쓴다)

## 1차 버튼 (딥그린 솔리드) — 흰/워시 배경 위의 주 행동
```tsx
import { PopupButton } from '@typeform/embed-react';

<PopupButton
  id="bZKbfTne"
  className="text-white flex justify-center font-semibold text-label-md lg:text-label-lg lg:max-w-[180px] w-full mt-11 px-5 lg:px-[22px] py-4 lg:py-5 bg-primary-800 hover:bg-primary-900 transition-colors rounded-[4px] cursor-pointer"
>
  {t('cta.inquiry')}
</PopupButton>;
```
문의는 Typeform 팝업(id="bZKbfTne")으로 연결한다. 일반 링크면 PopupButton 대신 next/link의
Link에 같은 className을 쓴다. 모바일 w-full → 데스크톱 lg:max-w-[180px]가 기본 거동이다.

## 2차 버튼 (테두리 + 화살표) — 부차적 이동
```tsx
import Link from 'next/link';
import IcArrowIcon from '@/public/assets/icons/main_ic_arrow.svg';

<Link
  href="/services"
  className="mt-12 lg:mt-0 text-label-lg w-full lg:max-w-[200px] justify-center flex items-center text-primary-800 font-semibold pl-[32px] pr-[22px] py-4 lg:py-[22px] border border-primary-700 rounded-[4px] hover:bg-primary-50 transition-colors"
>
  {t('cta.learnMore')}
  <IcArrowIcon />
</Link>;
```
좌우 패딩 비대칭(pl-[32px] pr-[22px])은 오른쪽 화살표가 시각적 여백을 만들기 때문이다.

## 역상 버튼 (초록 배경 위 검정) — bg-primary-600 섹션의 CTA
```tsx
<PopupButton
  id="bZKbfTne"
  className="w-full lg:w-[165px] font-semibold px-5 py-4 lg:px-[22px] lg:py-[20px] bg-gray-900 text-label-md lg:text-label-lg rounded-[4px] text-white hover:bg-gray-700 transition-colors cursor-pointer"
>
  {t('cta.contact')}
</PopupButton>;
```

## 아이콘 카드 — 기능·특징 나열
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
나열은 <div className="flex flex-col lg:flex-row gap-8">로 감싼다.
아이콘은 SVG 컴포넌트 import: import ColdWalletIcon from '@/public/assets/icons/cold_wallet.svg'
경로 별칭이 두 개다 — @/* → src/*, @/public/* → public/*. SVG와 이미지는 @/public/... 을 쓴다.
next.config.ts의 turbopack 규칙이 @svgr/webpack으로 SVG를 React 컴포넌트로 변환한다.

## 통계 카드 (흰/검정 2분할) — 수치 두 개 대비, 오른쪽 검정이 KODA 수치
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
overflow-hidden이 있어야 자식 배경색이 4px 코너를 넘지 않는다.

## 아코디언 — 접근성 속성을 빼지 않는다
```tsx
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
    className={`overflow-hidden transition-all duration-300 ease-in-out ${
      isOpen ? 'max-h-96 pb-4 lg:pb-8' : 'max-h-0'
    }`}
  >
    <p className="text-body-md font-medium lg:font-normal lg:text-body-lg text-gray-700 leading-relaxed whitespace-pre-line">
      {t(item.answerKey)}
    </p>
  </div>
</article>
```
상태는 useState<Set<number>>로 관리한다. max-h-96(384px)이 펼친 높이 상한이다.

## 문서형 텍스트 컴포넌트
약관·정책·지침 페이지는 클래스를 직접 쓰지 않고 아래를 쓴다.
  @/components/typography 에서: H1, H2, H3, P, Ol, Ul, Li,
                                TableContainer, Thead, Tbody, Tr, Th, Td
  @/components/typography/Lists 에서 직접: SubOl, SubLi, SubCircledOl, SubCircledLi
                                          ← 배럴에 빠져 있어 직접 import해야 한다

# 페이지 골격

## 랜딩형
파일 배치:
  src/app/[locale]/<route>/page.tsx        섹션을 조립만 한다
  src/components/<route>/HeroSection.tsx
  src/components/<route>/XxxSection.tsx
  src/components/<route>/index.ts          배럴 export

```tsx
// page.tsx
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

```ts
// index.ts
export { default as HeroSection } from './HeroSection';
export { default as FeatureSection } from './FeatureSection';
export { default as ContactSection } from './ContactSection';
```

params가 Promise인 점에 주의한다 (Next.js 15에서 바뀐 시그니처).
라우트 디렉터리 이름을 _로 시작하지 않는다 — Next.js가 private folder로 보고 라우팅에서
제외하므로 빌드는 통과하지만 라우트가 생성되지 않는다.

## 히어로에 3D 씬이 없을 때
2열 그리드를 쓰지 않는다. 컨테이너 안에 텍스트 블록 하나만 두고 데스크톱에서 왼쪽 정렬한다.
빈 오른쪽 칸을 남기면 레이아웃이 깨져 보인다. 모바일 가운데 정렬 → 데스크톱 왼쪽 정렬
(text-center lg:text-left)은 시각물이 있든 없든 히어로의 공통 규칙이다.

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
        {/* 1차 버튼 */}
      </div>
    </div>
  </section>
</div>
```

섹션 순서는 홈의 흐름을 따른다:
히어로 → 신뢰 근거(실적·투자자·수치) → 역량(보안·보험) → 상세(솔루션) → 외부 증빙 → 문의
배경은 bg-white와 bg-gray-5020을 번갈아 쓰고 마지막 문의 섹션만 bg-primary-600으로 끝낸다.

## 문서형
src/app/[locale]/<route>/page.tsx 하나로 끝낸다. 섹션 컴포넌트를 만들지 않는다.

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

서버 컴포넌트다('use client' 없음). 진입 애니메이션이 없다. whitespace-pre-line이 컨테이너에
있어 JSON의 실제 개행이 살아난다. h1만 직접 클래스를 쓴다.

# i18n (이걸 어기면 반드시 깨진다)

이 사이트에 하드코딩된 문구는 없다. 모든 텍스트가 messages/ko.json·messages/en.json을 거친다.

- 라우팅: locales ['ko','en'], defaultLocale 'ko', localePrefix 'as-needed'
  → 한국어 /notice, 영어 /en/notice. 페이지는 src/app/[locale]/ 아래에 만든다.
- 새 문구는 messages/ko.json과 messages/en.json에 같은 키를 동시에 넣는다.
  한쪽만 넣으면 다른 언어에서 런타임 오류가 난다.
- messages/ko.json이 타입의 원천이다. next.config.ts의 createMessagesDeclaration 설정이
  ko.json에서 messages/ko.d.json.ts를 생성하므로, ko에 없는 키는 타입 오류가 난다.
  영어만 먼저 추가하지 말고 ko를 먼저 넣는다.
- 새 페이지는 새 상위 네임스페이스를 하나 만든다. 라우트 이름의 camelCase(/about-us → aboutUs).
- 호출 방식 3가지:
    t('key')                 일반 문자열
    t.rich('key', brMap)     줄바꿈 토큰이 들어간 문구 → ReactNode
    t.raw('key')             배열·객체. 타입 명시 필수: .map((item: string, index: number) => ...)
- 클라이언트 컴포넌트는 useTranslations('ns'), 서버 컴포넌트는 await getTranslations('ns')
- 줄바꿈 토큰 (import { brMap } from '@/i18n/brMap'):
    <brPc></brPc>   데스크톱(≥1024px)에서만 줄바꿈
    <brMo></brMo>   모바일(<1024px)에서만 줄바꿈
    <brAll></brAll> 항상 줄바꿈
  JSON 예: { "title": "안전한 디지털 자산<brPc></brPc>수탁 서비스" }
  t.rich 없이 t로 호출하면 태그가 문자 그대로 화면에 나온다.
- 새 라우트면 generateMetadata(alternates.languages에 ko/en/x-default 3종)와
  src/app/sitemap.ts도 추가한다.

# 페이지 사양

- 라우트: <...>
- 페이지 유형: <랜딩형 | 문서형(본문) | 문서형(목록)>
- 목적: <...>
- i18n 네임스페이스: <...>
- 섹션 구성:
  1. <...>
  2. <...>
  3. <...>

위 규칙을 지켜 page.tsx, 섹션 컴포넌트, index.ts 배럴, messages/ko.json과 en.json 추가분을
모두 작성해라. globals.css는 수정하지 마라.
````

---

## 3. 어느 쪽을 쓸지

| 상황                                | 템플릿                                                |
| ----------------------------------- | ----------------------------------------------------- |
| 이 저장소에서 Claude Code로 작업    | 레포용                                                |
| 외부 AI 도구로 초안만 뽑아 옮겨오기 | 번들용                                                |
| 초안을 받은 뒤 저장소에서 마무리    | 번들용으로 초안 → 레포용으로 "가이드에 맞게 정리해줘" |

번들용 결과물을 저장소에 옮긴 뒤에는 `npm run lint`와 `npm run build`를 반드시 돌린다. 외부 도구는 이 저장소의 SVG 로더 설정(`@svgr/webpack`)과 경로 별칭(`@/`)을 모르기 때문에 import 경로가 어긋나 있을 가능성이 높다.
