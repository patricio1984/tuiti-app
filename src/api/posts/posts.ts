/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * JSONPlaceholder API
 * OpenAPI spec version: 1.0.0
 */
import { useQuery } from '@tanstack/react-query';
import type {
  DataTag,
  QueryClient,
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

import type { Post } from '../jSONPlaceholderAPI.schemas';

import { axiosInstance } from '../../lib/axios';

/**
 * @summary Get posts
 */
export const getPosts = (signal?: AbortSignal) => {
  return axiosInstance<Post[]>({ url: `/posts`, method: 'GET', signal });
};

export const getGetPostsQueryKey = () => {
  return [`/posts`] as const;
};

export const getGetPostsQueryOptions = <
  TData = Awaited<ReturnType<typeof getPosts>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getPosts>>, TError, TData>
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPostsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPosts>>> = ({
    signal,
  }) => getPosts(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPosts>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetPostsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getPosts>>
>;
export type GetPostsQueryError = unknown;

/**
 * @summary Get posts
 */
export function useGetPosts<
  TData = Awaited<ReturnType<typeof getPosts>>,
  TError = unknown,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getPosts>>, TError, TData>
    >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getGetPostsQueryOptions(options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Get post by ID
 */
export const getPostById = (postId: number, signal?: AbortSignal) => {
  return axiosInstance<Post>({
    url: `/posts/${postId}`,
    method: 'GET',
    signal,
  });
};

export const getGetPostByIdQueryKey = (postId: number) => {
  return [`/posts/${postId}`] as const;
};

export const getGetPostByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getPostById>>,
  TError = unknown,
>(
  postId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getPostById>>, TError, TData>
    >;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPostByIdQueryKey(postId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPostById>>> = ({
    signal,
  }) => getPostById(postId, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!postId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getPostById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetPostByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getPostById>>
>;
export type GetPostByIdQueryError = unknown;

/**
 * @summary Get post by ID
 */
export function useGetPostById<
  TData = Awaited<ReturnType<typeof getPostById>>,
  TError = unknown,
>(
  postId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getPostById>>, TError, TData>
    >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>;
} {
  const queryOptions = getGetPostByIdQueryOptions(postId, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey;

  return query;
}
