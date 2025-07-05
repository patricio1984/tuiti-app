'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import { useInfinitePosts } from '@/hooks/useInfinitePosts';
import { PostItem } from './PostItem';
import { SkeletonList } from './SkeletonList';

export const PostsList: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfinitePosts();

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: '300px' }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  const shuffledPosts = useMemo(() => {
    const allPosts = data?.pages.flatMap((page) => page) ?? [];
    return allPosts.sort(() => Math.random() - 0.5);
  }, [data]);

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-black min-h-screen">
      <ul>
        {isLoading ? (
          <SkeletonList count={10} />
        ) : isError ? (
          <li className="text-center text-red-500 py-4">
            ❌ Error al cargar los posts.
          </li>
        ) : (
          shuffledPosts.map((post) => <PostItem key={post.id} post={post} />)
        )}
      </ul>

      {isFetchingNextPage && <SkeletonList count={3} />}
      <div ref={loadMoreRef} className="h-1" />
    </div>
  );
};
