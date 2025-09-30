import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { H3 } from '@/components/typography';
import { getAllVersions, PrivacyPolicyVersion } from '@/data/privacy-policy/versions';

interface PreviousVersionsListProps {
  currentVersion?: string;
}

const PreviousVersionsList = ({}: PreviousVersionsListProps) => {
  const t = useTranslations();
  const locale = useLocale();
  const allVersions = getAllVersions();

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('.');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    if (locale === 'en') {
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      return `Effective ${formattedDate}`;
    } else {
      return `${dateString}일 시행`;
    }
  };

  const renderVersionLink = (version: PrivacyPolicyVersion): string => {
    const policyTitle = t(version.titleKey);
    const formattedDate = formatDate(version.effectiveDate);

    if (locale === 'en') {
      return `${policyTitle} (${formattedDate})`;
    } else {
      return `(${formattedDate}) ${policyTitle}`;
    }
  };

  return (
    <>
      <H3 className="text-headline-xs font-bold mb-3">{t('privacyPolicy.previousVersions.title')}</H3>
      <div className="space-y-1">
        {allVersions.map((version) => {
          const linkUrl = version.isLatest ? `/privacy-policy` : `/privacy-policy/${version.version}`;
          return (
            <div key={version.version} className="flex items-center">
              <Link
                href={linkUrl}
                className="text-body-sm lg:text-body-lg text-primary-700 underline underline-offset-4"
              >
                {renderVersionLink(version)}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PreviousVersionsList;
