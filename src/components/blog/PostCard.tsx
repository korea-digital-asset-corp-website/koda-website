'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { BlogPost } from '@/data/blogPosts';
import { formatDate } from '@/utils/dateFormat';

interface PostCardProps {
  post: BlogPost;
}

// 에디토리얼 톱룰 카드 — 박스 대신 상단 헤어라인 하나로 구분한다.
// hover 시 라인이 딥그린으로 물드는 것이 시그니처 마이크로 인터랙션.
// 무한 스크롤 컨테이너(클라이언트) 안에서 렌더되므로 useLocale 훅을 쓴다.
const PostCard = ({ post }: PostCardProps) => {
  const locale = useLocale();

  return (
    <article className="group h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col h-full border-t border-gray-50 pt-4 lg:pt-5 transition-colors group-hover:border-primary-700"
      >
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
