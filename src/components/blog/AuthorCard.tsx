import type { BlogAuthor } from '@/data/blogPosts';

interface AuthorCardProps {
  author: BlogAuthor;
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <div className="border border-gray-50 rounded-[4px] p-5 lg:p-6">
      <p className="text-title-md lg:text-title-lg font-semibold">{author.name}</p>
      <p className="mt-1 text-body-sm text-gray-500">{author.role}</p>
    </div>
  );
};

export default AuthorCard;
