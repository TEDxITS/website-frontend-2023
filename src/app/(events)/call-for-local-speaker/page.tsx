import type { Metadata } from 'next';
import Image from 'next/image';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import CFLSTabs from '@/containers/call-for-local-speaker/CFLSTabs';
import CFLSTitle from '@/containers/call-for-local-speaker/CFLSTitle';

import { generateTemplateMetadata } from '@/utils/metadata';

import bgCircularOrnament from '~/images/call-for-local-speaker/bg-ornament-3.png';

const metadataObject = generateTemplateMetadata(
  'Call For Local Speaker',
  '',
  '/call-for-local-speaker/form'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default async function CFLSPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  return (
    <div className='relative overflow-x-hidden bg-7-years-jpg bg-cover bg-center'>
      <Image
        src={bgCircularOrnament}
        alt='ornament'
        className='absolute bottom-60 -right-32 h-64 w-64 animate-spin'
        placeholder='blur'
      />
      <Image
        src={bgCircularOrnament}
        alt='ornament'
        className='absolute bottom-60 -left-32 h-64 w-64 animate-spin'
        placeholder='blur'
      />
      <Header theme='7-years' />
      <main className='layout flex flex-col items-center justify-center pb-20 pt-16 sm:pb-32'>
        <div className='relative mb-20 w-full sm:mb-28 sm:w-3/4'>
          <Image
            src={bgCircularOrnament}
            alt='ornament'
            className='absolute -top-16 -right-16 h-56 w-56 animate-spin'
            placeholder='blur'
          />
          <Image
            src={bgCircularOrnament}
            alt='ornament'
            className='absolute -left-16 top-4 h-60 w-60 animate-spin'
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
            className='absolute inset-x-1/2 -bottom-16 h-40 w-40 animate-spin-reverse'
            placeholder='blur'
          />
          <CFLSTitle className='absolute bottom-0 w-full translate-y-4 translate-x-2 rotate-[-2deg]' />
          <CFLSTitle />
        </div>
        <CFLSTabs
          initialTabIndex={
            searchParams && searchParams.section ? searchParams.section : 0
          }
        />
      </main>
      <NormalFooter theme='7-years' />
    </div>
  );
}
