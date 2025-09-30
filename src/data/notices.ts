export interface Notice {
  id: number;
  title: string;
  date: string;
}

export const noticesData: Notice[] = [
  {
    id: 1,
    title: '가상자산 입출금시 유의사항',
    date: '2025-04-18',
  },
];

export const getNoticeById = (id: number): Notice | undefined => {
  return noticesData.find((notice) => notice.id === id);
};
