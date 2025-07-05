import { FeedItemLayout } from './ui/FeedItemLayout';
import type { Comment } from '@/api/jSONPlaceholderAPI.schemas';

export const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <FeedItemLayout
      avatarUrl={`https://i.pravatar.cc/150?u=${comment.email}`}
      header={
        <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
          {comment.name}{' '}
          <span className="text-gray-500 text-sm ml-1">
            @{comment.email?.split('@')[0] ?? 'anonimo'}
          </span>
        </p>
      }
      content={
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {comment.body}
        </p>
      }
    />
  );
};
