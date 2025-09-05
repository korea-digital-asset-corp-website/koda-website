import { getTranslations } from 'next-intl/server';
import React from 'react';

const page = async () => {
  const t = await getTranslations('test');
  return <div className="">{t('title')}</div>;
};

export default page;
