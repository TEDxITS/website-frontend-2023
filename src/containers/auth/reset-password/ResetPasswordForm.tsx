'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';

import api from '@/utils/api';

const resetPasswordSchema = z
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

type ResetPasswordDataType = z.infer<typeof resetPasswordSchema>;

const resetPasswordFormInitialValue: ResetPasswordDataType = {
  password: '',
  confirm: '',
};

const resetPassword = async (requestData: ResetPasswordDataType) => {
  try {
    const { data } = await api.post('/api/auth/reset-password', requestData);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default function ResetPasswordForm() {
  const router = useRouter();
  const methods = useForm<ResetPasswordDataType>({
    defaultValues: resetPasswordFormInitialValue,
    mode: 'onTouched',
    resolver: zodResolver(resetPasswordSchema),
  });
  const { handleSubmit, reset } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<ResetPasswordDataType> = async (data) => {
    setIsLoading(true);
    const resetPasswordPromise = resetPassword(data);
    toast
      .promise(resetPasswordPromise, {
        loading: 'Loading..',
        success: 'Password reset successfully',
        error: (e) => e.message,
      })
      .then(() => router.push(`/auth/login`))
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
            {' '}
            <Input
              id='token'
              type='password'
              label='New Password'
              className='rounded-md'
            />
            <Input
              id='password'
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
            <p className='w-full text-center'>Submit</p>
          </Button>
        </form>
      </FormProvider>
    </>
  );
}
