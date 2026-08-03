import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { BlogListContainer, FeaturedPostCard } from '@/components/blog';
import { blogPosts } from '@/data/blogPosts';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://kodax.com/${locale}/blog`,
      languages: {
        ko: 'https://kodax.com/blog',
        en: 'https://kodax.com/en/blog',
        'x-default': 'https://kodax.com/blog',
      },
    },
  };
}

const BlogPage = async () => {
  const t = await getTranslations('blog.list');
  const [featured, ...rest] = blogPosts;

  return (
    <div className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[180px] px-5 lg:px-[100px] mx-auto">
      <header className="mb-10 lg:mb-16">
        <h1 className="text-headline-sm lg:text-headline-lg font-bold">{t('title')}</h1>
      </header>

      <FeaturedPostCard post={featured} />

      {rest.length > 0 && (
        <div className="mt-12 lg:mt-20">
          <BlogListContainer posts={rest} />
        </div>
      )}
    </div>
  );
};

export default BlogPage;
