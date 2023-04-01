import type { Metadata } from 'next';
import { Suspense } from 'react';

import AddItemModal from '@/containers/admin/anthropocene/AddItemModal';
import ItemDatabaseContainer from '@/containers/admin/anthropocene/ItemDatabaseContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

// Revalidate on every request (same as getServerSideProps)
export const dynamic = 'force-dynamic';

const metadataObject = generateTemplateMetadata(
  'Gallery Database',
  '',
  '/admin/anthropocene'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function GalleryDashboardPage() {
  return (
    <section className='layout z-20'>
      <div className='mb-5 flex flex-wrap items-center justify-between'>
        <h1 className='font-baron text-cwhite'>Gallery Database</h1>
        <AddItemModal />
      </div>
      <Suspense
        fallback={
          <p className='py-10 text-center text-lg text-cwhite'>Loading..</p>
        }
      >
        {/* @ts-expect-error Server Component */}
        <ItemDatabaseContainer />
      </Suspense>
    </section>
  );
}
