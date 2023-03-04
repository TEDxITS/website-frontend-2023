import type { Metadata } from 'next';
import { Suspense } from 'react';

import LinkDatabaseContainer from '@/containers/tools/database/LinkDatabaseContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

// Revalidate on every request (same as getServerSideProps)
export const dynamic = 'force-dynamic';

const metadataObject = generateTemplateMetadata('Dashboard', '', '/dashboard');
export const metadata: Metadata = {
  ...metadataObject,
};

export default function DashboardPage() {
  return (
    <section className='z-20 w-full'>
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
    </section>
  );
}
