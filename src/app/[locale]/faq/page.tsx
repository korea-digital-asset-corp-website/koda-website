import { getTranslations } from 'next-intl/server';
import FaqAccordion from '@/components/faq/FaqAccordion';

const FaqPage = async () => {
  const t = await getTranslations('faq');
  return (
    <div className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[200px] mx-auto min-h-[486px] lg:min-h-[788px]">
      <h1 className="text-headline-sm lg:text-headline-lg mb-10 lg:mb-[88px] font-bold">{t('title')}</h1>
      <FaqAccordion />
    </div>
  );
};

export default FaqPage;
