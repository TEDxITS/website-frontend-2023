import { Suspense } from 'react';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import LinkDatabaseContainer from '@/containers/tools/database/LinkDatabaseContainer';

import FullTEDLogo from '@/assets/logo/FullTEDLogo';

// Revalidate on every request (same as getServerSideProps)
export const revalidate = 0;

export default function LinkDatabasePage() {
  return (
    <>
      <div className='absolute z-20 h-screen w-full overflow-y-scroll'>
        <header className='mb-20 flex flex-row-reverse items-center justify-between px-4 sm:mb-0 sm:flex-row sm:px-32 sm:pt-20 sm:pb-5'>
          <FullTEDLogo variant='white' className='h-20 w-20 sm:h-32 sm:w-32' />
          <UnstyledLink href='/tools'>
            <Button>
              &larr;
              <span className='ml-2 hidden sm:block'>
                Back to Link Shortener
              </span>
            </Button>
          </UnstyledLink>
        </header>
        <h1 className='mb-5 text-center font-baron text-cwhite'>
          Link Shortener Database
        </h1>
        <section className='layout'>
          <Suspense
            fallback={
              <p className='py-10 text-center text-lg text-cwhite'>Loading..</p>
            }
          >
            {/* @ts-expect-error Server Component */}
            <LinkDatabaseContainer />
          </Suspense>
        </section>
      </div>
    </>
  );
}
