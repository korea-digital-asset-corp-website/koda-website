import type { BlogPost } from '@/data/blogPosts';
import PostCard from './PostCard';

interface PostGridProps {
  posts: BlogPost[];
}

const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;
