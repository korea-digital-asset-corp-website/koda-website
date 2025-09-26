'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { newsData } from '@/data/newsItems';
import Link from 'next/link';
import IcArrowIcon from '@/public/assets/icons/main_ic_arrow.svg';

const MediaSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('home.media');

  const displayedNews = newsData.slice(0, 5);

  return (
    <section
      ref={ref}
      className={`pt-[72px] pb-20 lg:py-32 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-5 lg:px-10 mx-auto">
        <div className="space-y-8 lg:space-y-[96px]">
          <h2 className="text-headline-sm lg:text-headline-lg font-bold">{t('title')}</h2>
          <div className="space-y-0">
            {displayedNews.map((item, index) => (
              <div key={index}>
                <div className="pt-6 pb-4 lg:py-6 flex flex-col space-y-2 lg:space-y-3">
                  <p className="text-headline-xs lg:text-headline-md font-semibold">{item.title}</p>
                  <div className="flex font-medium lg:font-normal items-center space-x-1.5 text-[var(--color-gray-500)]">
                    <span className="text-body-sm lg:text-body-lg">{item.publisher},</span>
                    <span className="text-body-sm lg:text-body-lg">{item.date}</span>
                  </div>
                </div>
                {index < displayedNews.length - 1 && <hr className="border-gray-50" />}
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/news"
          className="mt-12 lg:mt-14 text-label-lg w-full lg:max-w-[200px] justify-center flex items-center text-[var(--color-primary-800)] font-semibold pl-[32px] pr-[22px] py-4 lg:py-[22px]  border border-[var(--color-primary-700)] rounded-[4px] hover:bg-[var(--color-primary-50)] transition-colors"
        >
          {t('cta.viewMore')}
          <IcArrowIcon />
        </Link>
      </div>
    </section>
  );
};

export default MediaSection;
