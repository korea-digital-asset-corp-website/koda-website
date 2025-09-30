import React from 'react';
import { useTranslations } from 'next-intl';
import { H2, P } from '@/components/typography';
import { PrivacyPolicyVersion } from '@/data/privacy-policy/versions';
import { useDateFormat } from '@/hooks/useDateFormat';

interface AdditionalProvisionsProps {
  version: PrivacyPolicyVersion;
}

const AdditionalProvisions = ({ version }: AdditionalProvisionsProps) => {
  const t = useTranslations();
  const { formatDate } = useDateFormat();

  return (
    <div>
      <H2 className="font-bold">&lt;{t('privacyPolicy.supplementaryProvisions.title')}&gt;</H2>
      <P className="text-gray-700">
        {t('privacyPolicy.supplementaryProvisions.effectiveDate', {
          effectiveDate: formatDate(version.effectiveDate),
        })}
      </P>

      <P className="font-bold">
        {t('privacyPolicy.supplementaryProvisions.changeDetails', {
          changeReason: t(version.changeReasonKey),
        })}
      </P>
    </div>
  );
};

export default AdditionalProvisions;
