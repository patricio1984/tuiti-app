'use client';

import React from 'react';
import { useGetPosts } from '@/api/posts/posts';
import { PostItem } from './PostItem';
import { SkeletonList } from './SkeletonList';

export const UserPostsList: React.FC<{ userId: number }> = ({ userId }) => {
  const { data, isLoading, isError } = useGetPosts({
    query: {
      queryKey: ['posts', userId],
      enabled: !!userId,
      queryFn: ({ signal }) =>
        fetch(`/api/posts?userId=${userId}`, { signal }).then((res) =>
          res.json()
        ),
    },
  });

  if (isLoading) return <SkeletonList count={10} />;
  if (isError)
    return (
      <p className="text-red-500 text-center">
        ❌ Error al cargar los posts del usuario.
      </p>
    );

  return (
    <ul>
      {data?.data.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
