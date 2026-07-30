'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { BlogPost } from '@/data/blogPosts';
import { formatDate } from '@/utils/dateFormat';

interface PostCardProps {
  post: BlogPost;
}

// 클라이언트 컴포넌트 — 무한 스크롤 컨테이너(BlogListContainer) 안에서
// 렌더되어야 하므로 getLocale 대신 useLocale 훅을 쓴다 (/news 선례와 동일).
const PostCard = ({ post }: PostCardProps) => {
  const locale = useLocale();

  return (
    <article className="group border border-gray-50 rounded-[4px] bg-white h-full">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full p-6 lg:p-8">
        <p className="text-label-sm font-semibold text-primary-700">{post.category}</p>
        <h3 className="mt-2 text-headline-xs lg:text-headline-sm font-bold group-hover:text-primary-700 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 lg:mt-3 text-body-sm lg:text-body-md text-gray-700 line-clamp-2">{post.description}</p>
        <p className="mt-auto pt-4 lg:pt-6 text-caption-lg text-gray-500">
          {formatDate(post.date, locale, 'full')} · {post.author.name}
        </p>
      </Link>
    </article>
  );
};

export default PostCard;
