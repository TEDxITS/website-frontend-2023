'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import UnstyledLink from '@/components/link/UnstyledLink';

import { useAuthStore } from '@/store/useAuthStore';

import api from '@/utils/api';

const loginSchema = z.object({
  email: z.string().email({ message: 'The provided email is not valid' }),
  password: z.string(),
});
type LoginDataType = z.infer<typeof loginSchema>;

const loginFormInitialValue: LoginDataType = {
  email: '',
  password: '',
};

const loginUser = async (email: string, password: string, isAdmin: boolean) => {
  try {
    const { data } = await api.post(
      isAdmin ? '/auth/login-admin' : '/auth/login',
      {
        email,
        password,
      }
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default function LoginForm({ isAdmin = false }: { isAdmin?: boolean }) {
  const logIn = useAuthStore((state) => state.logIn);
  const adminLogIn = useAuthStore((state) => state.adminLogIn);
  const router = useRouter();
  const methods = useForm<LoginDataType>({
    defaultValues: loginFormInitialValue,
    mode: 'onTouched',
    resolver: zodResolver(loginSchema),
  });
  const { handleSubmit, reset } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
    setIsLoading(true);
    const loginPromise = loginUser(data.email, data.password, isAdmin);
    toast
      .promise(loginPromise, {
        loading: 'Loading..',
        success: 'Logged in successfully',
        error: (e) => e.response.data.message,
      })
      .then((res) => {
        if (isAdmin) {
          adminLogIn(
            { name: res.data.user.name, email: res.data.user.email },
            res.data.accessToken,
            res.data.refreshToken
          );
        } else {
          logIn(
            { name: res.data.user.name, email: res.data.user.email },
            res.data.accessToken,
            res.data.refreshToken
          );
        }
        router.push('/');
      })
      .catch((e) => e)
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='h-full w-full p-4 pt-6 text-cwhite'
      >
        <div className='mb-10'>
          <Input id='email' type='email' label='Email' className='rounded-md' />
          <Input
            id='password'
            type='password'
            label='Password'
            className='rounded-md'
          />
          {!isAdmin && (
            <div className='flex justify-end'>
              <UnstyledLink
                href='/auth/forgot-password'
                className='font-medium hover:opacity-50'
              >
                Forgot Your Password?
              </UnstyledLink>
            </div>
          )}
        </div>
        <Button type='submit' className='mb-4 w-full py-3' disabled={isLoading}>
          <p className='w-full text-center'>Login</p>
        </Button>

        {!isAdmin && (
          <p className='text-center text-cwhite'>
            Don't have an account?
            <span className='ml-1'>
              <Link
                href='/auth/register'
                className='animated-underline font-medium hover:text-cred'
              >
                Register
              </Link>
            </span>
          </p>
        )}
      </form>
    </FormProvider>
  );
}

// 'use client';
// import { zodResolver } from '@hookform/resolvers/zod';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React from 'react';
// import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';
// import * as z from 'zod';

// import Button from '@/components/button/Button';
// import Input from '@/components/input/Input';

// import { useFirebaseAuthContext } from '@/context/FirebaseAuthContext';
// import { handleFirebaseError } from '@/utils/firebase/shared';

// const loginSchema = z.object({
//   email: z.string().email({ message: 'The provided email is not valid' }),
//   password: z.string(),
// });
// type LoginDataType = z.infer<typeof loginSchema>;

// const loginFormInitialValue: LoginDataType = {
//   email: '',
//   password: '',
// };

// export default function LoginForm() {
//   const { logIn, logInWithGoogle } = useFirebaseAuthContext();
//   const router = useRouter();
//   const methods = useForm<LoginDataType>({
//     defaultValues: loginFormInitialValue,
//     mode: 'onTouched',
//     resolver: zodResolver(loginSchema),
//   });
//   const { handleSubmit, reset } = methods;
//   const [isLoading, setIsLoading] = React.useState<boolean>(false);

//   const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
//     setIsLoading(true);
//     const loginPromise = logIn(data.email, data.password);
//     toast
//       .promise(loginPromise, {
//         loading: 'Loading..',
//         success: 'Logged in successfully',
//         error: (e) => handleFirebaseError(e),
//       })
//       .then(() => {
//         router.push('/');
//       })
//       .catch((e) => e)
//       .finally(() => {
//         setIsLoading(false);
//         reset();
//       });
//   };

//   const logInWithGoogleHandler = async () => {
//     setIsLoading(true);
//     const loginPromise = logInWithGoogle();
//     toast
//       .promise(loginPromise, {
//         loading: 'Loading..',
//         success: 'Logged in successfully',
//         error: (e) => handleFirebaseError(e),
//       })
//       .then(() => router.push('/'))
//       .catch((e) => e)
//       .finally(() => setIsLoading(false));
//   };

//   return (
//     <FormProvider {...methods}>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className='h-full w-full p-4 pt-6 text-cwhite'
//       >
//         <div className='mb-10'>
//           <Input id='email' type='email' label='Email' className='rounded-md' />
//           <Input
//             id='password'
//             type='password'
//             label='Password'
//             className='rounded-md'
//           />
//         </div>
//         <Button type='submit' className='mb-4 w-full py-3' disabled={isLoading}>
//           <p className='w-full text-center'>Login</p>
//         </Button>
//         <Button
//           type='button'
//           className='mb-4 w-full py-3'
//           onClick={logInWithGoogleHandler}
//           disabled={isLoading}
//         >
//           <p className='w-full text-center'>Login with Google</p>
//         </Button>
//         <p className='text-center text-cwhite'>
//           Don't have an account?
//           <span className='ml-1'>
//             <Link
//               href='/register'
//               className='animated-underline font-medium hover:text-cred'
//             >
//               Register
//             </Link>
//           </span>
//         </p>
//       </form>
//     </FormProvider>
//   );
// }
