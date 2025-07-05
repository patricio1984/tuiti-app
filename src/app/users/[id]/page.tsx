import { type FC } from 'react';

type Props = {
  params: { id: string };
};

const UserPage: FC<Props> = ({ params }) => {
  const { id } = params;
  return <div>Usuario: {id}</div>;
};

export default UserPage;
