import DefaultHead from '@/components/utils/DefaultHead';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';
import TestContainer from '@/containers/voyagers-test/TestContainer';

import TestProvider from '@/context/TestContext';

export default function TestPage() {
  return (
    <>
      <DefaultHead
        templateTitle='What Kind Of Voyager Are You?'
        isUsingAppDir={false}
      />
      <TestProvider>
        <RandomStarfieldContainer className='bg-black'>
          <div className='absolute z-20 h-screen w-screen '>
            <TestContainer />
          </div>
        </RandomStarfieldContainer>
      </TestProvider>
    </>
  );
}
