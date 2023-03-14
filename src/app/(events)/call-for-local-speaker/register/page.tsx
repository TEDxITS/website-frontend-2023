import type { Metadata } from 'next';

import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import CFLSForm from '@/containers/call-for-local-speaker/CFLSForm';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Call For Local Speaker Registration Form',
  '',
  '/call-for-local-speaker/form'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default async function CFLSFormPage() {
  return (
    <RandomStarfieldContainer>
      <div className='absolute z-20 h-screen w-full overflow-y-auto'>
        <Header />
        <section className='3xl:h-screen z-20 flex h-fit flex-col items-center justify-center py-20'>
          <h1 className='mb-2 text-center font-baron text-5xl text-cwhite sm:mb-6 sm:text-6xl'>
            CALL FOR <br /> LOCAL SPEAKER
          </h1>
          <div className='layout'>
            <CFLSForm />
          </div>
        </section>
        <NormalFooter className='bg-transparent' />
      </div>
    </RandomStarfieldContainer>
  );
}
