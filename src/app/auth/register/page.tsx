import type { Metadata } from 'next';

import RegisterForm from '@/containers/auth/register/RegisterForm';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata('Register', '', '/register');
export const metadata: Metadata = {
  ...metadataObject,
};

export default async function RegisterPage() {
  return (
    <section className='z-20 flex h-[37rem] flex-col items-center justify-center xl:h-full'>
      <h1 className='mb-2 font-baron text-5xl text-cwhite sm:mb-6 sm:text-6xl'>
        REGISTER
      </h1>
      <div className='h-[24rem] w-11/12 sm:w-1/3'>
        <RegisterForm />
      </div>
    </section>
  );
}
