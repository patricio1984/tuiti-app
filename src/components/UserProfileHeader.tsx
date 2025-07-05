'use client';

import { useGetUserById } from '@/api/users/users';
import { fakeUserInfo } from '@/data/fakeUserInfo';
import { userGradients } from '@/utils/gradients';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const UserProfileHeader = ({ userId }: { userId: number }) => {
  const { data: response, isLoading } = useGetUserById(userId);
  const user = response?.data;

  const extra = fakeUserInfo[userId];
  const gradient = `bg-gradient-to-r ${userGradients[userId] ?? 'from-gray-300 to-gray-500'}`;

  if (isLoading || !user || !extra) {
    return (
      <div className="animate-pulse h-64 bg-gray-200 dark:bg-neutral-800 rounded" />
    );
  }

  const joinedDate = format(extra.joinedDate, "LLLL 'de' yyyy", {
    locale: es,
  });

  return (
    <div className="border-b pb-4">
      <div className={`h-40 w-full ${gradient}`} />

      <div className="relative -mt-16 px-4">
        <img
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-white dark:border-black"
        />
      </div>

      <div className="px-4 mt-2 space-y-1">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-400">@{user.username}</p>
        <p className="text-sm mt-2">{extra.bio}</p>
        <p className="text-sm text-gray-400">
          {extra.location} · Fecha de nacimiento: {extra.birthDate} · Se unió el{' '}
          {joinedDate}
        </p>

        <div className="flex gap-4 mt-2 text-sm">
          <span>
            <span className="font-bold">{extra.following}</span> Siguiendo
          </span>
          <span>
            <span className="font-bold">{extra.followers}</span> Seguidores
          </span>
        </div>

        <p className="text-sm text-gray-400 mt-1">
          {extra.followedByYou
            ? 'Lo seguís'
            : 'Ninguna de las cuentas que sigues sigue a este usuario'}
        </p>
      </div>
    </div>
  );
};
