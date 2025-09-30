import { notFound } from 'next/navigation';
import BackToListButton from '@/components/notice/BackToListButton';
import { getNoticeById } from '@/data/notices';
import { getNoticeContent } from '@/data/noticeContentMap';

interface NoticeDetailPageProps {
  params: Promise<{ id: string }>;
}

const NoticeDetailPage = async ({ params }: NoticeDetailPageProps) => {
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
    <div className="max-w-[1440px] w-full mt-[72px] mb-20 lg:mt-32 px-5 lg:px-[200px] mx-auto">
      <header className="pb-4 lg:pb-6 border-b border-[color:var(--color-gray-50)]">
        <h1 className="text-headline-sm lg:text-headline-lg font-bold text-gray-900 mb-2 lg:mb-3">{notice.title}</h1>
        <p className="text-body-md text-[color:var(--color-gray-500)]">{notice.date}</p>
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
