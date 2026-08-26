export type BlogCategory = 'Security' | 'Engineering' | 'Insight';

export interface BlogAuthor {
  name: string;
  role: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date: string; // 'YYYY.MM.DD'
  author: BlogAuthor;
  thumbnail?: string;
}

// 최신순 정렬을 데이터가 보장한다 — 맨 앞이 최신이며 목록 히어로가 된다.
export const blogPosts: BlogPost[] = [
  {
    slug: 'travel-rule-2026-custody',
    title: '규제 읽는 블록체인 메이커 #1: 내 코인을 내 지갑으로 보내는데 왜 증빙이 필요할까?',
    description:
      '2026년 전면 개정된 트래블룰의 핵심(100만원 기준 폐지, 수신 사업자 의무, 해외 거래소·개인지갑 규제)을 정리하고, "소유권과 트래블룰은 별개의 축"이라는 관점에서 커스터디 시나리오까지 검증합니다.',
    category: 'Insight',
    date: '2026.08.26',
    author: { name: '김주형', role: 'Software Engineer' },
  },
  {
    slug: 'custody-core-architecture',
    title: '키 보관을 넘어 서명 통제로 — KODA 커스터디 코어 아키텍처',
    description:
      'MPC·멀티시그·HSM 어느 하나만으로는 전체 위협을 해결할 수 없습니다. 단방향 QR 채널과 쿼럼 빌트인 HSM, 2단 인증을 단일 신뢰 경계로 묶은 KODA 커스터디 코어의 통합 아키텍처를 소개합니다.',
    category: 'Engineering',
    date: '2026.07.30',
    author: { name: '한황제', role: 'Software Engineer' },
    thumbnail: '/assets/images/blog/01-zone-separation.png',
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRelatedPosts = (slug: string, limit = 2): BlogPost[] => {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCategory = blogPosts.filter((post) => post.slug !== slug && post.category === current.category);
  const others = blogPosts.filter((post) => post.slug !== slug && post.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
};
