export interface NewsItem {
  id: number;
  title: string;
  image?: string;
  publisher: string;
  date: string;
  link?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: '에덤-KODA 전략적 MOU체결, 교육분야 가상자산의 보안성 강화 협력',
    image: '/assets/images/news_1.png',
    publisher: '매일경제',
    date: '2025.03',
    link: 'https://www.mk.co.kr/news/business/11257685',
  },
  {
    id: 2,
    title: 'KODA, 가상자산사업자 갱신신고 수리 완료…커스터디 기업 최초',
    image: '/assets/images/news_default.png',
    publisher: '뉴스1',
    date: '2025.02',
    link: 'https://www.news1.kr/finance/blockchain-fintech/5704266',
  },
  {
    id: 3,
    title: 'KODA, 국내 최초 가상자산 이용자 보호법 보안 기준 충족',
    image: '/assets/images/news_3.png',
    publisher: '매일경제',
    date: '2025.02',
    link: 'https://www.mk.co.kr/news/it/11251597',
  },
  {
    id: 4,
    title: '비트맥스-한국디지털에셋, 업무협약 체결…비트코인 전략 자산 본격화',
    image: '/assets/images/news_4.jpg',
    publisher: '이투데이',
    date: '2025.02',
    link: 'https://www.etoday.co.kr/news/view/2447415',
  },
  {
    id: 5,
    title: '금융산업 경쟁력 위해 가상자산 ETF 도입해야',
    image: '/assets/images/news_5.jpg',
    publisher: '뉴시스',
    date: '2024.12',
    link: 'https://www.newsis.com/view/NISX20241220_0003005184',
  },
  {
    id: 6,
    title: '오덜리 네트워크, 코다와 전략적 파트너십 체결로 한국 웹3 도입 가속화',
    image: '/assets/images/news_6.png',
    publisher: '토큰포스트',
    date: '2024.11',
    link: 'https://www.tokenpost.kr/article-206171',
  },
  {
    id: 7,
    title: '스틸리언, 한국디지털에셋에 보안진단서비스 수행',
    image: '/assets/images/news_7.png',
    publisher: '보안뉴스',
    date: '2024.06',
    link: 'https://www.boannews.com/media/view.asp?idx=130295',
  },
  {
    id: 8,
    title: `가상자산 수탁 기업 '코다', 프리 시리즈 A 투자 유치`,
    image: '/assets/images/news_8.jpg',
    publisher: '토큰포스트',
    date: '2024.05',
    link: 'https://www.tokenpost.kr/article-179186',
  },
  {
    id: 9,
    title: 'KODA, 가상자산 수탁고 8조 달성…시장 점유율 80% 이상',
    image: '/assets/images/news_default.png',
    publisher: '전자신문',
    date: '2024.12',
    link: 'https://www.etnews.com/20240222000131',
  },
  {
    id: 10,
    title: '가상자산 1500억 보유 위메이드 "KODA에 맡겨 관리',
    image: '/assets/images/news_10.png',
    publisher: '파이낸셜뉴스',
    date: '2021.05',
    link: 'https://www.fnnews.com/news/202105170917477041',
  },
  {
    id: 11,
    title: '국내 기업도 테슬라처럼...비트코인 투자 길 열렸다',
    image: '/assets/images/news_11.png',
    publisher: '서울경제',
    date: '2021.05',
    link: 'https://www.sedaily.com/NewsView/22M7T2LDX9',
  },
  {
    id: 12,
    title: `국민은행, 은행권 첫 ‘디지털 자산 보관사업’ 시동`,
    image: '/assets/images/news_12.png',
    publisher: '한국경제',
    date: '2020.11',
    link: 'https://www.hankyung.com/economy/article/2020112662211',
  },
];
