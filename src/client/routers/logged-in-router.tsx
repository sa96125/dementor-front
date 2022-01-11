import { gql, useQuery } from '@apollo/client';
import { isLoggedInVar } from '../../service/plugins/apolloAdapter';
import { meQuery_me } from '../../__generated__/meQuery';

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
    }
  }
`;

export const LoggedInRouter = () => {
  const { data, loading, error } = useQuery<meQuery_me>(ME_QUERY);
  console.log(data);
  if (loading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        loading...
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => isLoggedInVar(false)}>logout</button>
    </div>
  );
};
