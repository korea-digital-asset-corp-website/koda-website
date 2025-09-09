import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import KodaWhiteLogo from '@/public/assets/icons/koda_white.svg';
import CompanyCertifications from './CompanyCertifications';

const CompanyInfo = async () => {
  const t = await getTranslations('footer');

  return (
    <>
      <div className="order-1 lg:order-none lg:hidden">
        <Link href="/" aria-label={t('company.logoAlt')}>
          <KodaWhiteLogo />
        </Link>
      </div>

      <section className="hidden lg:block text-gray-200 order-none" aria-labelledby="company-info">
        <div className="mb-9">
          <div className="mb-9">
            <Link href="/" aria-label={t('company.logoAlt')}>
              <KodaWhiteLogo />
            </Link>
          </div>
          <address className="not-italic">
            <p className="mb-2">{t('company.name')}</p>
            <p>{t('company.address')}</p>
            <p>
              {t('company.ceo')} | {t('company.businessNumber')}
            </p>
            <p>
              {t('company.virtualAssetNumber')} | {t('company.phone')}
            </p>
          </address>
        </div>
        <CompanyCertifications />
      </section>

      <section className="order-3 lg:hidden text-body-sm" aria-labelledby="company-info-mobile">
        <h2 id="company-info-mobile" className="sr-only">
          {t('company.infoTitle')}
        </h2>
        <address className="not-italic">
          <p className="mb-2">{t('company.name')}</p>
          <p>{t('company.address')}</p>
          <p>
            {t('company.ceo')} | {t('company.businessNumber')}
          </p>
          <p>
            {t('company.virtualAssetNumber')} | {t('company.phone')}
          </p>
        </address>
      </section>

      <div className="order-4 lg:hidden">
        <CompanyCertifications />
      </div>
    </>
  );
};

export default CompanyInfo;
