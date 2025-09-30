import React from 'react';
import { NoticeContent1 } from '@/components/notice/NoticeContents';

const noticeContentsMap: Record<number, React.ComponentType> = {
  1: NoticeContent1,
};

export const getNoticeContent = (id: number): React.ComponentType | null => {
  return noticeContentsMap[id] || null;
};
