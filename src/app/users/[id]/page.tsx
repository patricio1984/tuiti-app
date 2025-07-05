import { UserPostsList } from '@/components/UserPostsList';

export default function UserPage({ params }: { params: { id: string } }) {
  const userId = Number(params.id);
  return (
    <main className="max-w-2xl mx-auto px-4 pt-16">
      <UserPostsList userId={userId} />
    </main>
  );
}
