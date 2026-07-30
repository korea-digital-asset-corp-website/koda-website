import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { AuthorCard, BackToBlogButton, PostHeader, RelatedPosts } from '@/components/blog';
import { blogPosts, getPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import { getBlogContent } from '@/data/blogContentMap';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

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
    // 문서 본문 컨테이너에서 whitespace-pre-line을 뺀 변형 — TSX 본문은 소스
    // 개행이 그대로 줄바꿈되면 안 된다 (스펙 6절, 스타일 가이드 검증 수확).
    <div className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] px-5 lg:px-[200px] mx-auto">
      <PostHeader post={post} />

      <main className="mt-8 lg:mt-12">
        <ContentComponent />
      </main>

      <div className="mt-12 lg:mt-16 space-y-10 lg:space-y-14">
        <AuthorCard author={post.author} />
        {related.length > 0 && <RelatedPosts posts={related} />}
        <BackToBlogButton />
      </div>
    </div>
  );
};

export default BlogPostPage;
