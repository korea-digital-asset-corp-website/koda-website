import { notFound } from 'next/navigation';
import BackToListButton from '@/components/notice/BackToListButton';
import { getNoticeById } from '@/data/notices';
import { getNoticeContent } from '@/data/noticeContentMap';
import { getTranslations, getLocale } from 'next-intl/server';
import { formatDate } from '@/utils/dateFormat';

interface NoticeDetailPageProps {
  params: Promise<{ id: string }>;
}

const NoticeDetailPage = async ({ params }: NoticeDetailPageProps) => {
  const t = await getTranslations('modal');
  const locale = await getLocale();
  const { id } = await params;
  const noticeId = parseInt(id, 10);

  if (isNaN(noticeId)) {
    notFound();
  }

  const notice = getNoticeById(noticeId);
  const ContentComponent = getNoticeContent(noticeId);

  if (!notice || !ContentComponent) {
    notFound();
  }

  return (
    <div className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[200px] mx-auto min-h-[486px] lg:min-h-[788px]">
      <header className="pb-4 lg:pb-6 border-b border-[color:var(--color-gray-50)]">
        <h1 className="text-headline-sm lg:text-headline-lg font-bold text-gray-900 mb-2 lg:mb-3">
          {t(notice.titleKey)}
        </h1>
        <p className="text-body-md text-[color:var(--color-gray-500)]">{formatDate(notice.date, locale, 'full')}</p>
      </header>

      <main className="mt-[22px] mb-8 lg:mt-[40px] lg:mb-12">
        <div className="text-gray-900 leading-relaxed">
          <ContentComponent />
        </div>
      </main>

      <hr className="border-gray-50 mb-8 lg:mb-14" />
      <BackToListButton />
    </div>
  );
};

export default NoticeDetailPage;
