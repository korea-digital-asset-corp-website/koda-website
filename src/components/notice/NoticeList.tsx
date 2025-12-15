import { Notice } from '@/data/notices';
import EmptyNotice from './EmptyNotice';
import NoticeItem from './NoticeItem';

interface NoticeListProps {
  notices: Notice[];
}

const NoticeList = ({ notices }: NoticeListProps) => {
  const hasNotices = notices.length > 0;

  if (!hasNotices) {
    return <EmptyNotice />;
  }

  const sortedNotices = [...notices].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="mt-[60px] lg:mt-0 [&>*:last-child_.divider]:hidden">
      {sortedNotices.map((notice) => (
        <NoticeItem key={notice.id} notice={notice} />
      ))}
    </div>
  );
};

export default NoticeList;
