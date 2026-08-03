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
    slug: 'custody-core-architecture',
    title: '키 보관을 넘어 서명 통제로 — KODA 커스터디 코어 아키텍처',
    description:
      'MPC·멀티시그·HSM 어느 하나만으로는 전체 위협을 해결할 수 없습니다. 단방향 QR 채널과 쿼럼 빌트인 HSM, 2단 인증을 단일 신뢰 경계로 묶은 KODA 커스터디 코어의 통합 아키텍처를 소개합니다.',
    category: 'Engineering',
    date: '2026.07.30',
    author: { name: '한황제', role: 'Software Engineer' },
    thumbnail: '/assets/images/blog/01-zone-separation.png',
  },
  {
    slug: 'cold-wallet-withdrawal-automation',
    title: '콜드월렛 출금 승인 파이프라인 자동화',
    description:
      '수탁 서비스의 생명선인 출금 승인 과정을 사람의 실수 없이, 그러나 사람의 통제 아래 자동화한 과정을 공유합니다.',
    category: 'Engineering',
    date: '2026.06.18',
    author: { name: '박온체인', role: 'Platform Engineer' },
  },
  {
    slug: 'mpc-key-management',
    title: 'MPC 기반 키 관리 아키텍처',
    description:
      '단일 실패 지점 없는 키 관리를 위해 KODA가 MPC를 도입하며 검토한 설계 원칙과 운영 교훈을 정리했습니다.',
    category: 'Security',
    date: '2026.04.02',
    author: { name: '김커스터디', role: 'Security Engineer' },
  },
  {
    slug: 'digital-asset-custody-trends',
    title: '디지털자산 수탁 시장의 세 가지 흐름',
    description:
      '기관 자금 유입, 규제 정비, 수탁 기술의 표준화 — 2026년 상반기 수탁 시장을 관통하는 흐름을 짚어봅니다.',
    category: 'Insight',
    date: '2026.02.11',
    author: { name: '이애널리스트', role: 'Research Lead' },
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
