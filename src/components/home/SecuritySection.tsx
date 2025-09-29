'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import IsmsImg from '@/public/assets/images/img_isms_color.png';
import CertificationLogo from '@/public/assets/icons/img_certification_color.svg';
import SecurityCompLogo from '@/public/assets/icons/security_comp.svg';
import SecurityPplLogo from '@/public/assets/icons/security_ppl.svg';
import Image from 'next/image';
import { brMap } from '@/brMap';

const SecuritySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('home.security');

  return (
    <section
      ref={ref}
      className={`pt-[72px] pb-20 lg:py-32 transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-5 lg:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row lg:min-h-[312px] space-y-12 lg:space-y-0">
          <div className="flex flex-col gap-6 mb-14 lg:mb-0 lg:gap-0 justify-between lg:min-h-[312px] lg:flex-1">
            <h2 className="text-headline-sm lg:text-headline-lg font-bold">{t.rich('title', brMap)}</h2>

            <div className="flex flex-row gap-6 lg:gap-11 items-center">
              <Image
                src={IsmsImg}
                width={65}
                height={60}
                alt={t('certifications.isms.alt')}
                className="lg:w-[113px] lg:h-[103px]"
              />
              <CertificationLogo className="w-[56px] h-[68px] lg:w-[88px] lg:h-[105px]" />
            </div>
          </div>

          <div className="flex flex-col justify-between lg:flex-1 gap-8 lg:gap-0">
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
              <div className="flex-shrink-0">
                <SecurityCompLogo className="w-[124px] h-[124px]" />
              </div>
              <div className="flex flex-col justify-center space-y-1 lg:space-y-2">
                <h3 className="text-title-md lg:text-title-lg font-semibold">{t('features.compliance.title')}</h3>
                <p className="text-body-md lg:text-body-xl text-gray-700 font-medium lg:font-normal">
                  {t.rich('features.compliance.description', brMap)}
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
              <div className="flex-shrink-0">
                <SecurityPplLogo className="w-[124px] h-[124px]" />
              </div>
              <div className="space-y-1 lg:space-y-2">
                <h3 className="text-title-md lg:text-title-lg font-semibold">{t('features.team.title')}</h3>
                <p className="text-body-md lg:text-body-xl text-gray-700">{t('features.team.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
