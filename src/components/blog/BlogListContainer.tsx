'use client';

import { useEffect, useRef, useState } from 'react';
import type { BlogPost } from '@/data/blogPosts';
import PostCard from './PostCard';

const ITEMS_PER_PAGE = 9;

interface BlogListContainerProps {
  posts: BlogPost[];
}

// 무한 스크롤 목록 — 바닥 센티넬이 뷰포트에 접근하면 9개씩 추가 노출한다.
const BlogListContainer = ({ posts }: BlogListContainerProps) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hasMore = visibleCount < posts.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
        }
      },
      { rootMargin: '200px 0px' },
    );
    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-10 lg:gap-y-14">
        {posts.slice(0, visibleCount).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      {hasMore && <div ref={sentinelRef} aria-hidden="true" />}
    </>
  );
};

export default BlogListContainer;
