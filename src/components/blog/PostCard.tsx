'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { BlogPost } from '@/data/blogPosts';
import { formatDate } from '@/utils/dateFormat';

interface PostCardProps {
  post: BlogPost;
}

// 보더 없는 카드 — 구분은 그리드 여백과 타이포 위계가 맡는다.
// 무한 스크롤 컨테이너(클라이언트) 안에서 렌더되므로 useLocale 훅을 쓴다.
const PostCard = ({ post }: PostCardProps) => {
  const locale = useLocale();

  return (
    <article className="group h-full">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <p className="text-label-sm font-semibold text-primary-700">{post.category}</p>
        <h3 className="mt-2 text-headline-xs lg:text-headline-sm font-bold group-hover:text-primary-700 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 lg:mt-3 text-body-sm lg:text-body-md text-gray-700 line-clamp-2">{post.description}</p>
        <p className="mt-auto pt-4 text-caption-lg text-gray-500">
          {formatDate(post.date, locale, 'full')} · {post.author.name}
        </p>
      </Link>
    </article>
  );
};

export default PostCard;
