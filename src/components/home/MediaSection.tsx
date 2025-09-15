'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { newsData } from '@/data/newsItems';
import Link from 'next/link';
import IcArrowIcon from '@/public/assets/icons/main_ic_arrow.svg';

const MediaSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const displayedNews = newsData.slice(0, 5);

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-10 mx-auto">
        <div className="space-y-14 lg:space-y-[120px]">
          <h2 className="text-headline-sm lg:text-headline-lg font-bold">언론 속의 KODA</h2>
          <div className="space-y-0">
            {displayedNews.map((item, index) => (
              <div key={index}>
                <div className="py-6 flex flex-col space-y-2">
                  <p className="text-headline-xs lg:text-headline-md font-semibold">{item.title}</p>
                  <div className="flex items-center space-x-1.5 text-[var(--color-gray-500)]">
                    <span className="text-body-sm lg:text-body-lg">{item.publisher},</span>
                    <span className="text-body-sm lg:text-body-lg">{item.date}</span>
                  </div>
                </div>
                <hr className="border-gray-50" />
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/news"
          className="mt-12 lg:mt-20 w-full lg:w-[180px] flex flex-row justify-center items-center text-[var(--color-primary-800)] text-label-md lg:text-label-lg  font-semibold px-[22px] py-5 border border-[var(--color-primary-700)] rounded-[4px] hover:bg-[var(--color-primary-50)] transition-colors"
        >
          언론보도 더 보기
          <IcArrowIcon />
        </Link>
      </div>
    </section>
  );
};

export default MediaSection;
