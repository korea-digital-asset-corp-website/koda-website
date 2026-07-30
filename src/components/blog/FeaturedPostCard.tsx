import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { BlogPost } from '@/data/blogPosts';
import { formatDate } from '@/utils/dateFormat';

interface FeaturedPostCardProps {
  post: BlogPost;
}

// 목록 히어로 — 최신 글 1개를 2열 분할로 크게. 오른쪽은 가짜 썸네일 대신
// 카테고리 워드마크를 앉힌 워시 면(타이포그래피 썸네일)이다.
const FeaturedPostCard = async ({ post }: FeaturedPostCardProps) => {
  const t = await getTranslations('blog.list');
  const locale = await getLocale();

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border border-gray-50 rounded-[4px] bg-white p-6 lg:p-10"
    >
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        <div className="space-y-3 lg:space-y-4">
          <p className="text-label-sm font-semibold text-primary-700">
            {t('featuredLabel')} · {post.category}
          </p>
          <h2 className="text-headline-sm lg:text-headline-md font-bold group-hover:text-primary-700 transition-colors">
            {post.title}
          </h2>
          <p className="text-body-md lg:text-body-lg font-medium lg:font-normal text-gray-700">{post.description}</p>
          <p className="text-caption-lg text-gray-500">
            {formatDate(post.date, locale, 'full')} · {post.author.name}
          </p>
        </div>

        <div className="order-first lg:order-none flex items-center justify-center bg-gray-5020 rounded-[4px] aspect-[3/2]">
          <span className="text-headline-lg lg:text-display-md font-bold text-gray-200 select-none">
            {post.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPostCard;
