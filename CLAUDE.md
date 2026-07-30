# KODA 웹사이트 작업 규칙

## 디자인

새 페이지·섹션·컴포넌트를 만들 때 **`docs/design/style-guide.md`를 먼저 읽는다.** 새 페이지 생성 프롬프트는 `docs/design/page-prompt.md`에 있다.

하드 규칙:

- 컬러는 Tailwind 유틸 클래스만 쓴다 — `text-gray-700` (O) / `text-[var(--color-gray-700)]`, `text-[#919db6]` (X)
- 코너 반경은 `rounded-[4px]` 고정. 원형 배지만 `rounded-full` 예외
- 텍스트 크기는 타이포 유틸만 쓴다 — `text-body-md`, `text-headline-lg` (O) / `text-[18px]`, `text-lg` (X)
- `secondary` 팔레트(블루)와 커스텀 브레이크포인트 `xs`·`xl2`는 쓰지 않는다 (실사용 0건)
- 섹션 여백은 `pt-[72px] pb-20 lg:py-32`(기본) 또는 `pt-[72px] pb-20 lg:py-[170px]`(와이드)
- 컨테이너는 랜딩 `max-w-[1440px] w-full px-5 lg:px-10 mx-auto` / 문서 `max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] px-5 lg:px-[200px] mx-auto whitespace-pre-line`
- 면 구분은 `border border-gray-50`(1px). 섀도는 모달·팝업만
- 반응형은 `lg`(1024px) 하나를 기준선으로 "모바일 값 + `lg:` 값" 2단계로 처리한다
- 제목에는 색 클래스를 쓰지 않는다. `text-gray-900`은 hover 색 전환의 기점이 필요할 때만
- `src/app/[locale]/globals.css`의 토큰을 수정·추가하지 않는다
- Tailwind는 `@source` 설정으로 `src/`만 스캔한다 — 문서(docs/, CLAUDE.md)에 클래스 예시 문자열을 적어도 CSS에 포함되지 않는다. 이 `@source` 설정을 제거하면 dev 서버가 깨진다

## i18n

- 화면에 보이는 문구를 하드코딩하지 않는다. `messages/ko.json`과 `messages/en.json`에 **같은 키를 동시에** 추가한다
- `messages/ko.json`이 타입의 원천이다 — `next.config.ts`의 `createMessagesDeclaration` 설정이 여기서 `messages/ko.d.json.ts`를 생성한다. ko에 없는 키는 타입 오류가 난다
- 줄바꿈이 필요하면 `t.rich('key', brMap)` + `<brPc></brPc>`(데스크톱만) / `<brMo></brMo>`(모바일만) / `<brAll></brAll>`(항상)
- 배열은 `t.raw('key')`로 받고 타입을 명시한다 — `.map((item: string, index: number) => ...)`
- 클라이언트는 `useTranslations('ns')`, 서버는 `await getTranslations('ns')`
- 내부 링크는 `@/i18n/navigation`의 `Link`를 쓴다 — `next/link` 직접 사용 금지 (en 로케일에서 locale 접두사 유실)

## 구조

- 랜딩 페이지: `page.tsx`는 조립만, 섹션은 `src/components/<route>/XxxSection.tsx` + `index.ts` 배럴
- 문서 페이지: `page.tsx` 하나로 끝내고 `src/components/typography`의 `H1`·`H2`·`H3`·`P`·`Ol`·`Li`를 쓴다. 서브 목록(`SubOl`·`SubLi`·`SubCircledOl`·`SubCircledLi`)은 배럴에 없으니 `@/components/typography/Lists`에서 직접 import
- 경로 별칭이 두 개다 — `@/*` → `src/*`, `@/public/*` → `public/*`. SVG는 `@/public/assets/icons/*.svg`에서 import하면 `@svgr/webpack`이 React 컴포넌트로 변환한다
- `page.tsx`의 `params`는 `Promise<{ locale: string }>`다 (Next.js 15 시그니처)
- 라우트 디렉터리 이름을 `_`로 시작하지 않는다 — Next.js가 private folder로 보고 라우팅에서 제외한다 (빌드는 통과하나 라우트가 안 생김)
- `messages/ko.d.json.ts`는 자동 생성 파일이고 gitignore 대상이다. 직접 편집·커밋하지 않는다
- 새 라우트를 만들면 `src/app/sitemap.ts`와 `generateMetadata`(`alternates.languages`에 ko/en/x-default)를 함께 추가한다

## 검증

작업 후 `npm run lint`와 `npm run build`를 돌린다.
