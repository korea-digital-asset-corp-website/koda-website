export interface Notice {
  id: number;
  titleKey: string;
  date: string;
}

export const noticesData: Notice[] = [
  {
    id: 1,
    titleKey: 'depositWithdraw.title',
    date: '2022.01.12',
  },
  {
    id: 2,
    titleKey: 'cryptoWarning.title',
    date: '2024.07.29',
  },
];

export const getNoticeById = (id: number): Notice | undefined => {
  return noticesData.find((notice) => notice.id === id);
};
