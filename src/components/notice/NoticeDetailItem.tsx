interface NoticeDetailProps {
  children: React.ReactNode;
}

interface NoticeDetailItemProps {
  children: React.ReactNode;
  indent?: number; // 0, 1, 2, 3... (들여쓰기 레벨)
  marker?: 'disc' | 'circle' | 'square' | 'diamond' | 'none'; // 마커 스타일
}

export const NoticeDetailList = ({ children }: NoticeDetailProps) => {
  return <ul>{children}</ul>;
};

export const NoticeDetailItem = ({ children, indent = 0, marker = 'disc' }: NoticeDetailItemProps) => {
  // 들여쓰기 클래스 매핑
  const indentClasses =
    {
      1: 'ml-[20px]', // 40px
      2: 'ml-[37px]', // 60px
      3: 'ml-[60px]', // 80px
      4: 'ml-[80px]', // 100px
    }[indent] || 'ml-5';

  // 마커 스타일 매핑
  const markerClass = {
    disc: 'list-disc',
    circle: 'list-[circle]',
    square: 'list-[square]',
    diamond: 'before:content-["◈_"]',
    none: 'list-none',
  }[marker];

  return <li className={`text-body-sm lg:text-body-md ${markerClass} list-outside ${indentClasses}`}>{children}</li>;
};
