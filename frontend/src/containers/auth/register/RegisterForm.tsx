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

import api from '@/utils/api';

const registerSchema = z
  .object({
    name: z.string().nonempty({ message: 'Name is required' }),
    email: z.string().email({ message: 'The provided email is not valid' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

type RegisterDataType = z.infer<typeof registerSchema>;

const registerFormInitialValue: RegisterDataType = {
  name: '',
  email: '',
  password: '',
  confirm: '',
};

const registerUser = async (name: string, email: string, password: string) => {
  try {
    const { data } = await api.post('/auth/register', {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default function RegisterForm() {
  const router = useRouter();
  const methods = useForm<RegisterDataType>({
    defaultValues: registerFormInitialValue,
    mode: 'onTouched',
    resolver: zodResolver(registerSchema),
  });
  const { handleSubmit, reset } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<RegisterDataType> = async (data) => {
    setIsLoading(true);
    const registerPromise = registerUser(data.name, data.email, data.password);
    toast
      .promise(registerPromise, {
        loading: 'Loading..',
        success:
          'Account created successfully. Please check your email to verify your account',
        error: (e) => e.response.data.message,
      })
      .then(() => {
        router.push('/auth/login');
      })
      .catch((e) => e)
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='h-full w-full p-4 pt-6 text-cwhite'
        >
          <div className='mb-10'>
            <Input id='name' type='name' label='Name' className='rounded-md' />
            <Input
              id='email'
              type='email'
              label='Email'
              className='rounded-md'
            />
            <Input
              id='password'
              type='password'
              label='Password'
              className='rounded-md'
            />
            <Input
              id='confirm'
              type='password'
              label='Confirm Password'
              className='rounded-md'
            />
          </div>

          <Button
            type='submit'
            disabled={isLoading}
            className='mb-4 w-full py-3'
          >
            <p className='w-full text-center'>Register</p>
          </Button>
          <p className='text-center text-cwhite'>
            Already have an account?
            <span className='ml-1'>
              <Link
                href='/auth/login'
                className='animated-underline font-medium hover:text-cred'
              >
                Login
              </Link>
            </span>
          </p>
        </form>
      </FormProvider>
    </>
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
// import RegistrationClosedModal from '@/containers/auth/register/RegistrationClosedModal';

// import { useFirebaseAuthContext } from '@/context/FirebaseAuthContext';
// import { handleFirebaseError } from '@/utils/firebase/shared';

// const registerSchema = z
//   .object({
//     email: z.string().email({ message: 'The provided email is not valid' }),
//     password: z
//       .string()
//       .min(6, { message: 'Password must be at least 6 characters' }),
//     confirm: z.string(),
//   })
//   .refine((data) => data.password === data.confirm, {
//     message: "Passwords don't match",
//     path: ['confirm'],
//   });

// type RegisterDataType = z.infer<typeof registerSchema>;

// const registerFormInitialValue: RegisterDataType = {
//   email: '',
//   password: '',
//   confirm: '',
// };

// export default function RegisterForm() {
//   const router = useRouter();
//   const { signUp } = useFirebaseAuthContext();
//   const methods = useForm<RegisterDataType>({
//     defaultValues: registerFormInitialValue,
//     mode: 'onTouched',
//     resolver: zodResolver(registerSchema),
//   });
//   const { handleSubmit, reset } = methods;
//   const [isLoading, setIsLoading] = React.useState<boolean>(false);
//   const [isRegistrationOpen] = React.useState<boolean>(false);
//   const [isRegistrationClosedModalOpen, setIsRegistrationClosedModalOpen] =
//     React.useState<boolean>(false);

//   const onSubmit: SubmitHandler<RegisterDataType> = async (data) => {
//     if (!isRegistrationOpen) {
//       toast.error('Registration is currently closed');
//       return;
//     }
//     setIsLoading(true);
//     const registerPromise = signUp(data.email, data.password);
//     toast
//       .promise(registerPromise, {
//         loading: 'Loading..',
//         success: 'Account created successfully',
//         error: (e) => handleFirebaseError(e),
//       })
//       .then(() => router.back())
//       .catch((e) => e)
//       .finally(() => {
//         setIsLoading(false);
//         reset();
//       });
//   };

//   React.useEffect(() => {
//     setTimeout(() => {
//       setIsRegistrationClosedModalOpen(true);
//     }, 1000);
//   }, []);

//   return (
//     <>
//       <RegistrationClosedModal
//         isOpen={isRegistrationClosedModalOpen}
//         setIsOpen={setIsRegistrationClosedModalOpen}
//       />
//       <FormProvider {...methods}>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className='h-full w-full p-4 pt-6 text-cwhite'
//         >
//           <div className='mb-10'>
//             <Input
//               id='email'
//               type='email'
//               label='Email'
//               className='rounded-md'
//             />
//             <Input
//               id='password'
//               type='password'
//               label='Password'
//               className='rounded-md'
//             />
//             <Input
//               id='confirm'
//               type='password'
//               label='Confirm Password'
//               className='rounded-md'
//             />
//           </div>

//           <Button
//             type='submit'
//             disabled={isLoading}
//             className='mb-4 w-full py-3'
//           >
//             <p className='w-full text-center'>Register</p>
//           </Button>
//           <p className='text-center text-cwhite'>
//             Already have an account?
//             <span className='ml-1'>
//               <Link
//                 href='/auth/login'
//                 className='animated-underline font-medium hover:text-cred'
//               >
//                 Login
//               </Link>
//             </span>
//           </p>
//         </form>
//       </FormProvider>
//     </>
//   );
// }
