'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ColdWalletIcon from '@/public/assets/icons/cold_wallet.svg';
import MpcIcon from '@/public/assets/icons/mpc.svg';
import StorageIcon from '@/public/assets/icons/storage.svg';
import StakingIcon from '@/public/assets/icons/staking.svg';
import BackUpIcon from '@/public/assets/icons/backup.svg';
import AuthorizationIcon from '@/public/assets/icons/authorization.svg';
import ProofIcon from '@/public/assets/icons/proof.svg';
import SecurityIcon from '@/public/assets/icons/security.svg';
import IcArrowIcon from '@/public/assets/icons/main_ic_arrow.svg';
import Link from 'next/link';

const SolutionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('home.solutions');

  const sections = [
    {
      id: 'secureStorage',
      title: t('sections.secureStorage.title'),
      features: [
        {
          icon: <ColdWalletIcon />,
          title: t('sections.secureStorage.features.coldWallet.title'),
          description: t('sections.secureStorage.features.coldWallet.description'),
        },
        {
          icon: <MpcIcon />,
          title: t('sections.secureStorage.features.mpc.title'),
          description: t('sections.secureStorage.features.mpc.description'),
        },
      ],
    },
    {
      id: 'features',
      title: t('sections.features.title'),
      features: [
        {
          icon: <StorageIcon />,
          title: t('sections.features.list.custody.title'),
          description: t('sections.features.list.custody.description'),
        },
        {
          icon: <StakingIcon />,
          title: t('sections.features.list.staking.title'),
          description: t('sections.features.list.staking.description'),
        },
        {
          icon: <BackUpIcon />,
          title: t('sections.features.list.backup.title'),
          description: t('sections.features.list.backup.description'),
        },
      ],
    },
    {
      id: 'enterprise',
      title: t('sections.enterprise.title'),
      features: [
        {
          icon: <AuthorizationIcon />,
          title: t('sections.enterprise.list.authorization.title'),
          description: t('sections.enterprise.list.authorization.description'),
        },
        {
          icon: <ProofIcon />,
          title: t('sections.enterprise.list.certification.title'),
          description: t('sections.enterprise.list.certification.description'),
        },
        {
          icon: <SecurityIcon />,
          title: t('sections.enterprise.list.security.title'),
          description: t('sections.enterprise.list.security.description'),
        },
      ],
    },
  ];

  interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

  const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
    <div className="flex flex-col space-y-1 lg:space-y-2 w-full lg:w-[432px]">
      <div className="flex justify-center items-center mb-4 lg:mb-5 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
        {icon}
      </div>
      <h4 className="text-title-md lg:text-title-lg font-semibold">{title}</h4>
      <p className="text-gray-700 font-medium lg:font-normal text-body-md lg:text-body-xl whitespace-normal lg:whitespace-pre-line">
        {description}
      </p>
    </div>
  );

  return (
    <section
      ref={ref}
      className={`pt-[72px] pb-20 lg:pt-[170px] lg:pb-[200px] bg-[var(--color-gray-5020)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-5 lg:px-10 mx-auto">
        <div className="flex flex-col">
          <div className="space-y-6 mb-2 lg:mb-[72px]">
            <h2 className="text-headline-sm lg:text-headline-lg font-bold lg:whitespace-pre-line">{t('title')}</h2>
          </div>

          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`space-y-6 lg:space-y-8 ${
                index === 1 ? 'lg:mt-[56px]' : index === 2 ? 'lg:mt-[56px] lg:mb-20' : ''
              }`}
            >
              <h3 className="mt-12 text-headline-xs lg:text-headline-md font-bold">{section.title}</h3>
              <div className="flex flex-col lg:flex-row gap-8">
                {section.features.map((feature, featureIndex) => (
                  <FeatureCard
                    key={featureIndex}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          ))}

          <Link
            href="/services"
            className="mt-12 lg:mt-0 text-label-lg w-full lg:max-w-[200px] justify-center flex items-center text-[var(--color-primary-800)] font-semibold pl-[32px] pr-[22px] py-4 lg:py-[22px]  border border-[var(--color-primary-700)] rounded-[4px] hover:bg-[var(--color-primary-50)] transition-colors"
          >
            {t('cta.learnMore')}
            <IcArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
