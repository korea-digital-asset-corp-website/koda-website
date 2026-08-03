import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { BlogPost } from '@/data/blogPosts';
import { formatDate } from '@/utils/dateFormat';

interface FeaturedPostCardProps {
  post: BlogPost;
}

// 목록 히어로 — 최신 글 1개를 보더 없는 오픈 히어로로 크게. 오른쪽은 가짜
// 썸네일 대신 카테고리 워드마크를 앉힌 워시 면(타이포그래피 썸네일)이다.
const FeaturedPostCard = async ({ post }: FeaturedPostCardProps) => {
  const t = await getTranslations('blog.list');
  const locale = await getLocale();

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="space-y-3 lg:space-y-4">
          <p className="text-label-sm font-semibold text-primary-700">
            {t('featuredLabel')} · {post.category}
          </p>
          <h2 className="text-headline-sm lg:text-headline-lg font-bold group-hover:text-primary-700 transition-colors">
            {post.title}
          </h2>
          <p className="text-body-md lg:text-body-lg font-medium lg:font-normal text-gray-700">{post.description}</p>
          <p className="text-caption-lg text-gray-500">
            {formatDate(post.date, locale, 'full')} · {post.author.name}
          </p>
        </div>

        <div className="order-first lg:order-none relative flex items-center justify-center bg-gray-5020 rounded-[4px] aspect-[3/2] overflow-hidden">
          {post.thumbnail ? (
            // 개념도·다이어그램이 잘리지 않도록 contain — 워시 면 위 액자 형태
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-contain p-3 lg:p-5"
            />
          ) : (
            <span className="text-headline-lg lg:text-display-md font-bold text-gray-200 select-none">
              {post.category}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPostCard;
