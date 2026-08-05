# 블로그 피드백 반영 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 팀 피드백 8건(본문 폭 960px, SNS 공유, 상세 다이어트, 무한 스크롤, TOC, 헤더 내비, 노션 스킬)을 블로그에 반영한다.

**Architecture:** 상세 페이지를 외곽(1440px, relative) + 아티클(960px 중앙) + TOC(xl+ 우측 sticky) 3층으로 재구성한다. 신설 클라이언트 컴포넌트 3개(ShareButtons·TocNav·BlogListContainer)와 PostCard의 클라이언트 전환 외에는 기존 구조를 유지한다.

**Tech Stack:** 기존과 동일. **새 의존성 0** — 공유는 URL 인텐트, 아이콘은 인라인 SVG.

**Spec:** `docs/superpowers/specs/2026-07-30-blog-feedback-design.md`

## Global Constraints

- 스타일 가이드·CLAUDE.md 하드 규칙 준수 (유틸 클래스만, `rounded-[4px]`, 타이포 유틸, 내부 링크는 `@/i18n/navigation`).
- i18n 키는 ko 먼저, ko/en 동시 수정. 기존 문서형 페이지·`/news`는 건드리지 않는다.
- 브랜치 `feat/blog-feedback` (#115 위 분기). 태스크마다 lint 후 커밋.
- hover는 `transition-colors` 계열만. 모션 신규 도입 없음(TOC 하이라이트는 색 전환).

## File Structure

| 파일 | 작업 |
|---|---|
| `src/app/[locale]/blog/[slug]/page.tsx` | 수정 — 3층 컨테이너, AuthorCard·BackToBlogButton 제거, ShareButtons·TocNav 배치 |
| `src/components/blog/ShareButtons.tsx` | 신설 (클라이언트) |
| `src/components/blog/TocNav.tsx` | 신설 (클라이언트) |
| `src/components/blog/BlogListContainer.tsx` | 신설 (클라이언트) |
| `src/components/blog/PostCard.tsx` | 수정 — 클라이언트 전환 (`useLocale`) |
| `src/components/blog/AuthorCard.tsx`·`BackToBlogButton.tsx` | 삭제 |
| `src/components/blog/index.ts` | 수정 — export 정리 |
| `src/app/[locale]/blog/page.tsx` | 수정 — PostGrid 직접 호출 → BlogListContainer |
| `src/components/blog/PostGrid.tsx` | 삭제 (BlogListContainer가 흡수) 또는 유지 — Task 4에서 흡수·삭제 |
| `src/data/navItems.ts`, `messages/ko.json`·`en.json` | 수정 |
| `.claude/skills/blog-post/SKILL.md` | 신설 |
| `docs/design/style-guide.md` | 수정 — 4.1 블로그 상세 행, 5.8에 ShareButtons·TocNav 한 줄 |

### Task 순서

```
Task 1 (상세 다이어트 + 960px) → Task 2 (ShareButtons) → Task 3 (TocNav)
  → Task 4 (무한 스크롤) → Task 5 (내비 + 스킬 + 가이드 + 종합 검증)
```

---

### Task 1: 상세 페이지 960px 컨테이너와 다이어트

**Files:**
- Modify: `src/app/[locale]/blog/[slug]/page.tsx`, `src/components/blog/index.ts`, `messages/ko.json`·`en.json`
- Delete: `src/components/blog/AuthorCard.tsx`, `src/components/blog/BackToBlogButton.tsx`

**Interfaces:**
- Produces: 상세 페이지 구조 — 외곽 `<div className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] mx-auto relative">` 안에 `<article className="max-w-[960px] w-full mx-auto px-5">`. Task 2·3이 이 `<article>` 안팎에 컴포넌트를 끼워 넣는다.

- [ ] **Step 1**: `[slug]/page.tsx`에서 `AuthorCard`·`BackToBlogButton` import와 사용부를 제거하고 컨테이너를 아래로 교체한다.

```tsx
return (
  <div className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] mx-auto relative">
    <article className="max-w-[960px] w-full mx-auto px-5">
      <PostHeader post={post} />
      <main className="mt-8 lg:mt-12">
        <ContentComponent />
      </main>
      {related.length > 0 && (
        <div className="mt-12 lg:mt-16">
          <RelatedPosts posts={related} />
        </div>
      )}
    </article>
  </div>
);
```

- [ ] **Step 2**: 두 컴포넌트 파일 삭제, 배럴에서 export 2줄 제거, `blog.detail.backToList` 키를 ko/en에서 제거.
- [ ] **Step 3**: 검증 — `npx tsc --noEmit` 오류 0, `grep -rn 'AuthorCard\|BackToBlogButton\|backToList' src messages` 0건.
- [ ] **Step 4**: 커밋 `feat(blog): 상세 본문 960px 축소 및 하단 중복 요소 제거`

---

### Task 2: ShareButtons

**Files:**
- Create: `src/components/blog/ShareButtons.tsx`
- Modify: `src/components/blog/index.ts`, `[slug]/page.tsx`(본문과 RelatedPosts 사이 배치), `messages/ko.json`·`en.json`

**Interfaces:**
- Produces: `ShareButtons({ title: string })` 클라이언트 컴포넌트.
- i18n: `blog.share.copyLink`·`copied`·`shareOnX`·`shareOnFacebook`·`shareOnLinkedIn` (ko: 링크 복사/복사됨/X에 공유/페이스북에 공유/링크드인에 공유, en: Copy link/Copied/Share on X/Share on Facebook/Share on LinkedIn).

- [ ] **Step 1**: 컴포넌트 작성.

```tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface ShareButtonsProps {
  title: string;
}

const ICON_CLASS = 'w-5 h-5';

const LinkIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M10 14a5 5 0 0 0 7.07 0l3-3A5 5 0 0 0 13 3.93l-1.5 1.5" strokeLinecap="round" />
    <path d="M14 10a5 5 0 0 0-7.07 0l-3 3A5 5 0 0 0 11 20.07l1.5-1.5" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.23l-4.88-6.38L6.5 22H3.34l7.24-8.28L2.8 2h6.39l4.41 5.83L18.9 2Zm-1.1 18.13h1.73L7.29 3.77H5.43L17.8 20.13Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const BUTTON_CLASS =
  'flex items-center justify-center w-10 h-10 border border-gray-50 rounded-[4px] text-gray-500 hover:bg-gray-5020 transition-colors cursor-pointer';

const ShareButtons = ({ title }: ShareButtonsProps) => {
  const t = useTranslations('blog.share');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard 미지원 환경에서는 무동작
    }
  };

  const openShare = (buildUrl: (url: string) => string) => {
    const url = encodeURIComponent(window.location.href);
    window.open(buildUrl(url), '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  return (
    <div className="mt-12 lg:mt-16 pt-6 border-t border-gray-50 flex items-center gap-3">
      <button onClick={handleCopy} className={BUTTON_CLASS} aria-label={copied ? t('copied') : t('copyLink')}>
        {copied ? <CheckIcon /> : <LinkIcon />}
      </button>
      <button
        onClick={() => openShare((url) => `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(title)}`)}
        className={BUTTON_CLASS}
        aria-label={t('shareOnX')}
      >
        <XIcon />
      </button>
      <button
        onClick={() => openShare((url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`)}
        className={BUTTON_CLASS}
        aria-label={t('shareOnFacebook')}
      >
        <FacebookIcon />
      </button>
      <button
        onClick={() => openShare((url) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`)}
        className={BUTTON_CLASS}
        aria-label={t('shareOnLinkedIn')}
      >
        <LinkedInIcon />
      </button>
    </div>
  );
};

export default ShareButtons;
```

- [ ] **Step 2**: 배럴 export 추가, `[slug]/page.tsx`의 `<main>` 아래·RelatedPosts 위에 `<ShareButtons title={post.title} />` 삽입, i18n 키 5종 ko/en 추가.
- [ ] **Step 3**: 검증 — tsc 0, ko/en `blog.share` 키 대칭 5개.
- [ ] **Step 4**: 커밋 `feat(blog): 글 하단 SNS 공유 버튼 추가`

---

### Task 3: TocNav

**Files:**
- Create: `src/components/blog/TocNav.tsx`
- Modify: `src/components/blog/index.ts`, `[slug]/page.tsx`

**Interfaces:**
- Produces: `TocNav()` — props 없음. 마운트 후 같은 페이지의 `<article>` 내 h2/h3를 스캔한다. `[slug]/page.tsx`에서 외곽 `<div>` 안, `<article>` 뒤에 배치.

- [ ] **Step 1**: 컴포넌트 작성.

```tsx
'use client';

import { useEffect, useState } from 'react';

interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

const STORAGE_KEY = 'blog-toc-hidden';

const TocNav = () => {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState('');
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(localStorage.getItem(STORAGE_KEY) === '1');

    const article = document.querySelector('article');
    if (!article) return;

    const elements = Array.from(article.querySelectorAll<HTMLHeadingElement>('h2, h3')).filter(
      (el) => el.textContent?.trim(),
    );
    elements.forEach((el, index) => {
      if (!el.id) el.id = `toc-${index}`;
    });
    setHeadings(
      elements.map((el) => ({
        id: el.id,
        text: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      })),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -70% 0px' },
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    setHidden((prev) => {
      localStorage.setItem(STORAGE_KEY, prev ? '0' : '1');
      return !prev;
    });
  };

  if (headings.length <= 1) return null;

  return (
    <div className="hidden xl:block absolute right-10 top-0 bottom-0 w-[200px]">
      <nav className="sticky top-28" aria-label="목차">
        <div className="flex items-center justify-between mb-2">
          {!hidden && <span className="text-caption-lg font-semibold text-gray-500">목차</span>}
          <button
            onClick={toggle}
            className="text-caption-lg text-gray-500 hover:text-primary-700 transition-colors cursor-pointer ml-auto"
          >
            {hidden ? '목차 열기' : '숨기기'}
          </button>
        </div>
        {!hidden && (
          <ul className="space-y-1.5 max-h-[60vh] overflow-y-auto border-l border-gray-50 pl-3">
            {headings.map((heading) => (
              <li key={heading.id} className={heading.level === 3 ? 'pl-3' : ''}>
                <button
                  onClick={() => document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`block w-full text-left text-caption-lg leading-snug transition-colors cursor-pointer ${
                    activeId === heading.id ? 'text-primary-700 font-semibold' : 'text-gray-500 hover:text-primary-700'
                  }`}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default TocNav;
```

TOC 라벨("목차"/"숨기기"/"목차 열기")은 UI 문자열이므로 i18n을 거쳐야 한다 — `blog.toc.title`·`hide`·`open` 키(ko: 목차/숨기기/목차 열기, en: Contents/Hide/Show contents)로 교체해 `useTranslations('blog.toc')`를 쓴다(위 코드는 구조 예시이며 실제 구현은 t() 호출).

- [ ] **Step 2**: 배럴 추가, `[slug]/page.tsx` 외곽 div 안 `<article>` 다음 형제로 `<TocNav />` 배치, i18n 키 3종 추가.
- [ ] **Step 3**: 검증 — tsc 0, 개발 서버에서 상세 열어 목차 표시·하이라이트·숨김·새로고침 유지 확인.
- [ ] **Step 4**: 커밋 `feat(blog): 우측 목차 내비게이션 추가 (데스크톱, 숨김 토글)`

---

### Task 4: 무한 스크롤

**Files:**
- Modify: `src/components/blog/PostCard.tsx` (클라이언트 전환), `src/app/[locale]/blog/page.tsx`, `src/components/blog/index.ts`
- Create: `src/components/blog/BlogListContainer.tsx`
- Delete: `src/components/blog/PostGrid.tsx` (그리드 마크업을 BlogListContainer가 흡수. `RelatedPosts`는 자체 grid를 쓰므로 영향 없음 — 확인 후 삭제)

**Interfaces:**
- Consumes: `PostCard({ post })` — 클라이언트 전환 후에도 시그니처 동일.
- Produces: `BlogListContainer({ posts: BlogPost[] })`.

- [ ] **Step 1**: `PostCard`를 `'use client'` + `useLocale()`로 전환 (`getLocale` 서버 import 제거, `formatDate(post.date, locale, 'full')` 유지).
- [ ] **Step 2**: `BlogListContainer` 작성.

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import type { BlogPost } from '@/data/blogPosts';
import PostCard from './PostCard';

const ITEMS_PER_PAGE = 9;

const BlogListContainer = ({ posts }: { posts: BlogPost[] }) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hasMore = visibleCount < posts.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
        }
      },
      { rootMargin: '200px 0px' },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {posts.slice(0, visibleCount).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      {hasMore && <div ref={sentinelRef} aria-hidden="true" />}
    </>
  );
};

