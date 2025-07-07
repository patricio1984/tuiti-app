'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FeedItemLayout } from './ui/FeedItemLayout';
import type { Post } from '@/api/jSONPlaceholderAPI.schemas';

export const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter();

  return (
    <li className="list-none">
      <button
        onClick={() => router.push(`/posts/${post.id}`)}
        className="w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2  transition duration-200"
      >
        <FeedItemLayout
          avatarUrl={`https://i.pravatar.cc/150?u=${post.userId}`}
          header={
            <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
              {post.title}{' '}
              <span className="text-gray-400 text-sm ml-1">
                @usuario{post.userId}
              </span>
            </p>
          }
          content={
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {post.body}
            </p>
          }
        />
      </button>
    </li>
  );
};
