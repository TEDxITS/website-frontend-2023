import Image from 'next/image';

import LastYearJourneySection from '@/containers/about/components/LastYearJourneySection';
import StarterKitSection from '@/containers/about/components/StarterKitSection';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import Cube1 from '~/images/about/starter-kit/cube-1.png';
import Cube2 from '~/images/about/starter-kit/cube-2.png';

export default function StarterKitContainer() {
  return (
    <RandomStarfieldContainer
      className='h-[400vh] bg-black min-[350px]:h-[350vh] min-[380px]:h-[325vh] min-[470px]:h-[310vh] min-[540px]:h-[280vh] sm:h-[330vh] min-[725px]:h-[325vh] md:h-[300vh] min-[840px]:h-[270vh] min-[920px]:h-[250vh] lg:h-[235vh] min-[1190px]:h-[210vh]'
      zAxis={2}
    >
      <Image
        src={Cube1}
        alt='cube 1'
        className='absolute right-2 -top-[40vw] z-0'
      />
      <Image
        src={Cube2}
        alt='cube 2'
        className='absolute top-[calc(20%+20vw)] -right-[40vw] z-0 md:top-[calc(10%+3vw)]'
      />
      <div className='absolute z-10 h-full w-full bg-transparent-stars bg-cover'>
        <div className='absolute z-20 flex h-full w-full flex-col bg-hue'>
          <StarterKitSection />
          <LastYearJourneySection />
        </div>
      </div>
    </RandomStarfieldContainer>
  );
}
