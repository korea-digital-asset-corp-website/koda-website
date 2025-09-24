import React from 'react';
import { useTranslations } from 'next-intl';
import { H2, P } from '@/components/typography';
import { PrivacyPolicyVersion } from '@/data/privacy-policy/versions';

interface AdditionalProvisionsProps {
  version: PrivacyPolicyVersion;
}

const AdditionalProvisions = ({ version }: AdditionalProvisionsProps) => {
  const t = useTranslations('privacyPolicy.supplementaryProvisions');

  return (
    <div>
      <H2 className="font-bold">&lt;{t('title')}&gt;</H2>
      <P className="text-gray-700">{t('effectiveDate', { effectiveDate: version.effectiveDate })}</P>

      <P className="font-bold">{t('changeDetails', { changeReason: version.changeReason })}</P>
    </div>
  );
};

export default AdditionalProvisions;
