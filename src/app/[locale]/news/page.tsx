import NewsContainer from '@/components/news/NewsContainer';
import { getTranslations } from 'next-intl/server';

const NewsPage = async () => {
  const t = await getTranslations('news');
  return (
    <div className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[100px] mx-auto">
      <h1 className="text-headline-sm lg:text-headline-lg lg:ml-[84px] mb-14 lg:mb-[120px] font-bold">{t('title')}</h1>
      <NewsContainer />
    </div>
  );
};

export default NewsPage;
