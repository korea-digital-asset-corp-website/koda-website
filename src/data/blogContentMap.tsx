import React from 'react';
import KodaCustodyCoreArchitecture from '@/components/blog/posts/KodaCustodyCoreArchitecture';
import MpcKeyManagement from '@/components/blog/posts/MpcKeyManagement';
import ColdWalletWithdrawalAutomation from '@/components/blog/posts/ColdWalletWithdrawalAutomation';
import DigitalAssetCustodyTrends from '@/components/blog/posts/DigitalAssetCustodyTrends';

const blogContentMap: Record<string, React.ComponentType> = {
  'custody-core-architecture': KodaCustodyCoreArchitecture,
  'mpc-key-management': MpcKeyManagement,
  'cold-wallet-withdrawal-automation': ColdWalletWithdrawalAutomation,
  'digital-asset-custody-trends': DigitalAssetCustodyTrends,
};

export const getBlogContent = (slug: string): React.ComponentType | null => {
  return blogContentMap[slug] || null;
};
