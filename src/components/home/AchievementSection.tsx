'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import Venture_Enterprise_badge from '@/public/assets/images/img_venture_badge_d.png';

const AchievementSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('home.achievement');

  return (
    <section
      ref={ref}
      className={`relative mt-20 pt-[230px] pb-[80px] lg:py-[140px] h-auto lg:min-h-[396px] bg-[var(--color-gray-5020)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-5 lg:px-10 mx-auto relative">
        <div className="absolute -top-[248px] lg:-top-[170px] right-5 lg:right-20">
          <Image
            src={Venture_Enterprise_badge}
            alt={t('badge.alt')}
            width={166}
            height={274}
            className="lg:w-[288px] lg:h-[354px]"
            priority
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-3 lg:space-y-4 lg:mt-0 whitespace-pre-line lg:whitespace-normal">
            <h2 className="text-headline-sm lg:text-headline-lg font-bold">{t('title')}</h2>
            <p className="text-gray-700 font-medium lg:font-normal text-left text-body-md lg:text-body-lg lg:whitespace-pre-line">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
