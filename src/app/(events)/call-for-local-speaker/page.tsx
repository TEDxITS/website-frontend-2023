import type { Metadata } from 'next';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import CFLSTabs from '@/containers/call-for-local-speaker/CFLSTabs';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Call For Local Speaker',
  '',
  '/call-for-local-speaker/form'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default async function CFLSPage() {
  return (
    <>
      <Header />
      <main className='layout flex flex-col justify-center gap-x-4 py-20'>
        <h1 className='mb-8 text-center'>Are you the one we're looking for?</h1>
        <CFLSTabs />
      </main>
      <NormalFooter />
    </>
  );
}
