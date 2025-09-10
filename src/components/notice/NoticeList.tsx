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

  return (
    <div className="mt-[60px] lg:mt-0">
      {notices.map((notice) => (
        <NoticeItem key={notice.id} notice={notice} />
      ))}
    </div>
  );
};

export default NoticeList;
