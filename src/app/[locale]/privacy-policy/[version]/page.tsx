import { getVersionByNumber } from '@/data/privacy-policy/versions';
import V5PrivacyPolicyContent from '@/data/privacy-policy/content/v5';
import V4PrivacyPolicyContent from '@/data/privacy-policy/content/v4';
import V3PrivacyPolicyContent from '@/data/privacy-policy/content/v3';
import V2PrivacyPolicyContent from '@/data/privacy-policy/content/v2';
import V1PrivacyPolicyContent from '@/data/privacy-policy/content/v1';
import V0PrivacyPolicyContent from '@/data/privacy-policy/content/v0';
import AdditionalProvisions from '@/components/privacy-policy/AdditionalProvisions';
import PreviousVersionsList from '@/components/privacy-policy/PreviousVersionsList';
import { getTranslations } from 'next-intl/server';
import V7PrivacyPolicyContent from '@/data/privacy-policy/content/v7';
import V6PrivacyPolicyContent from '@/data/privacy-policy/content/v6';

interface PageProps {
  params: Promise<{
    version: string;
  }>;
}

const VersionedPrivacyPolicyPage = async ({ params }: PageProps) => {
  const t = await getTranslations('privacyPolicy');
  const { version } = await params;
  const versionData = getVersionByNumber(version);

  const getContentComponent = (version: string) => {
    switch (version) {
      case 'v7':
        return <V7PrivacyPolicyContent />;
      case 'v6':
        return <V6PrivacyPolicyContent />;
      case 'v5':
        return <V5PrivacyPolicyContent />;
      case 'v4':
        return <V4PrivacyPolicyContent />;
      case 'v3':
        return <V3PrivacyPolicyContent />;
      case 'v2':
        return <V2PrivacyPolicyContent />;
      case 'v1':
        return <V1PrivacyPolicyContent />;
      case 'v0':
        return <V0PrivacyPolicyContent />;
      default:
        return <V7PrivacyPolicyContent />;
    }
  };

  return (
    <section className="max-w-[1440px] w-full mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[200px] mx-auto whitespace-pre-line">
      <h1 className="text-headline-sm lg:text-headline-lg mb-14 lg:mb-[120px] font-bold">{t('title')}</h1>
      {getContentComponent(version)}
      <AdditionalProvisions version={versionData!} />
      <PreviousVersionsList currentVersion={version} />
    </section>
  );
};

export default VersionedPrivacyPolicyPage;
