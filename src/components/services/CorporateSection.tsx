'use client';

import { useTranslations } from 'next-intl';
import AauthorizationIcon from '@/public/assets/icons/services_authorization.svg';
import ProofIcon from '@/public/assets/icons/services_proof.svg';
import SecurityIcon from '@/public/assets/icons/services_security.svg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CorporateSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('service.corporate');

  const features = [
    {
      icon: AauthorizationIcon,
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
      className={`max-w-[1440px] w-full px-[40px] mx-auto mt-[170px] mb-[200px] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="lg:flex-1">
          <h2 className="text-center lg:text-left text-headline-sm lg:text-headline-lg font-bold mb-14 lg:mb-0">
            {t('title')}
          </h2>
        </div>

        <div className="lg:flex-1 flex flex-col items-center lg:items-start space-y-8 lg:space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start gap-6 w-full lg:w-auto max-w-[425px] lg:max-w-none"
            >
              <div className="flex justify-center items-center w-16 h-16 lg:w-[90px] lg:h-[100px] flex-shrink-0">
                <feature.icon />
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-headline-xs lg:text-headline-sm font-bold">{t(feature.titleKey)}</h3>
                <p className="text-body-md lg:text-body-xl text-gray-600">{t(feature.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
