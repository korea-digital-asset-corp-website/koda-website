import { getTranslations } from 'next-intl/server';
import type { BlogPost } from '@/data/blogPosts';
import PostCard from './PostCard';

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts = async ({ posts }: RelatedPostsProps) => {
  const t = await getTranslations('blog.detail');

  return (
    <section>
      <h2 className="text-headline-xs lg:text-headline-sm font-bold">{t('relatedTitle')}</h2>
      <div className="mt-4 lg:mt-6 grid sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