export default BlogListContainer;
```

- [ ] **Step 3**: `blog/page.tsx`에서 `PostGrid` → `BlogListContainer`로 교체, `PostGrid.tsx` 삭제·배럴 정리(RelatedPosts가 PostGrid를 안 쓰는지 grep 확인).
- [ ] **Step 4**: 검증 — tsc 0. 동작 확인: `ITEMS_PER_PAGE`를 임시 2로 낮춰 dev 서버에서 스크롤 시 추가 로드 확인 후 9로 복원.
- [ ] **Step 5**: 커밋 `feat(blog): 목록 무한 스크롤 전환`

---

### Task 5: 헤더 내비 · 노션 스킬 · 가이드 반영 · 종합 검증

**Files:**
- Modify: `src/data/navItems.ts`, `messages/ko.json`·`en.json`, `docs/design/style-guide.md`
- Create: `.claude/skills/blog-post/SKILL.md`

- [ ] **Step 1**: `navItems`에 `{ key: 'blog', href: '/blog' }`를 `news` 다음에 추가. `header.navigation.blog` = ko "테크블로그" / en "Tech Blog".
- [ ] **Step 2**: 스킬 작성 — frontmatter(`name: blog-post`, `description`: 노션 페이지 URL을 받아 KODA 테크블로그 글로 변환·등록하는 스킬. 트리거: "/blog-post <URL>", "이 노션 페이지 블로그로 등록") + 본문은 절차 6단계(스펙 6절)와 `docs/design/blog-post-workflow.md` 참조 링크. 대응표는 중복 기재하지 않는다.
- [ ] **Step 3**: 스타일 가이드 — 4.1 표에 블로그 상세(외곽 1440 relative + 아티클 960 중앙, xl+ TOC) 행 추가, 5.8에 ShareButtons·TocNav·BlogListContainer 한 줄씩 추가.
- [ ] **Step 4**: 종합 검증 — `npm run lint`·`npm run build`, 프로덕션 스모크(/, /blog, 상세 200), 금지 패턴 grep 0건, ko/en `blog` 네임스페이스 키 대칭.
- [ ] **Step 5**: 커밋 `feat(blog): 헤더 내비 추가·노션 변환 스킬·가이드 갱신`

---

## Self-Review 결과

- **스펙 커버리지**: 1(960px)→T1, 2(공유)→T2, 3·4(제거)→T1, 5(무한 스크롤)→T4, 6(스킬)→T5, 7(TOC)→T3, 8(내비)→T5, 7절(가이드)→T5, 9절(검증)→각 태스크+T5. 누락 없음.
- **타입 일관성**: `ShareButtons({title})`·`TocNav()`·`BlogListContainer({posts})`·`PostCard({post})` 시그니처가 태스크 간 일치. TOC 문자열은 Step 1 코드 예시의 하드코딩을 i18n으로 교체한다고 명시.
- **플레이스홀더**: 없음.
