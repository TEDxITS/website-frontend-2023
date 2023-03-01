import type { Metadata } from 'next';

import Button from '@/components/button/Button';
import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import UnstyledLink from '@/components/link/UnstyledLink';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata('Dashboard', '', '/dashboard');
export const metadata: Metadata = {
  ...metadataObject,
};

export default function DashboardPage() {
  return (
    <RandomStarfieldContainer>
      <div className='absolute z-20 h-screen w-screen overflow-y-auto'>
        <Header />
        <section className='z-20 flex h-[40rem] items-center justify-center'>
          <div className='noisy flex h-[24rem] w-[20rem] flex-col items-center justify-center rounded-md border-[0.75rem] border-cgray bg-black'>
            <h1 className='font-baron text-cwhite'>Dashboard</h1>
            <div className='flex'></div>
            <UnstyledLink href='/login'>
              <Button>Back to login page</Button>
            </UnstyledLink>
            <UnstyledLink href='/tools'>
              <Button>Back to link shortener</Button>
            </UnstyledLink>
            <UnstyledLink href='/tools/database'>
              <Button>Back to database</Button>
            </UnstyledLink>
          </div>
        </section>
        <NormalFooter className='bg-transparent' />
      </div>
    </RandomStarfieldContainer>
  );
}
