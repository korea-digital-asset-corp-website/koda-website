import React from 'react';
import { H2, P } from '@/components/typography';
import { PrivacyPolicyVersion } from '@/data/privacy-policy/versions';

interface AdditionalProvisionsProps {
  version: PrivacyPolicyVersion;
}

const AdditionalProvisions = ({ version }: AdditionalProvisionsProps) => {
  return (
    <div>
      <H2 className="font-bold">&lt;부칙&gt;</H2>
      <P className="text-gray-700">(시행일) 이 개인정보처리방침은 {version.effectiveDate}일부터 적용됩니다.</P>

      <P className="font-bold">변경 내역: {version.changeReason}</P>
    </div>
  );
};

export default AdditionalProvisions;
