import React from 'react';
import KodaCustodyCoreArchitecture from '@/components/blog/posts/KodaCustodyCoreArchitecture';
import TravelRule2026Custody from '@/components/blog/posts/TravelRule2026Custody';

const blogContentMap: Record<string, React.ComponentType> = {
  'custody-core-architecture': KodaCustodyCoreArchitecture,
  'travel-rule-2026-custody': TravelRule2026Custody,
};

export const getBlogContent = (slug: string): React.ComponentType | null => {
  return blogContentMap[slug] || null;
};
