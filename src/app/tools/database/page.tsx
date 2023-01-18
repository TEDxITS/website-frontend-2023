import { Suspense } from 'react';

import LinkDatabaseSearchBar from '@/containers/tools/database/LinkDatabaseSearchBar';
import LinkDatabaseTable from '@/containers/tools/database/LinkDatabaseTable';

import FullTEDLogo from '@/assets/logo/FullTEDLogo';

export default function LinkDatabasePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const keyword = searchParams
    ? searchParams.keyword
      ? Array.isArray(searchParams.keyword)
        ? searchParams.keyword[0]
        : searchParams.keyword
      : ''
    : '';
  return (
    <main className='min-h-screen bg-black'>
      <header className='mb-20 flex items-center justify-end px-4 sm:mb-0 sm:justify-between sm:py-16 sm:px-32'>
        <FullTEDLogo variant='white' className='h-20 w-20 sm:h-32 sm:w-32' />
        <LinkDatabaseSearchBar />
      </header>
      <Suspense fallback={<p className='text-cwhite'>Loading..</p>}>
        {/* @ts-expect-error Server Component */}
        <LinkDatabaseTable keyword={keyword} />
      </Suspense>
    </main>
  );
}
