import { gql, useApolloClient, useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  verifyEmail,
  verifyEmailVariables,
} from '../../../__generated__/verifyEmail';
import { useMe } from '../../hooks/useMe';

const CONFIRM_EMAIL_MUTATION = gql`
  mutation verifyEmail($input: VerifyEmailInput!) {
    verifyEmail(input: $input) {
      ok
      error
    }
  }
`;

export const ConFirmEmail = () => {
  const client = useApolloClient();
  const { data: userData } = useMe();
  const navigate = useNavigate();

  const onCompleted = (data: verifyEmail) => {
    const {
      verifyEmail: { ok },
    } = data;

    if (ok && userData?.me.id) {
      client.writeFragment({
        id: `User:${userData.me.id}`,
        fragment: gql`
          fragment VerifiedUser on User {
            verified
          }
        `,
        data: {
          verified: true,
        },
      });
    }
    navigate('/');
  };

  const [verifyEmail, { data, loading, error }] = useMutation<
    verifyEmail,
    verifyEmailVariables
  >(CONFIRM_EMAIL_MUTATION, {
    onCompleted,
  });


  useEffect(() => {
    const [, code] = window.location.href.split('?code=');

    verifyEmail({
      variables: {
        input: {
          code,
        },
      },
    }); 
  }, []);

  return (
    <div className=" mt-64 flex flex-col justify-center items-center">
      <h2 className=" text-lg mb-2 font-medium">Confirming email ...</h2>
      <h4 className=" text-sm text-gray-700">
        Please wait, don't close this page.
      </h4>
    </div>
  );
};
