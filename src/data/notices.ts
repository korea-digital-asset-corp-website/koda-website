export interface Notice {
  id: number;
  titleKey: string;
  date: string;
}

export const noticesData: Notice[] = [
  {
    id: 1,
    titleKey: 'depositWithdraw.title',
    date: '2025-04-18',
  },
];

export const getNoticeById = (id: number): Notice | undefined => {
  return noticesData.find((notice) => notice.id === id);
};
