import { gql, useQuery } from '@apollo/client';
import { isLoggedInVar } from '../../service/plugins/apolloAdapter';

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`;

export const LoggedInRouter: React.FC = () => {
  const { data, loading, error } = useQuery(ME_QUERY);
  console.log(error);
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
