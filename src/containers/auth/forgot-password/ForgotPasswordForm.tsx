'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import { Modal } from '@/components/modal/Modal';

import api from '@/utils/api';
import { handleFirebaseError } from '@/utils/firebase/shared';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'The provided email is not valid' }),
});
type ForgotPasswordDataType = z.infer<typeof forgotPasswordSchema>;

const forgotPasswordFormInitialValue: ForgotPasswordDataType = {
  email: '',
};

const forgotPassword = async (email: string) => {
  try {
    const { data } = await api.post('/auth/forget-password', {
      email,
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default function ForgetForm() {
  const methods = useForm<ForgotPasswordDataType>({
    defaultValues: forgotPasswordFormInitialValue,
    mode: 'onTouched',
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { handleSubmit, reset } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSubmit, setIsSubmit] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<ForgotPasswordDataType> = async (data) => {
    setIsLoading(true);
    const forgotPasswordPromise = forgotPassword(data.email);
    toast
      .promise(forgotPasswordPromise, {
        loading: 'Loading..',
        success: 'Sending forgot password request ',
        error: (e) => handleFirebaseError(e),
      })
      .then(() => {
        {
          setIsSubmit(true);
        }
      })
      .catch((e) => e)
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <>
      {isSubmit && (
        <Modal isOpen={isSubmit} setIsOpen={() => setIsSubmit(!isSubmit)}>
          Kindly Check Your Email
        </Modal>
      )}
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='h-full w-full p-4 pt-6 text-cwhite'
        >
          <div className='mb-10'>
            <Input
              id='email'
              type='email'
              label='Email'
              className='rounded-md'
            />
          </div>
          <Button
            type='submit'
            className='mb-4 w-full py-3'
            disabled={isLoading}
          >
            <p className='w-full text-center'>Submit</p>
          </Button>

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
        </form>
      </FormProvider>
    </>
  );
}
