import { Metadata } from 'next';

import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';
import TestContainer from '@/containers/voyagers-test/TestContainer';

import TestProvider from '@/context/TestContext';
import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'What Kind Of Voyager Are You?',
  '',
  '/voyagers-test'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function TestPage() {
  return (
    <TestProvider>
      <RandomStarfieldContainer className='bg-black'>
        <div className='absolute z-20 h-screen w-screen '>
          <TestContainer />
        </div>
      </RandomStarfieldContainer>
    </TestProvider>
  );
}
