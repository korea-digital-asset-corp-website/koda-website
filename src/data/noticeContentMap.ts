import AccessSecurityContent from '@/components/notice/NoticeContents/AccessSecurityContent';
import React from 'react';
import DepositWithdrawContent from '@/components/notice/NoticeContents/DepositWithdrawContent';
import CryptoWarningContent from '@/components/notice/NoticeContents/CryptoWarningContent';

const noticeContentsMap: Record<number, React.ComponentType> = {
  1: DepositWithdrawContent,
  2: CryptoWarningContent,
  3: AccessSecurityContent,
};

export const getNoticeContent = (id: number): React.ComponentType | null => {
  return noticeContentsMap[id] || null;
};
