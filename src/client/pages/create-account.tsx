import { ApolloError, gql, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FormError } from '../components/common/form-error';
import { Helmet } from 'react-helmet-async';
import { UserRole } from '../../__generated__/globalTypes';
import {
  createAccountMutation,
  createAccountMutationVariables,
} from '../../__generated__/createAccountMutation';
import { Button } from '../components/common/button';

const LOGO = '/src/client/assets/img/phi.png';

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccountMutation($createAccountInput: CreateAccountInput!) {
    createAccount(input: $createAccountInput) {
      ok
      error
    }
  }
`;

interface ICreateAccountForm {
  email: string;
  password: string;
  role: UserRole;
}

export const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<ICreateAccountForm>({
    mode: 'onChange',
    defaultValues: {
      role: UserRole.Mentee,
    },
  });

  const navigate = useNavigate();

  const onCompleted = (data: createAccountMutation) => {
    const {
      createAccount: { ok },
    } = data;

    if (ok) {
      navigate('/');
    }
  };

  const [
    createAccountMutation,
    { loading, data: createAccountMutationResults },
  ] = useMutation<createAccountMutation, createAccountMutationVariables>(
    CREATE_ACCOUNT_MUTATION,
    {
      onCompleted,
    },
  );

  const onSubmit = () => {
    if (!loading) {
      const { role, email, password } = getValues();

      createAccountMutation({
        variables: {
          createAccountInput: {
            role,
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
        <title>Create Account | DeMentor</title>
      </Helmet>
      <div className="w-full flex">
        <div className=" min-h-screen w-6/12 bg-orange-500"></div>
        <div className=" min-h-screen w-6/12 flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <div className=" flex justify-center items-center w-20 h-20 rounded-sm bg-neutral-800 mr-1 ">
              Apple
            </div>
            <div className=" flex justify-center items-center w-20 h-20 rounded-sm bg-neutral-800  mr-1">
              Facebook
            </div>
            <div className=" flex justify-center items-center w-20 h-20 rounded-sm bg-neutral-800  mr-1">
              Google
            </div>
            <div className=" flex justify-center items-center w-20 h-20 rounded-sm bg-neutral-800 mr-1">
              Naver
            </div>
            <div className=" flex justify-center items-center w-20 h-20 rounded-sm bg-neutral-800  ">
              Kakao
            </div>
          </div>

          <div className=" bg-white flex justify-center items-center w-full rounded-sm mt-7 pb-10">
            <form
              onSubmit={handleSubmit(onSubmit, onInvalid)}
              className="grid gap-2 w-64"
            >
              <select
                {...register('role', { required: true })}
                name="role"
                className='w-full border-1 h-8 rounded-sm"'
              >
                {Object.keys(UserRole).map((role, index) => (
                  <option className=" text-sm" key={index}>
                    {role}
                  </option>
                ))}
              </select>
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
                  <FormError errorMessage={'올바르지 않은 이메일입니다.'} />
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
              <Button canClick={isValid} loading={loading} actionText="Next" />
              {createAccountMutationResults?.createAccount.error && (
                <FormError
                  errorMessage={
                    createAccountMutationResults?.createAccount.error
                  }
                />
              )}
            </form>
          </div>
          <div className=" text-sm text-center">
            Already have an account?
            <Link to="/" className=" hover:underline">
              Login
            </Link>
          </div>
          <div className=" text-xs text-center">
            DEV Community — A constructive and inclusive social network for
            software developers. <br />
            Made with love and Ruby on Rails. DEV Community © 2016 - 2021.
          </div>
        </div>
      </div>
    </section>
  );
};
