import Image from 'next/image';

import BlurCircle from '@/containers/about/components/BlurCircle';
import LastYearJourneyCard from '@/containers/about/components/LastYearJourneyCard';

import Circle from '~/images/about/starter-kit/green-circle.png';
import BorderSquare from '~/images/about/starter-kit/rectangle.png';

export default function LastYearJourneySection() {
  return (
    <div className='z-10 flex min-h-[80vh] flex-col justify-center gap-16 px-14 sm:px-28'>
      <span className='flex justify-center'>
        <h2 className='font-baron text-4xl text-white sm:text-6xl'>
          LAST YEAR JOURNEY
        </h2>
      </span>

      <div className='flex flex-col items-start gap-14 md:flex-row'>
        <div className='flex h-full w-full flex-col items-start justify-center gap-7 shadow-sm md:w-7/12'>
          <span className='text-l rounded-full bg-gradient-to-r from-cblack via-cgreen to-cblue py-[0.5rem] px-4 text-cwhite'>
            campaign viewer
          </span>
          <div className='flex h-full w-full flex-row md:flex-col lg:flex-row'>
            <div className='flex h-full w-1/6 items-start justify-center md:w-full md:items-end md:justify-start lg:w-1/6 lg:items-start lg:justify-center'>
              <BlurCircle
                h='8vw'
                w='8vw'
                textSize='1.5vw'
                colorFrom='cblack'
                colorTo='cblue'
                blurSize=''
                scalingSize={1.5}
                angka={255}
              />
            </div>
            <div className='flex h-full w-1/3 items-end justify-center md:w-full md:items-start md:justify-end lg:w-1/3 lg:items-end lg:justify-center'>
              <BlurCircle
                h='11vw'
                w='11vw'
                textSize='2.5vw'
                colorFrom='cblue'
                colorTo='csky'
                blurSize='-md'
                scalingSize={1.3}
                angka={393}
              />
            </div>
            <div className='flex h-full w-1/2 justify-center md:w-full lg:w-1/2'>
              <BlurCircle
                h='20vw'
                w='20vw'
                textSize='4vw'
                colorFrom='cblue'
                colorTo='cwhite'
                blurSize='-md'
                scalingSize={1.2}
                angka={529}
              />
            </div>
          </div>
        </div>

        <div className='flex w-full flex-col items-end justify-center gap-7 shadow-sm md:w-5/12'>
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
