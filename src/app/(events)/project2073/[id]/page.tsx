import { Metadata } from 'next';
import { Suspense } from 'react';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ArtDetail from '@/containers/project2073/ArtDetail';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'PE 3 Gallery',
  '',
  '/project2073'
);

export const metadata: Metadata = {
  ...metadataObject,
};

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <RandomStarfieldContainer>
      <div className='absolute z-20 h-screen w-full overflow-y-auto'>
        <Header />
        <Suspense
          fallback={<p className='py-10 text-center text-lg'>Loading..</p>}
        >
          {/* @ts-expect-error Server Component */}
          <ArtDetail itemId={params.id} />
        </Suspense>
        <NormalFooter className='bg-transparent' />
      </div>
    </RandomStarfieldContainer>
  );
}
