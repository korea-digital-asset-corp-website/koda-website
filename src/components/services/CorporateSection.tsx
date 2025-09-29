'use client';

import { useTranslations } from 'next-intl';
import AuthorizationIcon from '@/public/assets/icons/authorization.svg';
import ProofIcon from '@/public/assets/icons/proof.svg';
import SecurityIcon from '@/public/assets/icons/security.svg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { brMap } from '@/brMap';

const CorporateSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('service.corporate');

  const features = [
    {
      icon: AuthorizationIcon,
      titleKey: 'features.0.title',
      descriptionKey: 'features.0.description',
    },
    {
      icon: ProofIcon,
      titleKey: 'features.1.title',
      descriptionKey: 'features.1.description',
    },
    {
      icon: SecurityIcon,
      titleKey: 'features.2.title',
      descriptionKey: 'features.2.description',
    },
  ];

  return (
    <section
      ref={ref}
      className={`max-w-[1440px] w-full px-5 lg:px-[40px] mx-auto mt-[72px] mb-20 lg:mt-[170px] lg:mb-[200px] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="lg:flex-1">
          <h2 className="lg:text-left text-headline-sm lg:text-headline-lg font-bold mb-14 lg:mb-0">{t('title')}</h2>
        </div>

        <div className="lg:flex-1 flex flex-col lg:items-center space-y-8 lg:space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 w-full lg:w-auto max-w-[425px] lg:max-w-none"
            >
              <div className="flex justify-center items-center w-[124px] h-[124px] border lg:border-none border-[var(--color-gray-50)] rounded-[4px] bg-white">
                <feature.icon />
              </div>
              <div className="flex flex-col space-y-1 lg:space-y-2">
                <h3 className="text-headline-xs lg:text-headline-sm font-bold">{t(feature.titleKey)}</h3>
                <p className="text-body-md font-medium lg:font-normal lg:text-body-xl text-gray-700">
                  {t.rich(feature.descriptionKey, brMap)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
