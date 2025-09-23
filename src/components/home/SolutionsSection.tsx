'use client';

import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ColdWalletIcon from '@/public/assets/icons/cold_wallet.svg';
import MpcIcon from '@/public/assets/icons/mpc.svg';
import StorageIcon from '@/public/assets/icons/storage.svg';
import StakingIcon from '@/public/assets/icons/staking.svg';
import BackUpIcon from '@/public/assets/icons/backup.svg';
import AuthorizationIcon from '@/public/assets/icons/authorization.svg';
import SecurityIcon from '@/public/assets/icons/security.svg';
import IcArrowIcon from '@/public/assets/icons/main_ic_arrow.svg';
import Link from 'next/link';

const SolutionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslations('home.solutions');

  return (
    <section
      ref={ref}
      className={`mt-20 py-20 lg:py-32 bg-[var(--color-gray-5020)] transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-[1440px] w-full px-10 mx-auto">
        <div className="flex flex-col space-y-16">
          <div className="space-y-6">
            <h2 className="text-headline-sm lg:text-headline-lg font-bold lg:whitespace-pre-line">{t('title')}</h2>
          </div>

          {/* 안전한 보관 */}
          <div className="space-y-8">
            <h3 className="text-headline-xs lg:text-headline-md font-bold">{t('sections.secureStorage.title')}</h3>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <ColdWalletIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">
                  {t('sections.secureStorage.features.coldWallet.title')}
                </h4>
                <p className="text-body-md lg:text-body-xl">
                  {t('sections.secureStorage.features.coldWallet.description')}
                </p>
              </div>

              <div className="flex flex-col space-y-1 lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <MpcIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">
                  {t('sections.secureStorage.features.mpc.title')}
                </h4>
                <p className="text-body-md lg:text-body-xl">{t('sections.secureStorage.features.mpc.description')}</p>
              </div>
            </div>
          </div>

          {/* 다양한 기능 제공 */}
          <div className="space-y-8">
            <h3 className="text-headline-xs lg:text-headline-md font-bold">{t('sections.features.title')}</h3>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <StorageIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">
                  {t('sections.features.list.custody.title')}
                </h4>
                <p className="text-body-md lg:text-body-xl">{t('sections.features.list.custody.description')}</p>
              </div>

              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <StakingIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">
                  {t('sections.features.list.staking.title')}
                </h4>
                <p className="text-body-md lg:text-body-xl">{t('sections.features.list.staking.description')}</p>
              </div>

              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <BackUpIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">
                  {t('sections.features.list.backup.title')}
                </h4>
                <p className="text-body-md lg:text-body-xl">{t('sections.features.list.backup.description')}</p>
              </div>
            </div>
          </div>

          {/* 법인 맞춤 기능 */}
          <div className="space-y-8">
            <h3 className="text-headline-xs lg:text-headline-md font-bold">{t('sections.enterprise.title')}</h3>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <AuthorizationIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">
                  {t('sections.enterprise.list.authorization.title')}
                </h4>
                <p className="text-body-md lg:text-body-xl">
                  {t('sections.enterprise.list.authorization.description')}
                </p>
              </div>

              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <SecurityIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">
                  {t('sections.enterprise.list.certification.title')}
                </h4>
                <p className="text-body-md lg:text-body-xl">
                  {t('sections.enterprise.list.certification.description')}
                </p>
              </div>

              <div className="flex flex-col space-y-1 w-full lg:w-[432px]">
                <div className="flex justify-center items-center mb-4 w-[124px] h-[124px] border border-[var(--color-gray-50)] rounded-[4px] bg-white">
                  <SecurityIcon />
                </div>
                <h4 className="text-title-md lg:text-body-lg font-semibold">
                  {t('sections.enterprise.list.security.title')}
                </h4>
                <p className="text-body-md lg:text-body-xl">{t('sections.enterprise.list.security.description')}</p>
              </div>
            </div>
          </div>

          <Link
            href="/services"
            className="text-label-lg w-full lg:max-w-[200px] justify-center flex items-center text-[var(--color-primary-800)] font-semibold pl-[32px] pr-[22px] py-4 lg:py-[22px]  border border-[var(--color-primary-700)] rounded-[4px] hover:bg-[var(--color-primary-50)] transition-colors"
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
