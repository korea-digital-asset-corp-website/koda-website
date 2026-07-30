'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

const STORAGE_KEY = 'blog-toc-hidden';

// 우측 목차 내비게이션 — 데스크톱(xl+) 전용. 아티클의 h2/h3를 스캔해 목차를
// 만들고 현재 섹션을 하이라이트한다. 숨김 상태는 localStorage에 기억한다.
const TocNav = () => {
  const t = useTranslations('blog.toc');
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState('');
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(localStorage.getItem(STORAGE_KEY) === '1');

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

  const toggle = () => {
    setHidden((prev) => {
      localStorage.setItem(STORAGE_KEY, prev ? '0' : '1');
      return !prev;
    });
  };

  if (headings.length <= 1) return null;

  return (
    <div className="hidden xl:block absolute right-10 top-0 bottom-0 w-[200px]">
      <nav className="sticky top-28" aria-label={t('title')}>
        <div className="flex items-center justify-between mb-2">
          {!hidden && <span className="text-caption-lg font-semibold text-gray-500">{t('title')}</span>}
          <button
            onClick={toggle}
            className="text-caption-lg text-gray-500 hover:text-primary-700 transition-colors cursor-pointer ml-auto"
          >
            {hidden ? t('open') : t('hide')}
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
