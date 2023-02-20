import Image from 'next/image';

import Cube1 from '~/images/about/starter-kit/cube-1.png';
import Cube2 from '~/images/about/starter-kit/cube-2.png';
import tedxLogo from '~/images/logo/tedx.png';

export default function StarterKitContainer() {
  return (
    <>
      <div className='layout relative'>
        <Image
          src={Cube1}
          alt='cube 1'
          className='absolute -top-[30vw]'
          placeholder='blur'
        />
        <Image
          src={Cube2}
          alt='cube 2'
          className='absolute top-[calc(20%+20vw)] -right-[40vw] md:top-[calc(10%+3vw)]'
          placeholder='blur'
        />
        <div className='z-10 h-full w-full'>
          <div className='z-20 flex h-full w-full flex-col'>
            <StarterKitSection />
            <LastYearJourneySection />
          </div>
        </div>
      </div>
    </>
  );
}

function StarterKitSection() {
  return (
    <div className='z-10 flex min-h-screen flex-col justify-center py-10 md:py-12'>
      <h2 className='mb-10 text-center font-baron text-4xl text-white sm:mb-24 sm:text-6xl md:text-start'>
        TED AND TEDX STARTER KIT
      </h2>

      <div className='flex flex-col gap-14 md:flex-row'>
        <div className='flex w-full flex-col items-center rounded-3xl bg-gray-100 bg-opacity-20 p-7 shadow-sm backdrop-blur-sm md:w-1/2'>
          <Image
            src={tedxLogo}
            className='w-20 pb-5 pt-2'
            alt='tedx'
            placeholder='blur'
          />
          <p className='text-justify text-xl text-cwhite'>
            TEDx is a grassroots initiative, created in the spirit of TED's
            overall mission to reach and discover "Ideas Worth Spreading" TEDx
            brings the spirit of TED to local communities around the globe
            through TEDx events. These events are organized by passionate
            individuals who seek to uncover new ideas and to share the latest
            research in their local areas that spark conversations in their
            communities.
          </p>
        </div>

        <div className='flex w-full flex-col items-center rounded-3xl bg-gray-100 bg-opacity-20 p-7 shadow-sm backdrop-blur-sm md:w-1/2'>
          <div className='pt-2'>
            <FullTEDLogo variant='text' className='h-6 w-28' />
          </div>
          <p className='text-justify text-xl text-cwhite'>
            TEDx aims to become an experience for individuals to delve into a
            journey of self-awareness by being reflective of one's self to
            discover one's passion and thrive in the respective field in order
            to give impact to others, and ultimately, the whole world
          </p>
        </div>
      </div>
    </div>
  );
}

import FullTEDLogo from '@/assets/logo/FullTEDLogo';

import Circle from '~/images/about/starter-kit/green-circle.png';
import BorderSquare from '~/images/about/starter-kit/rectangle.png';

function LastYearJourneyCard({
  statistics = '',
  explanation = '',
}: {
  statistics: string;
  explanation: string;
}) {
  return (
    <div className='flex w-full flex-col items-end p-2 text-end text-cwhite'>
      <h2 className='text-[42px]'>{statistics}</h2>
      <p>{explanation}</p>
    </div>
  );
}

