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

import { useFirebaseAuthContext } from '@/context/FirebaseAuthContext';
import { handleFirebaseError } from '@/utils/firebase/shared';

const registerSchema = z
  .object({
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
  email: '',
  password: '',
  confirm: '',
};

export default function RegisterForm() {
  const router = useRouter();
  const { signUp } = useFirebaseAuthContext();
  const methods = useForm<RegisterDataType>({
    defaultValues: registerFormInitialValue,
    mode: 'onTouched',
    resolver: zodResolver(registerSchema),
  });
  const { handleSubmit, reset } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<RegisterDataType> = async (data) => {
    setIsLoading(true);
    const registerPromise = signUp(data.email, data.password);
    toast
      .promise(registerPromise, {
        loading: 'Loading..',
        success: 'Account created successfully',
        error: (e) => handleFirebaseError(e),
      })
      .then(() => router.push('/'))
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
          <Input
            id='confirm'
            type='password'
            label='Confirm Password'
            className='rounded-md'
          />
        </div>

        <Button type='submit' className='mb-4 w-full py-3' disabled={isLoading}>
          <p className='w-full text-center'>Register</p>
        </Button>
        <p className='text-center text-cwhite'>
          Already have an account?
          <span className='ml-1'>
            <Link
              href='/login'
              className='animated-underline font-medium hover:text-cred'
            >
              Login
            </Link>
          </span>
        </p>
      </form>
    </FormProvider>
  );
}
