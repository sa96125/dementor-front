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
import { authTokenVar, isLoggedInVar } from '../../service/plugins/apolloAdapter';
import { LOCAL_STORAGE_TOKEN } from '../../constants';

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

    if (ok && token) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
      authTokenVar(token);
      isLoggedInVar(true);
    }
  };

  const [loginMutation, { data: loginMutationResults, loading }] = useMutation<
    loginMutation,
    loginMutationVariables
  >(LOGIN_MUTATION, {
    onCompleted,
  });

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
    <section className="h-screen flex flex-col items-center justify-center">
      <Helmet>
        <title>Login | DeMentor</title>
      </Helmet>
      <div className="w-full max-w-screen-sm">
        <div className="flex flex-col items-center">
          <img className="w-14" src={LOGO} alt="" />
          <p className=" lg:text-4xl mt-5 font-serif">Welcome to DeMentor</p>
          <p className=" text-lg">
            the community of <b className="font-serif">779,455</b> amazing
            developers
          </p>
        </div>
        <div className=" bg-white flex justify-center items-center w-full rounded-sm mt-7 pb-10">
          <form
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            className="grid gap-2 w-64"
          >
            <div>
              <div className=" text-sm">Email address</div>
              <input
                {...register('email', {
                  required: '이메일을 입력해주세요.',
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="email"
                name="email"
                className="w-full border-1 h-8 rounded-sm"
              />
              {errors.email?.message && (
                <FormError errorMessage={errors.email?.message} />
              )}
              {errors.email?.type === 'pattern' && (
                <FormError errorMessage={'Please enter a valid email'} />
              )}
            </div>
            <div>
              <div className=" text-sm">Password</div>
              <input
                {...register('password', {
                  required: '비밀번호를 입력해주세요.',
                  minLength: 10,
                })}
                type="password"
                name="password"
                className="w-full h-8 rounded-sm"
              />
              {errors.password?.message && (
                <FormError errorMessage={errors.password?.message} />
              )}
              {errors.password?.type === 'minLength' && (
                <FormError errorMessage=" Password must be more than 10. " />
              )}
            </div>
            <Button canClick={isValid} loading={loading} actionText="login" />
            {loginMutationResults?.login.error && (
              <FormError errorMessage={loginMutationResults.login.error} />
            )}
          </form>
        </div>
        <div className=" text-sm text-center">
          New to DeMentor?
          <Link to="/create-account" className=" hover:underline">
            Create an account
          </Link>
        </div>
        <div className=" text-xs text-center">
          Terms Privacy Security Contact DeMentor
        </div>
      </div>
    </section>
  );
};