function LastYearJourneySection() {
  return (
    <div className='z-10 flex min-h-[80vh] flex-col justify-center gap-16'>
      <span className='flex justify-center'>
        <h2 className='text-center font-baron text-4xl text-white sm:text-start sm:text-6xl'>
          LAST YEAR JOURNEY
        </h2>
      </span>

      <div className='flex flex-col items-start gap-14 md:flex-row'>
        <div className='flex h-full w-full flex-col items-start justify-center gap-7 shadow-sm md:w-6/12'>
          <span className='text-l rounded-full bg-gradient-to-r from-cblack via-cgreen to-cblue py-[0.5rem] px-4 text-cwhite'>
            campaign viewer
          </span>
          <div className='flex h-full w-full flex-row md:flex-col lg:flex-row'>
            <div className='flex h-full w-1/6 items-start justify-center md:w-full md:scale-75 md:items-end md:justify-start lg:w-1/6 lg:items-start lg:justify-center'>
              <span className='group peer z-10 flex h-[12vw] w-[12vw] cursor-pointer flex-col items-center justify-center rounded-full  text-cwhite duration-500 hover:scale-[1.5] md:gap-[0.3vw]'>
                <h5 className='text-[1vw] duration-300 group-hover:rounded-lg group-hover:bg-gray-100 group-hover:bg-opacity-20 group-hover:p-[1vw] group-hover:text-[3vw] group-hover:shadow-lg'>
                  2021
                </h5>
                <h2 className='text-[3vw]'>255</h2>
              </span>
              <span className='absolute z-0 h-[12vw] w-[12vw] cursor-pointer rounded-full bg-gradient-to-br from-cblue to-csky blur-md duration-500 peer-hover:scale-[1.5] md:blur-lg'></span>
            </div>

            <div className='flex h-full w-1/3 items-end justify-center md:w-full md:scale-75 md:items-start md:justify-end lg:w-1/3 lg:items-end lg:justify-center'>
              <span className='group peer z-10 flex h-[18vw] w-[18vw] cursor-pointer flex-col items-center justify-center rounded-full text-cwhite duration-500 hover:scale-[1.3] md:gap-[1vw]'>
                <h5 className='text-[2vw] duration-300 group-hover:rounded-lg group-hover:bg-gray-100 group-hover:bg-opacity-20 group-hover:p-[2vw] group-hover:text-[4vw] group-hover:shadow-lg'>
                  2022
                </h5>
                <h2 className='text-[4vw]'>393</h2>
              </span>
              <span className='absolute z-0 h-[18vw] w-[18vw] cursor-pointer rounded-full bg-gradient-to-br from-cblue to-csky blur-md duration-500 peer-hover:scale-[1.3] md:blur-lg'></span>
            </div>

            <div className='flex h-full w-1/2 justify-center md:w-full md:scale-75 lg:w-1/2'>
              <span className='group peer z-10 flex h-[25vw] w-[25vw] cursor-pointer flex-col items-center justify-center rounded-full text-cwhite duration-500 hover:scale-[1.2] md:gap-[2.5vw]'>
                <h5 className='text-[2.5vw] duration-300 group-hover:rounded-lg group-hover:bg-gray-100 group-hover:bg-opacity-20 group-hover:p-[3vw] group-hover:text-[6vw] group-hover:shadow-lg'>
                  2023
                </h5>
                <h2 className='text-[6vw]'>529</h2>
              </span>
              <span className='absolute z-0 h-[25vw] w-[25vw] cursor-pointer rounded-full bg-gradient-to-br from-cblue to-cwhite blur-md duration-500 peer-hover:scale-[1.2] md:blur-lg'></span>
            </div>
          </div>
        </div>

        <div className='flex w-full flex-col items-end justify-center gap-7 shadow-sm md:w-6/12'>
          <h2 className='flex flex-col gap-5 font-primary text-[52px] font-bold leading-10 text-cred after:rounded-xl after:bg-cwhite after:p-[2px] after:content-[""]'>
            Our Impact
          </h2>
          <div className='grid w-full grid-cols-[repeat(auto-fit,_minmax(11rem,_1fr))] items-center justify-center gap-5 rounded-3xl bg-gray-100 bg-opacity-20 p-7 shadow-lg'>
            <LastYearJourneyCard
              statistics='97.000+'
              explanation='impression for our social media account'
            />
            <LastYearJourneyCard
              statistics='17.000+'
              explanation='online and on-site viewer for videos shared'
            />
            <LastYearJourneyCard
              statistics='430%'
              explanation='increase instagram reach'
            />
            <LastYearJourneyCard
              statistics='270'
              explanation='content posted'
            />
          </div>
        </div>
      </div>

      <div className='flex h-auto w-full flex-col items-center justify-end md:h-[15vh] md:flex-row lg:justify-around'>
        <div className='hidden h-full w-1/3 lg:block'></div>
        <div className='flex w-full scale-[0.7] items-center justify-center md:w-1/3'>
          <Image src={BorderSquare} alt='' />
        </div>
        <div className='flex w-full justify-center object-cover md:w-1/3 md:justify-end'>
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <Image
                key={i}
                src={Circle}
                alt=''
                className='h-full w-1/3 md:h-[7vw] md:w-[8vw]'
              />
            ))}
        </div>
      </div>
    </div>
  );
}
