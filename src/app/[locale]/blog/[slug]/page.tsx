import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PostHeader, RelatedPosts, ShareButtons } from '@/components/blog';
import { getPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import { getBlogContent } from '@/data/blogContentMap';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// generateStaticParams를 쓰지 않는다 — 루트 레이아웃의 getMessages()가 요청
// 단위 렌더링을 강제해 이 사이트는 전 라우트가 동적이다(모두 ƒ). SSG를
// 선언해도 실제 산출물 없이 선언만 남아 Netlify 어댑터가 500을 낸다.
// notice/[id]와 같은 순수 동적 라우트가 검증된 패턴이다.

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://kodax.com/${locale}/blog/${post.slug}`,
      languages: {
        ko: `https://kodax.com/blog/${post.slug}`,
        en: `https://kodax.com/en/blog/${post.slug}`,
        'x-default': `https://kodax.com/blog/${post.slug}`,
      },
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

  return (
    // 외곽(1440, relative) + 아티클(960 중앙) 구조. 본문 폭은 장문 가독성을
    // 위해 960px로 제한한다(팀 피드백). whitespace-pre-line은 TSX 본문이라 뺀다.
    <div className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] mx-auto relative">
      <article className="max-w-[960px] w-full mx-auto px-5">
        <PostHeader post={post} />

        <main className="mt-8 lg:mt-12">
          <ContentComponent />
        </main>

        <ShareButtons title={post.title} />

        {related.length > 0 && (
          <div className="mt-12 lg:mt-16">
            <RelatedPosts posts={related} />
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPostPage;
