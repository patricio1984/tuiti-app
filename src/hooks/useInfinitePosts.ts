import { useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '@/api/posts/getPostsClient';
import type { Post } from '@/api/jSONPlaceholderAPI.schemas';

const LIMIT = 10;

export const useInfinitePosts = () => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ['infinite-posts'],
    queryFn: async ({ pageParam = 1 }) => {
      return await getPosts({
        params: {
          _page: pageParam,
          _limit: LIMIT,
        },
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.length < LIMIT ? undefined : nextPage;
    },
    initialPageParam: 1,
  });
};
