import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PostHeader, RelatedPosts, ShareButtons, TocNav } from '@/components/blog';
import { getPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import { getBlogContent } from '@/data/blogContentMap';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// generateStaticParams를 쓰지 않는다 — 루트 레이아웃의 getMessages()가 요청
// 단위 렌더링을 강제해 이 사이트는 전 라우트가 동적이다(모두 ƒ). SSG를
// 선언해도 실제 산출물 없이 선언만 남아 Netlify 어댑터가 500을 낸다.
// notice/[id]와 같은 순수 동적 라우트가 검증된 패턴이다.

const BASE_URL = 'https://kodax.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/images/img-ogmeta_img.png`;

// 'YYYY.MM.DD' → ISO 'YYYY-MM-DD'
const toIsoDate = (date: string) => date.replaceAll('.', '-');

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${BASE_URL}/${locale}/blog/${post.slug}`;
  // OG를 명시하지 않으면 루트 레이아웃의 홈 OG가 상속돼 공유 카드가 잘못 나간다.
  const ogImage = post.thumbnail ? `${BASE_URL}${post.thumbnail}` : DEFAULT_OG_IMAGE;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
      languages: {
        ko: `${BASE_URL}/blog/${post.slug}`,
        en: `${BASE_URL}/en/blog/${post.slug}`,
        'x-default': `${BASE_URL}/blog/${post.slug}`,
      },
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      siteName: 'KODA',
      locale,
      publishedTime: toIsoDate(post.date),
      authors: [post.author.name],
      images: [{ url: ogImage, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const ContentComponent = getBlogContent(slug);

  if (!post || !ContentComponent) {
    notFound();
  }

  const related = getRelatedPosts(slug);

  // 검색엔진용 구조화 데이터 (BlogPosting)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: toIsoDate(post.date),
    author: { '@type': 'Person', name: post.author.name, jobTitle: post.author.role },
    publisher: { '@type': 'Organization', name: 'KODA', url: BASE_URL },
    image: post.thumbnail ? `${BASE_URL}${post.thumbnail}` : DEFAULT_OG_IMAGE,
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
    inLanguage: 'ko',
  };

  return (
    // 외곽(1440, relative) + 아티클(960 중앙) 구조. 본문 폭은 장문 가독성을
    // 위해 960px로 제한한다(팀 피드백). whitespace-pre-line은 TSX 본문이라 뺀다.
    <div className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] mx-auto relative">
      {/* 컨테이너 740px + 패딩 20px(본문 실폭 700px) — 토스 기술블로그 결의
          장문 가독 폭. 960px에서 한 번 더 좁혀 확정 */}
      <article className="max-w-[740px] w-full mx-auto px-5">
        <PostHeader post={post} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* 헤딩 위 여백을 계층별로 차등(H2 > H3 > 문단) — 공용 typography 컴포넌트를
            건드리지 않도록 블로그 본문에만 스코프해 오버라이드한다.
            main은 레이아웃이 이미 감싸므로 여기선 div (중첩 main은 HTML 표준 위반) */}
        {/* em(노션 기울임)은 한글 faux italic이 뒤 글자와 겹치므로 기울임 대신
            색·굵기 강조로 표현한다 */}
        <div className="mt-8 lg:mt-12 [&_h2]:mt-14 lg:[&_h2]:mt-[72px] [&_h3]:mt-10 lg:[&_h3]:mt-12 [&_em]:not-italic [&_em]:font-medium [&_em]:text-gray-900">
          <ContentComponent />
        </div>

        <ShareButtons title={post.title} />

        {related.length > 0 && (
          <div className="mt-12 lg:mt-16">
            <RelatedPosts posts={related} />
          </div>
        )}
      </article>

      <TocNav />
    </div>
  );
};

export default BlogPostPage;
