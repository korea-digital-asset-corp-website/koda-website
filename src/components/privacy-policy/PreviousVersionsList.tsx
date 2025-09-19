import React from 'react';
import Link from 'next/link';
import { H3 } from '@/components/typography';
import { getAllVersions } from '@/data/privacy-policy/versions';

interface PreviousVersionsListProps {
  currentVersion?: string;
}

const PreviousVersionsList = ({ currentVersion }: PreviousVersionsListProps) => {
  const allVersions = getAllVersions();

  const formatDate = (dateString: string) => {
    return `${dateString}일 시행`;
  };

  return (
    <>
      <H3 className="font-bold mb-3">[이전 개인정보 처리방침 목록]</H3>
      <div className="space-y-1">
        {allVersions.map((version) => {
          // const isCurrentVersion = currentVersion === version.version;
          const linkUrl = version.isLatest ? `/privacy-policy` : `/privacy-policy/${version.version}`;
          return (
            <div key={version.version} className="flex items-center">
              <Link href={linkUrl} className="text-body-lg text-primary-700 underline underline-offset-4">
                ({formatDate(version.effectiveDate)}) 개인정보처리방침 {version.version}
              </Link>
              {/* {isCurrentVersion && (
                <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">현재 보기</span>
              )} */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PreviousVersionsList;
