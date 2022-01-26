import { ApolloError, gql, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FormError } from '../components/common/form-error';
import { Helmet } from 'react-helmet-async';
import {
  loginMutation,
  loginMutationVariables,
} from '../../__generated__/loginMutation';
import { Button } from '../components/common/button';
import {
  authTokenVar,
  isLoggedInVar,
} from '../../service/plugins/apolloAdapter';
import { LOCAL_STORAGE_TOKEN } from '../../constants';
import { BackgroundAnimation } from '../components/background-animation';

const LOGO = '/src/client/assets/img/phi.png';

const LOGIN_MUTATION = gql`
  mutation loginMutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      token
      error
    }
  }
`;

interface ILoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<ILoginForm>({
    mode: 'onChange',
  });

  const onCompleted = (data: loginMutation) => {
    const {
      login: { ok, token },
    } = data;

    console.log(data)

    if (ok && token) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
      authTokenVar(token);
      isLoggedInVar(true);
    }
  };

  const [loginMutation, { data: loginMutationResults, loading }] = useMutation<
    loginMutation,
    loginMutationVariables
  >(LOGIN_MUTATION, { onCompleted });


  const onSubmit = () => {
    if (!loading) {
      const { email, password } = getValues();

      loginMutation({
        variables: {
          loginInput: {
            email,
            password,
          },
        },
      });
    }
  };

  const onInvalid = () => {
    console.log(errors);
    console.warn('로그인할 수  없습니다.');
  };

  return (
    <>
      <Helmet>
        <title>Login | DeMentor</title>
      </Helmet>


      <BackgroundAnimation />
      <div className="min-h-screen flex items-center justify-center overflow-hidden bg-[#f2f3e5] ">
        <form
          className=" z-10 w-full max-w-md min-w-max p-8 h-auto rounded-lg shadow-2xl flex flex-col items-center justify-center bg-white"
          onSubmit={handleSubmit(onSubmit, onInvalid)}
        >
          <img className="w-12" src={LOGO} alt="" />
          <h4 className=" font-mono text-xs my-2">D e m e n t o R</h4>

          <h2 className="font-serif text-lg my-5">
            The community of <strong className=" text-zinc-900">779</strong>{' '}
            amazing developers.
          </h2>

          <div className="mb-4 w-full">
            <div
              className=" text-xs font-extralight"
              style={{ textShadow: '1px 1px 0px rgba(0, 0, 0, 0.55)' }}
            >
              e - m a i l{' '}
            </div>
            <input
              autoFocus
              className=" w-full border-none focus:border-b-2 text-sm p-1 my-1 bg-none"
              style={{ outline: 'none', borderBottom: '2px solid' }}
              {...register('email', {
                required: 'Please enter a email address.',
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              type="email"
              name="email"
            />
            {errors.email?.message && (
              <FormError errorMessage={errors.email?.message} />
            )}
            {errors.email?.type === 'pattern' && (
              <FormError errorMessage={'Please enter a valid email'} />
            )}
          </div>

          <div className="mb-4 w-full">
            <div
              className=" text-xs font-extralight"
              style={{ textShadow: '1px 1px 0px rgba(0, 0, 0, 0.55)' }}
            >
              p a s s w o r d
            </div>
            <input
              className=" w-full border-none focus:outline-none focus:outline-0 text-sm p-1 my-1 bg-none"
              style={{ outline: 'none', borderBottom: '2px solid' }}
              {...register('password', {
                required: 'Please enter a password.',
                minLength: 10,
              })}
              type="password"
              name="password"
            />
            {errors.password?.message && (
              <FormError errorMessage={errors.password?.message} />
            )}
            {errors.password?.type === 'minLength' && (
              <FormError errorMessage=" Password must be more than 10. " />
            )}
          </div>

          <Button
            canClick={isValid}
            loading={loading}
            actionText={`${isValid ? "Let's get started." : 'Login'}`}
          />
          {loginMutationResults?.login.error && (
            <FormError errorMessage={loginMutationResults.login.error} />
          )}
          <h4 className=" mt-4 mb text-sm text-center text-neutral-700">
            New to DeMentor?{' '}
            <Link to="/create-account" className=" hover:underline">
              Create an account
            </Link>
          </h4>
          <h5 className=" text-xs text-center text-neutral-700">
            terms Privacy Security Contact
          </h5>
        </form>
      </div>
    </>
  );
};
