'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { useGetPosts } from '@/api/posts/posts';
import { useGetCommentsByPostId } from '@/api/comments/comments';
import { PostItem } from '@/components/PostItem';
import { CommentItem } from '@/components/CommentItem';
import { SkeletonList } from '@/components/SkeletonList';
import type { Post } from '@/api/jSONPlaceholderAPI.schemas';
import { UserProfileHeader } from '@/components/UserProfileHeader';

export default function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const postId = Number(id);

  const {
    data: commentsData,
    isLoading: isLoadingComments,
    isError: isErrorComments,
  } = useGetCommentsByPostId(postId);

  const {
    data: postsData,
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
  } = useGetPosts();

  if (isLoadingPosts) {
    return (
      <div className="max-w-2xl mx-auto px-4 pt-16">
        <SkeletonList count={1} />
      </div>
    );
  }

  if (isErrorPosts || isErrorComments) {
    return notFound();
  }

  const post: Post | undefined = postsData?.data.find((p) => p.id === postId);

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-4 pt-16 space-y-6">
      <UserProfileHeader userId={post.userId!} />
      <ul>
        <PostItem post={post} />
      </ul>

      <h2 className="text-xl font-bold">Comentarios</h2>

      <ul>
        {isLoadingComments ? (
          <SkeletonList count={5} />
        ) : (
          commentsData?.data.map((comment) => (
            <li key={comment.id}>
              <CommentItem comment={comment} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
