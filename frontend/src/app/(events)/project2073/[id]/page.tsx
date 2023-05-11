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
    <div>
      <Header theme='50-years' />
      <div className='overflow-hidden'>
        <RandomStarfieldContainer className='relative h-screen text-white'>
          <div className='absolute z-20 h-full w-full bg-transparent-stars' />
          <Suspense
            fallback={<p className='py-10 text-center text-lg'>Loading..</p>}
          >
            {/* @ts-expect-error Server Component */}
            <ArtDetail itemId={params.id} />
          </Suspense>
        </RandomStarfieldContainer>

        <div className='w-screen bg-stars py-16' />
        <NormalFooter theme='50-years' />
      </div>
    </div>
  );
}
