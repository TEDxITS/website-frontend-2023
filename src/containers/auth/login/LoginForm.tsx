import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';

import { useFirebaseAuthContext } from '@/context/FirebaseAuthContext';

const loginSchema = z.object({
  email: z.string().email({ message: 'The provided email is not valid' }),
  password: z
    .string()
    .min(8, { message: 'Password must contain at least 8 character(s)' }),
});
type LoginDataType = z.infer<typeof loginSchema>;

const loginFormInitialValue: LoginDataType = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const { logIn } = useFirebaseAuthContext();
  const methods = useForm<LoginDataType>({
    defaultValues: loginFormInitialValue,
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginSchema),
  });
  const { handleSubmit } = methods;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
    setIsLoading(true);
    const loginPromise = logIn(data.email, data.password);
    toast
      .promise(loginPromise, {
        loading: 'Loading..',
        success: 'Short link generated successfully',
        error: (e) => e.message,
      })
      .then(() => undefined)
      .catch((e) => e)
      .finally(() => setIsLoading(false));
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full space-y-10 text-cwhite sm:w-1/2'
        noValidate
      >
        <Input
          id='url'
          type='text'
          label={<p className='font-semibold'>Original URL:</p>}
        />
        <div className='flex items-center gap-x-1'>
          <p>tedxits.org/links/</p>
          <Input
            id='short_url'
            label={<p className='sr-only'>Short URL:</p>}
            type='text'
          />
        </div>
        <div className='flex justify-end'>
          <Button type='submit' disabled={isLoading}>
            Generate
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
