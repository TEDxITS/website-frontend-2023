import type { Metadata } from 'next';

import ResetPasswordForm from '@/containers/auth/reset-password/ResetPasswordForm';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Reset Password',
  '',
  '/reset-password'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default async function ResetPasswordPage() {
  return (
    <section className='z-20 flex h-[37rem] flex-col items-center justify-center xl:h-full'>
      <h1 className='mb-2 font-baron text-5xl text-cwhite sm:mb-6 sm:text-6xl'>
        RESET PASSWORD
      </h1>
      <div className='w-11/12 sm:w-1/3'>
        <ResetPasswordForm />
      </div>
    </section>
  );
}
