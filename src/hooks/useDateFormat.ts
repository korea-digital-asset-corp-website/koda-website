import { useLocale } from 'next-intl';
import { useCallback } from 'react';

// 클라이언트 사이드 전용 포맷팅
export function useDateFormat() {
  const locale = useLocale();

  const formatDate = useCallback(
    (dateStr: string, format: 'full' | 'month' = 'full'): string => {
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
        // 뉴스: "January 2022"
        return `${monthName} ${year}`;
      }

      // 공지사항: "January 12, 2022"
      return `${monthName} ${parseInt(day)}, ${year}`;
    },
    [locale],
  );

  return { formatDate };
}
