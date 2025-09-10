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
    title: '한국디지털에셋, 블록체인 기술 혁신으로 업계 선도',
    image: '/assets/images/sample.jpg',
    publisher: '디지털투데이',
    date: '2024.12',
    link: 'https://www.digitaltoday.co.kr/news/articleView.html?idxno=590896',
  },
  {
    id: 2,
    title: '에덤-KODA 전략적 MOU체결, 교육분야 가상자산의 보안성 강화 협력',
    publisher: '한국경제',
    date: '2024.12',
  },
  {
    id: 3,
    title: 'KODA, 국내 최초 가상자산 이용자 보호법 보안 기준 충족',
    image: '/assets/images/sample.jpg',
    publisher: '매일경제',
    date: '2024.12',
  },
  {
    id: 4,
    title: '비트맥스-한국디지털에셋, 업무협약 체결…비트코인 전략 자산 본격화',
    image: '/assets/images/sample.jpg',
    publisher: '조선일보',
    date: '2024.12',
  },
  {
    id: 5,
    title: '"금융산업 경쟁력 위해 가상자산 ETF 도입해야"',
    publisher: '중앙일보',
    date: '2024.12',
  },
  {
    id: 6,
    title: '오덜리 네트워크, 코다와 전략적 파트너십 체결로 한국 웹3 도입 가속화',
    image: '/assets/images/sample.jpg',
    publisher: '동아일보',
    date: '2024.12',
  },
  {
    id: 7,
    title: '스틸리언, 한국디지털에셋에 보안진단서비스 수행',
    image: '/assets/images/sample.jpg',
    publisher: 'IT조선',
    date: '2024.12',
  },
  {
    id: 8,
    title: '한국디지털에셋의 글로벌 진출 계획',
    image: '/assets/images/sample.jpg',
    publisher: '전자신문',
    date: '2024.12',
  },
  {
    id: 9,
    title: '디지털 혁신을 선도하는 KODA의 비전',
    image: '/assets/images/sample.jpg',
    publisher: '서울경제',
    date: '2024.12',
  },
];
