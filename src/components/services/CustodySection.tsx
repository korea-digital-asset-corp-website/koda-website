'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ColdWalletImg from '@/public/assets/images/img_service_coldwallet.png';
import MpcImg from '@/public/assets/images/img_service_mpc.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { brMap } from '@/i18n/brMap';

const CustodySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('service.custody');

  return (
    <section
      ref={ref}
      className={`flex flex-col lg:justify-start justify-center  lg:items-start max-w-[1440px] w-full px-5 lg:px-[40px] mx-auto mt-[72px] mb-20 lg:mt-[170px] lg:mb-[200px] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <h2 className="text-headline-sm lg:text-headline-lg font-bold mb-14 lg:mb-[120px]">{t.rich('title', brMap)}</h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">
        <div className="flex-1 max-w-[664px]">
          <div className="mb-4 lg:mb-6">
            <Image
              src={ColdWalletImg}
              alt={t('coldWallet.alt')}
              width={664}
              height={400}
              className="w-full max-w-[664px] h-auto"
            />
          </div>
          <div className="space-y-1 lg:space-y-2">
            <h3 className="text-headline-xs lg:text-headline-md font-bold">{t('coldWallet.title')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 font-medium lg:font-normal text-body-md lg:text-body-xl list-disc ml-5">
                {t.rich('coldWallet.features.0', brMap)}
              </li>
              <li className="text-gray-700 font-medium lg:font-normal text-body-md lg:text-body-xl list-disc ml-5">
                {t.rich('coldWallet.features.1', brMap)}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4 lg:mb-6">
            <Image src={MpcImg} alt={t('mpc.alt')} width={664} height={400} className="w-full max-w-[664px] h-auto" />
          </div>
          <div className="space-y-1 lg:space-y-2">
            <h3 className="text-headline-xs lg:text-headline-md font-bold">{t('mpc.title')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 font-medium lg:font-normal text-body-md lg:text-body-xl list-disc ml-5">
                {t.rich('mpc.features.0', brMap)}
              </li>
              <li className="text-gray-700 font-medium lg:font-normal text-body-md lg:text-body-xl list-disc ml-5">
                {t.rich('mpc.features.1', brMap)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustodySection;
