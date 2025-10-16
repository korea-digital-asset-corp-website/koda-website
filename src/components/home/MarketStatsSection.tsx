'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import GraphStatsImg from '@/public/assets/images/img_graph.png';
import KodaLogo from '@/public/assets/icons/koda.svg';
import { brMap } from '@/i18n/brMap';

const MarketStatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('home.marketStats');

  const totalAmount = 1.5;
  const kodaAmount = 1.3;

  const marketShare = Math.floor((kodaAmount / totalAmount) * 1000) / 10;

  return (
    <section
      ref={ref}
      className={`pt-[72px] pb-20 lg:py-32 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-5 lg:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row lg:min-h-[570px] space-y-12 lg:space-y-0">
          <div className="flex flex-col justify-between h-full lg:min-h-[570px] lg:flex-1">
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-headline-sm lg:text-headline-lg font-bold">{t.rich('title', brMap)}</h2>
              <p className="text-body-md font-medium lg:font-normal lg:text-body-xl text-gray-700">
                {t.rich('description', brMap)}
              </p>
            </div>

            <div className="rounded-[4px] border border-gray-50 mt-12 lg:mt-0 lg:mr-8 overflow-hidden">
              <div className="flex flex-row">
                <div className="flex-1 bg-white p-6 lg:p-8">
                  <div className="text-center space-y-2">
                    <h3 className="text-title-sm lg:text-title-lg font-semibold">{t('stats.total.label')}</h3>
                    <div className="text-title-lg lg:text-headline-md font-semibold lg:font-bold">
                      {t('stats.total.amount')}
                    </div>
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
          </div>

          <div className="flex flex-col justify-between h-full lg:min-h-[570px] lg:flex-1">
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

            <div className="text-center lg:mt-0">
              <p className="mt-6 text-caption-lg lg:text-body-md text-gray-500 font-medium lg:whitespace-pre-line">
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
