'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import InsuranceImg from '@/public/assets/images/img_insurance.png';
import KodaLogo from '@/public/assets/icons/koda.svg';
import SamsungCiIcon from '@/public/assets/icons/img_samsungci.svg';
import SamsungCiEnIcon from '@/public/assets/icons/img_samsungci_eng.svg';
import CloseIcon from '@/public/assets/icons/close.svg';
import { brMap } from '@/i18n/brMap';

const InsuranceSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const locale = useLocale();
  const t = useTranslations('home.insurance');

  return (
    <section
      ref={ref}
      className={`pt-[72px] pb-20 lg:py-32 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-5 lg:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:min-h-[517px] space-y-12 lg:space-y-0">
          <div className="flex flex-col space-y-12 lg:space-y-0 lg:justify-between h-full lg:min-h-[517px] lg:flex-1 lg:pr-8">
            <div className="space-y-3 lg:space-y-3.5">
              <h2 className="text-headline-sm lg:text-headline-lg font-bold">{t.rich('title', brMap)}</h2>
              <p className="text-gray-700 text-body-md lg:text-body-xl font-medium lg:font-normal">
                {t.rich('description', brMap)}
              </p>
            </div>

            <div
              className={`flex flex-col justify-center items-center border border-gray-50 rounded-[4px] w-full h-[120px] lg:h-[188px] gap-4 lg:gap-6 ${
                locale === 'en' ? 'lg:max-w-[664px] lg:w-full' : 'lg:w-[400px]'
              }`}
            >
              <p className="flex flex-row items-center justify-center gap-3 lg:gap-[20px]">
                <KodaLogo className="w-[81px] h-[18px] lg:w-[117px] lg:h-[26px]" />
                <CloseIcon className="w-[10px] h-[10px] lg:w-[16px] lg:h-[16px]" />
                {locale === 'en' ? (
                  <SamsungCiEnIcon className="w-[175px] h-[30px] lg:w-[233px] lg:h-[40px]" />
                ) : (
                  <SamsungCiIcon className="w-[64px] h-[18px] lg:w-[92px] lg:h-[26px]" />
                )}
              </p>
              <p className="text-headline-md lg:text-display-md font-semibold lg:font-bold">{t('coverage.amount')}</p>
            </div>

            <div className="flex flex-col lg:hidden space-y-6">
              <div className="flex justify-center">
                <Image src={InsuranceImg} alt={t('image.alt')} width={200} height={200} className="w-[200px] h-auto" />
              </div>
              <div className="space-y-4">
                <p className="text-caption-lg lg:text-body-md font-medium text-center text-[var(--color-gray-500)]">
                  {t.rich('disclaimer', brMap)}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col lg:flex-1 lg:pl-8 gap-10">
            <div className="flex justify-center">
              <Image src={InsuranceImg} alt={t('image.alt')} width={330} height={456} />
            </div>

            <div className="space-y-4">
              <p className="text-body-md text-center text-[var(--color-gray-500)]">{t.rich('disclaimer', brMap)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
