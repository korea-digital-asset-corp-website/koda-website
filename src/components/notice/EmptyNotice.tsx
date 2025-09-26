import { getTranslations } from 'next-intl/server';

const EmptyNotice = async () => {
  const t = await getTranslations('notice');
  return <p className="text-body-lg font-medium lg:font-normal text-[color:var(--color-gray-500)]">{t('empty')}</p>;
};

export default EmptyNotice;
