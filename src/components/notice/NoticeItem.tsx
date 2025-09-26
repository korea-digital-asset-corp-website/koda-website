import { Notice } from '@/data/notices';
import Link from 'next/link';

interface NoticeItemProps {
  notice: Notice;
}

const NoticeItem = ({ notice }: NoticeItemProps) => {
  return (
    <Link href={`/notice/${notice.id}`} className="block">
      <div className="flex flex-col mt-6 mb-4 lg:my-8 cursor-pointer group">
        <h2 className="text-headline-xs lg:text-headline-md font-bold group-hover:text-[color:var(--color-primary-700)] transition-colors text-gray-900 mb-2 lg:mb-3">
          {notice.title}
        </h2>
        <p className="text-body-sm lg:text-body-lg text-[color:var(--color-gray-500)] mb-4 lg:mb-6">{notice.date}</p>
        <div className="w-full h-[1px] bg-[color:var(--color-gray-50)] divider"></div>
      </div>
    </Link>
  );
};

export default NoticeItem;
