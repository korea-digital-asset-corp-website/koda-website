import { NewsItem } from '@/data/newsItems';
import Image from 'next/image';
import Link from 'next/link';

const NewsGrid = ({ items }: { items: NewsItem[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items?.map((item) => (
        <Link key={item.id} href={item.link || ''} target="_blank">
          <article className="group cursor-pointer flex flex-col">
            <div className="relative w-full aspect-[394/236] rounded-[4px] mb-[20px] overflow-hidden bg-[var(--color-gray-50)]">
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

            <h3 className="text-headline-xs lg:text-headline-sm font-bold line-clamp-2 text-gray-900 mb-3 group-hover:text-primary-700 transition-colors h-14 lg:h-16 overflow-hidden">
              {item.title}
            </h3>

            <div className="text-body-sm lg:text-body-md text-[var(--color-gray-500)]">
              <span>
                {item.publisher}, <time dateTime={item.date}>{item.date}</time>
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default NewsGrid;
