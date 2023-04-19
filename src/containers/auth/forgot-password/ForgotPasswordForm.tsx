'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import { Modal } from '@/components/modal/Modal';

import api from '@/utils/api';

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
  const router = useRouter();
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
        success: 'Email sent successfully',
        error: (e) => e.response.data.message,
      })
      .then(() => {
        setIsSubmit(true);
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
        <Modal
          isOpen={isSubmit}
          setIsOpen={setIsSubmit}
          className='noisy border-[10px] border-cgray bg-black'
        >
          <div className='z-20 flex flex-col items-center justify-center'>
            <h1 className='text-center font-baron text-xl text-cwhite sm:text-4xl'>
              Thank You
            </h1>
            <p className='mt-4 mb-5 text-center text-base font-medium text-cwhite sm:text-lg'>
              We have sent you an email with a link to reset your password.
              Please check your email inbox.
            </p>
            <Button
              variant='primary'
              className='px-9 text-base xs:text-xl'
              onClick={() => router.push('/auth/login')}
            >
              Back
            </Button>
          </div>
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
        </form>
      </FormProvider>
    </>
  );
}
