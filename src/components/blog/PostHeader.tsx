import { getLocale } from 'next-intl/server';
import type { BlogPost } from '@/data/blogPosts';
import { formatDate } from '@/utils/dateFormat';

interface PostHeaderProps {
  post: BlogPost;
}

const PostHeader = async ({ post }: PostHeaderProps) => {
  const locale = await getLocale();

  return (
    <header>
      <p className="text-label-sm font-semibold text-primary-700">{post.category}</p>
      <h1 className="mt-2 mb-4 lg:mb-6 text-headline-sm lg:text-headline-lg font-bold">{post.title}</h1>
      <p className="text-caption-lg lg:text-body-md text-gray-500">
        {formatDate(post.date, locale, 'full')} · {post.author.name} · {post.author.role}
      </p>
      <hr className="border-gray-50 mt-6 lg:mt-10" />
    </header>
  );
};

export default PostHeader;
