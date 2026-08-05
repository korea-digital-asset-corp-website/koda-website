'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

// 우측 목차 내비게이션 — 데스크톱(xl+) 전용, 노션식 호버 레일.
// 평소에는 헤딩당 가는 바(h2 길게, h3 짧게)만 보이고, 호버·키보드 포커스 시
// 같은 자리에서 전체 목차 패널이 나타난다. 토글 버튼·저장 상태가 없다.
const TocNav = () => {
  const t = useTranslations('blog.toc');
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const elements = Array.from(article.querySelectorAll<HTMLHeadingElement>('h2, h3')).filter((el) =>
      el.textContent?.trim(),
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
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px' },
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (headings.length <= 1) return null;

  return (
    <div className="hidden xl:block absolute right-10 top-0 bottom-0 w-[220px]">
      <nav className="sticky top-28 group" aria-label={t('title')}>
        {/* 레일 — 접힘 상태의 미니멀 표시 */}
        <div
          className="flex flex-col items-end gap-2 py-2 pr-1 transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0"
          aria-hidden="true"
        >
          {headings.map((heading) => (
            <span
              key={heading.id}
              className={`h-0.5 rounded-full transition-colors ${heading.level === 2 ? 'w-5' : 'w-3'} ${
                activeId === heading.id ? 'bg-primary-700' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* 패널 — 호버·포커스 시 같은 자리에 표시. 박스 없이 레일의 연장선처럼:
            왼쪽 헤어라인 + 현재 섹션 위치의 딥그린 세그먼트. bg-white는 좁은
            뷰포트(1280px 부근)에서 본문과 겹칠 때를 위한 바닥색이다. */}
        <div className="absolute top-0 right-0 w-[220px] max-h-[70vh] overflow-y-auto bg-white py-1 opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
          <ul className="relative border-l border-gray-50">
            {headings.map((heading) => (
              <li key={heading.id} className="relative">
                {activeId === heading.id && (
                  <span
                    className="absolute -left-px top-1 bottom-1 w-[2px] rounded-full bg-primary-700"
                    aria-hidden="true"
                  />
                )}
                <button
                  onClick={() => document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`block w-full text-left text-caption-lg leading-snug py-1 transition-colors cursor-pointer ${
                    heading.level === 3 ? 'pl-7' : 'pl-4'
                  } ${activeId === heading.id ? 'text-primary-700 font-medium' : 'text-gray-500 hover:text-primary-700'}`}
                >
                  <span className="line-clamp-2">{heading.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TocNav;
