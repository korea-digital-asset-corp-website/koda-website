'use client';

import { useState } from 'react';
import { newsData } from '@/data/newsItems';
import NewsGrid from './NewsGrid';
import MoreListViewButton from './MoreListViewButton';

const ITEMS_PER_PAGE = 9;

const NewsContainer = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const visibleNews = newsData.slice(0, visibleCount);
  const hasMore = visibleCount < newsData.length;

  return (
    <>
      <NewsGrid items={visibleNews} />
      {hasMore && <MoreListViewButton onClick={handleLoadMore} />}
    </>
  );
};

export default NewsContainer;
