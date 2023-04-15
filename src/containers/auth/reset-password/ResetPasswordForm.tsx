'use client';
import { zodResolver } from '@hookform/resolvers/zod';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';

import api from '@/utils/api';

const registerSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

type ResetPasswordDataType = z.infer<typeof registerSchema>;

const RestartPasswordFormInitialValue: ResetPasswordDataType = {
  password: '',
  confirm: '',
};

const restartPassword = async (password: string, token: string | null) => {
  try {
    const { data } = await api.post(`/auth/reset-password/${token}`, {
      password,
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default function RestartPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams ? searchParams.get('token') : '';

  const router = useRouter();
  const methods = useForm<ResetPasswordDataType>({
    defaultValues: RestartPasswordFormInitialValue,
    mode: 'onTouched',
    resolver: zodResolver(registerSchema),
  });
  const { handleSubmit, reset } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<ResetPasswordDataType> = async (data) => {
    setIsLoading(true);
    // if (token) {
    const registerPromise = restartPassword(data.password, token ?? null);
    toast
      .promise(registerPromise, {
        loading: 'Loading..',
        success: 'Password changed successfully',
        error: (e) => e.response.data.message,
      })
      .then(() => router.push(`/auth/login`))
      .catch((e) => e)
      .finally(() => {
        setIsLoading(false);
        reset();
      });
    // }
  };
  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='h-full w-full p-4 pt-6 text-cwhite'
        >
          <div className='mb-10'>
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
            <p className='w-full text-center'>Change Password</p>
          </Button>
        </form>
      </FormProvider>
    </>
  );
}
