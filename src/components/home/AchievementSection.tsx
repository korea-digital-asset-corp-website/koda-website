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
      className={`relative mt-20 py-20 lg:py-32 bg-[var(--color-gray-5020)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-10 mx-auto relative">
        <div className="absolute -top-[105px] lg:-top-[157px] right-10 lg:right-20">
          <Image
            src={Venture_Enterprise_badge}
            alt={t('badge.alt')}
            width={244}
            height={274}
            className="lg:w-[288px] lg:h-[354px]"
            priority
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-28">
          <div className="space-y-3 lg:space-y-4 mt-32 max-lg:mt-40 lg:mt-0">
            <h2 className="text-headline-sm lg:text-headline-lg font-bold lg:whitespace-pre-line">{t('title')}</h2>
            <p className="text-left text-body-md lg:text-body-lg lg:whitespace-pre-line">{t('description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
