'use client';

import { NewsItem } from '@/data/newsItems';
import { useDateFormat } from '@/hooks/useDateFormat';
import Image from 'next/image';
import Link from 'next/link';

const NewsGrid = ({ items }: { items: NewsItem[] }) => {
  const { formatDate } = useDateFormat();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 lg:gap-y-10">
      {items?.map((item) => (
        <Link key={item.id} href={item.link} target="_blank">
          <article className="group cursor-pointer flex flex-col">
            <div className="relative w-full aspect-[394/236] rounded-[4px] mb-4 lg:mb-[20px] overflow-hidden bg-[var(--color-gray-50)] border border-[color:var(--color-gray-50)]">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-fit"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center"></div>
              )}
            </div>

            <h3 className="text-headline-xs lg:text-headline-sm font-bold line-clamp-2 text-gray-900 mb-1 lg:mb-2 group-hover:text-primary-700 transition-colors h-14 lg:h-16 overflow-hidden">
              {item.title}
            </h3>

            <div className="text-body-sm font-medium lg:font-normal lg:text-body-md text-[var(--color-gray-500)]">
              <span>
                {item.publisher}, <time dateTime={item.date}>{formatDate(item.date)}</time>
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default NewsGrid;
