import { getTranslations } from 'next-intl/server';

const Copyright = async () => {
  const t = await getTranslations('footer');

  return (
    <div className="mt-10 order-5">
      <p className="text-gray-400 text-body-sm lg:text-body-md">{t('copyright', { year: new Date().getFullYear() })}</p>
    </div>
  );
};

export default Copyright;
