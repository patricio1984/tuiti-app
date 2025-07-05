export default {
  blogAPI: {
    input: './swagger.yaml',
    output: {
      target: './src/api',
      mode: 'tags-split',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/lib/axios.ts',
          name: 'axiosInstance',
        },
        operations: {
          getPosts: {
            query: {
              useQuery: true,
              useInfiniteQuery: false,
              useSuspenseQuery: false,
            },
          },
          getPostById: {
            query: {
              useQuery: true,
              useInfiniteQuery: false,
              useSuspenseQuery: false,
            },
          },
          getCommentsByPostId: {
            query: {
              useQuery: true,
              useInfiniteQuery: false,
              useSuspenseQuery: false,
            },
          },
          getUserById: {
            query: {
              useQuery: true,
              useInfiniteQuery: false,
              useSuspenseQuery: false,
            },
          },
        },
      },
    },
  },
};
