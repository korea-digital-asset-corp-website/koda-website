import { getTranslations } from 'next-intl/server';
import { getLatestVersion } from '@/data/privacy-policy/versions';
import AdditionalProvisions from '@/components/privacy-policy/AdditionalProvisions';
import PreviousVersionsList from '@/components/privacy-policy/PreviousVersionsList';
import V5PrivacyPolicyContent from '@/data/privacy-policy/content/v5';

const PrivacyPolicyPage = async () => {
  const t = await getTranslations('privacyPolicy');
  const latestVersion = getLatestVersion();

  return (
    <section className="max-w-[1440px] w-full mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[200px] mx-auto whitespace-pre-line">
      <h1 className="text-headline-sm lg:text-headline-lg mb-14 lg:mb-[120px] font-bold">{t('title')}</h1>
      <V5PrivacyPolicyContent />
      <AdditionalProvisions version={latestVersion!} />
      <PreviousVersionsList currentVersion={'v5'} />
    </section>
  );
};

export default PrivacyPolicyPage;
