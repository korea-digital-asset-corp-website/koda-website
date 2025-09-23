'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import GraphStatsImg from '@/public/assets/images/img_graph.png';
import KodaLogo from '@/public/assets/icons/koda.svg';

const MarketStatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('home.marketStats');

  const totalAmount = 13.7;
  const kodaAmount = 13.2;

  const marketShare = Math.floor((kodaAmount / totalAmount) * 1000) / 10;

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-10 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:min-h-[570px] space-y-12 lg:space-y-0">
          <div className="flex flex-col justify-between h-full lg:min-h-[570px] lg:flex-1 lg:pr-8">
            <div className="space-y-4">
              <h2 className="text-headline-sm lg:text-headline-lg font-bold lg:whitespace-pre-line">{t('title')}</h2>
              <p className="text-body-md lg:text-body-lg text-gray-600 lg:whitespace-pre-line">{t('description')}</p>
            </div>

            <div className="rounded-[4px] border border-gray-50 mt-8 lg:mt-0">
              <div className="flex flex-row">
                <div className="flex-1 bg-white p-6 lg:p-8">
                  <div className="text-center space-y-2">
                    <h3 className="text-title-sm lg:text-title-lg">{t('stats.total.label')}</h3>
                    <div className="text-title-lg lg:text-headline-md font-semibold lg:font-bold">
                      {t('stats.total.amount')}
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-black p-6 lg:p-8">
                  <div className="text-center space-y-2">
                    <h3 className="text-white text-title-sm lg:text-title-lg">{t('stats.koda.label')}</h3>
                    <div className="text-white text-title-lg lg:text-headline-md font-semibold lg:font-bold">
                      {t('stats.koda.amount')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full lg:min-h-[570px] lg:flex-1 lg:pl-8">
            <div className="flex items-center justify-center">
              <div className="relative">
                <Image
                  src={GraphStatsImg}
                  alt={t('chart.alt')}
                  width={482}
                  height={482}
                  className="w-[400px] h-auto lg:w-[482px] lg:h-auto"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col space-y-3 text-center">
                    <KodaLogo />
                    <p className="text-white text-title-lg lg:text-headline-md font-bold bg-black rounded-[4px] px-[18px] py-1">
                      {marketShare}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4 lg:mt-0">
              <p className="text-caption-lg lg:text-body-md text-gray-500 font-medium lg:whitespace-pre-line">
                {t('source')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStatsSection;
