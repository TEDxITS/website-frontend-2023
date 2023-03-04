import type { Metadata } from 'next';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LoginForm from '@/containers/auth/login/LoginForm';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata('Login', '', '/login');
export const metadata: Metadata = {
  ...metadataObject,
};

export default async function LoginPage() {
  return (
    <RandomStarfieldContainer>
      <div className='absolute z-20 h-screen w-full overflow-y-auto'>
        <Header />
        <section className='z-20 flex h-[37rem] flex-col items-center justify-center xl:h-full'>
          <h1 className='mb-6 font-baron text-6xl text-cwhite'>LOGIN</h1>
          <div className='w-11/12 sm:w-1/3'>
            <LoginForm />
          </div>
        </section>
        <NormalFooter className='bg-transparent' />
      </div>
    </RandomStarfieldContainer>
  );
}
