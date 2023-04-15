import type { Metadata } from 'next';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LoginForm from '@/containers/auth/login/LoginForm';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Admin Login',
  '',
  '/admin/login'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default async function AdminLoginPage() {
  return (
    <div className='absolute z-20 h-screen w-full overflow-y-auto'>
      <Header />
      <section className='z-20 flex h-[37rem] flex-col items-center justify-center xl:h-full'>
        <h1 className='mb-2 text-center font-baron text-4xl text-cwhite sm:mb-6 sm:text-6xl'>
          ADMIN LOGIN
        </h1>
        <div className='w-11/12 sm:w-1/3'>
          <LoginForm isAdmin />
        </div>
      </section>
      <NormalFooter className='bg-transparent' />
    </div>
  );
}
