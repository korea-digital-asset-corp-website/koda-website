import { getTranslations } from 'next-intl/server';
import FaqAccordion from '@/components/faq/FaqAccordion';

const FaqPage = async () => {
  const t = await getTranslations('faq');
  return (
    <div className="max-w-[1440px] w-full mt-32 px-5 lg:px-[200px] mx-auto">
      <h1 className="text-headline-sm lg:text-headline-lg mb-14 lg:mb-[120px] font-bold">{t('title')}</h1>
      <FaqAccordion />
    </div>
  );
};

export default FaqPage;
