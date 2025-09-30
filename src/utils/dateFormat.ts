// 서버사이드 전용 포멧팅
export function formatDate(dateStr: string, locale: string, format: 'full' | 'month' = 'full'): string {
  const parts = dateStr.split('.');
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  if (locale === 'ko') {
    return day ? `${year}.${month}.${day}` : `${year}.${month}`;
  }

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthName = monthNames[parseInt(month) - 1];

  if (format === 'month' || !day) {
    return `${monthName} ${year}`;
  }

  return `${monthName} ${parseInt(day)}, ${year}`;
}
