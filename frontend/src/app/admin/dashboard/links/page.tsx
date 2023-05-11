import type { Metadata } from 'next';
import { Suspense } from 'react';

import LinkDatabaseContainer from '@/containers/admin/links/LinkDatabaseContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

// Revalidate on every request (same as getServerSideProps)
export const dynamic = 'force-dynamic';

const metadataObject = generateTemplateMetadata(
  'Link Shortener Database',
  '',
  '/admin/links'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function LinkDashboardPage() {
  return (
    <section className='layout z-20'>
      <h1 className='mb-5 font-baron text-cwhite'>Link Shortener Database</h1>

      <Suspense
        fallback={
          <p className='py-10 text-center text-lg text-cwhite'>Loading..</p>
        }
      >
        {/* @ts-expect-error Server Component */}
        <LinkDatabaseContainer />
      </Suspense>
    </section>
  );
}
