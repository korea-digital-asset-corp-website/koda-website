import React from 'react';
import KodaCustodyCoreArchitecture from '@/components/blog/posts/KodaCustodyCoreArchitecture';

const blogContentMap: Record<string, React.ComponentType> = {
  'custody-core-architecture': KodaCustodyCoreArchitecture,
};

export const getBlogContent = (slug: string): React.ComponentType | null => {
  return blogContentMap[slug] || null;
};
