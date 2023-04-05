import type { Metadata } from 'next';
import { Suspense } from 'react';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ItemGalleryContainer from '@/containers/anthropocene/ItemGalleryContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Cities and Anthropocene',
  '',
  '/anthropocene'
);
export const metadata: Metadata = {
  ...metadataObject,
};

// Revalidate on every request (same as getServerSideProps)
export const dynamic = 'force-dynamic';

export default async function AnthropocenePage() {
  return (
    <div
      className='bg-7-years-repeat'
      style={{
        backgroundSize: '100%',
        backgroundRepeat: 'repeat-y',
      }}
    >
      <Header theme='7-years' />
      <main className='min-h-screen'>
        <Suspense
          fallback={<p className='py-10 text-center text-lg'>Loading..</p>}
        >
          {/* @ts-expect-error Server Component */}
          <ItemGalleryContainer />
        </Suspense>
      </main>
      <NormalFooter theme='7-years' />
    </div>
  );
}