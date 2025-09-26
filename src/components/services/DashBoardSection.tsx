'use client';

import { useTranslations, useLocale } from 'next-intl';
import DashBoardImg from '@/public/assets/images/img_dashboard.png';
import DashBoardImgEn from '@/public/assets/images/img_en_dashboard.png';
import StorageIcon from '@/public/assets/icons/services_storage.svg';
import WithDrawalIcon from '@/public/assets/icons/services_withdrawal.svg';
import StakingIcon from '@/public/assets/icons/services_staking.svg';
import ManageIcon from '@/public/assets/icons/services_manage.svg';
import LockUpIcon from '@/public/assets/icons/services_lockup.svg';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DashBoardSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('service.dashboard');
  const locale = useLocale();

  const features = [
    {
      icon: StorageIcon,
      titleKey: 'features.0.title',
      descriptionKey: 'features.0.description',
    },
    {
      icon: WithDrawalIcon,
      titleKey: 'features.1.title',
      descriptionKey: 'features.1.description',
    },
    {
      icon: StakingIcon,
      titleKey: 'features.2.title',
      descriptionKey: 'features.2.description',
    },
    {
      icon: ManageIcon,
      titleKey: 'features.3.title',
      descriptionKey: 'features.3.description',
    },
    {
      icon: LockUpIcon,
      titleKey: 'features.4.title',
      descriptionKey: 'features.4.description',
    },
  ];

  const dashboardImage = locale === 'en' ? DashBoardImgEn : DashBoardImg;

  return (
    <section
      ref={ref}
      className={`pt-[72px] pb-20 lg:py-32 bg-[var(--color-gray-5020)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-5 lg:px-[40px] mx-auto">
        <h2 className="lg:text-left text-headline-sm lg:text-headline-lg font-bold mb-14 lg:mb-[120px]">
          {t('title')}
        </h2>
      </div>

      <div className="mx-4 lg:mx-0 flex justify-center items-center mb-14 lg:mb-24">
        <Image
          src={dashboardImage}
          alt={t('image.alt')}
          width={1440}
          height={800}
          className="shadow-lg rounded-[8px]"
        />
      </div>

      <div className="max-w-[1440px] w-full px-5 lg:px-[40px] mx-auto">
        <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-3 gap-8 lg:justify-items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-row lg:flex-col w-full max-w-[425px] lg:max-w-auto gap-4 lg:gap-6">
              <div className="flex justify-center items-center w-12 h-12 lg:w-[72px] lg:h-[72px] bg-[var(--color-primary-50)] rounded-[4px] aspect-square">
                <feature.icon className="w-[26px] h-[26px] lg:w-[40px] lg:h-[40px]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-headline-xs lg:text-headline-sm font-bold mb-1 lg:mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-700 text-body-md lg:text-body-xl font-medium whitespace-normal lg:whitespace-pre-line">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashBoardSection;
