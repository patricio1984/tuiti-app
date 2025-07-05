import type { Post } from '@/api/jSONPlaceholderAPI.schemas';

export const PostItemContent = ({ post }: { post: Post }) => {
  return (
    <article
      className="border border-gray-200 dark:border-neutral-700
                 rounded-xl p-4 mb-6 transition-colors duration-200"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-neutral-700" />
        <div className="flex-1">
          <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
            @usuario{post.userId}
          </p>
          <p className="text-base text-gray-900 dark:text-gray-100 mt-1">
            {post.title}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {post.body}
          </p>
        </div>
      </div>
    </article>
  );
};
