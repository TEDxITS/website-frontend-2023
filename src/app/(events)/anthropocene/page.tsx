import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ItemGalleryContainer from '@/containers/anthropocene/ItemGalleryContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

import bgCircularOrnament from '~/images/call-for-local-speaker/bg-ornament-3.png';

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
      <main className='flex min-h-screen flex-col items-center overflow-x-hidden'>
        <div className='relative mt-10 mb-10 flex w-full items-center justify-center sm:mt-20 sm:w-3/4'>
          <Image
            src={bgCircularOrnament}
            alt='ornament'
            className='absolute -top-16 -right-16 h-32 w-32 animate-spin sm:h-56 sm:w-56'
            placeholder='blur'
          />
          <Image
            src={bgCircularOrnament}
            alt='ornament'
            className='absolute -left-16 top-4 h-36 w-36 animate-spin sm:h-60 sm:w-60'
            placeholder='blur'
          />
          <Image
            src={bgCircularOrnament}
            alt='ornament'
            className='absolute inset-x-1/3 -top-10 hidden h-40 w-40 animate-spin-reverse md:block'
            placeholder='blur'
          />
          <Image
            src={bgCircularOrnament}
            alt='ornament'
            className='absolute inset-x-1/2 -bottom-10 h-32 w-32 animate-spin-reverse sm:-bottom-16 sm:h-40 sm:w-40'
            placeholder='blur'
          />
          <h1 className='relative bg-white bg-textured-paper py-10 px-4 text-center font-quaker text-3xl shadow-xl sm:px-20 sm:text-6xl'>
            ANTHROPOCENE
          </h1>
        </div>
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
