import NoticeList from '@/components/notice/NoticeList';
import { noticesData } from '@/data/notices';
import { getTranslations } from 'next-intl/server';

const NoticePage = async () => {
  const t = await getTranslations('notice');
  return (
    <div className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[200px] mx-auto min-h-[486px] lg:min-h-[788px]">
      <h1 className="text-headline-sm lg:text-headline-lg mb-14 lg:mb-[120px] font-bold">{t('title')}</h1>
      <NoticeList notices={noticesData} />
    </div>
  );
};

export default NoticePage;
