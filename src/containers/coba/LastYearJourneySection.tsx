'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

// TODO: make animation reusable
export default function LastYearJourneySection() {
  return (
    <div className='layout z-10 flex flex-col justify-center gap-x-16 gap-y-8 pt-12 pb-32'>
      <span className='flex justify-center'>
        <h2 className='text-center font-baron text-4xl text-white sm:text-start sm:text-6xl'>
          LAST YEAR'S JOURNEY
        </h2>
      </span>

      <div className='flex flex-col items-start gap-14 md:flex-row'>
        <div className='flex h-full w-full flex-col items-start justify-center gap-7 shadow-sm md:w-6/12'>
          <span className='text-l rounded-full bg-gradient-to-r from-cblack via-cgreen to-cblue py-[0.5rem] px-4 text-cwhite'>
            Campaign Views
          </span>
          <div className='flex h-full w-full flex-row md:flex-col lg:flex-row'>
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: 'easeInOut',
                },
              }}
              className='flex h-full w-1/6 items-start justify-center md:w-full md:scale-75 md:items-end md:justify-start lg:w-1/6 lg:items-start lg:justify-center'
            >
              <span className='group peer z-10 flex h-[12vw] w-[12vw] cursor-pointer flex-col items-center justify-center rounded-full  text-cwhite duration-500 hover:scale-[1.5] md:gap-[0.3vw]'>
                <h5 className='text-[1vw] duration-300 group-hover:rounded-lg group-hover:bg-gray-100 group-hover:bg-opacity-20 group-hover:p-[1vw] group-hover:text-[3vw] group-hover:shadow-lg'>
                  2021
                </h5>
                <h2 className='text-[3vw]'>255+</h2>
              </span>
              <span className='absolute z-0 h-[12vw] w-[12vw] cursor-pointer rounded-full bg-gradient-to-br from-cblue to-csky blur-md duration-500 peer-hover:scale-[1.5] md:blur-lg'></span>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: 0.1,
                },
              }}
              className='flex h-full w-1/3 items-end justify-center md:w-full md:scale-75 md:items-start md:justify-end lg:w-1/3 lg:items-end lg:justify-center'
            >
              <span className='group peer z-10 flex h-[18vw] w-[18vw] cursor-pointer flex-col items-center justify-center rounded-full text-cwhite duration-500 hover:scale-[1.3] md:gap-[1vw]'>
                <h5 className='text-[2vw] duration-300 group-hover:rounded-lg group-hover:bg-gray-100 group-hover:bg-opacity-20 group-hover:p-[2vw] group-hover:text-[4vw] group-hover:shadow-lg'>
                  2022
                </h5>
                <h2 className='text-[4vw]'>390+</h2>
              </span>
              <span className='absolute z-0 h-[18vw] w-[18vw] cursor-pointer rounded-full bg-gradient-to-br from-cblue to-csky blur-md duration-500 peer-hover:scale-[1.3] md:blur-lg'></span>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: 0.2,
                },
              }}
              className='flex h-full w-1/2 justify-center md:w-full md:scale-75 lg:w-1/2'
            >
              <span className='group peer z-10 flex h-[25vw] w-[25vw] cursor-pointer flex-col items-center justify-center rounded-full text-cwhite duration-500 hover:scale-[1.2] md:gap-[2.5vw]'>
                <h5 className='text-[2.5vw] duration-300 group-hover:rounded-lg group-hover:bg-gray-100 group-hover:bg-opacity-20 group-hover:p-[3vw] group-hover:text-[6vw] group-hover:shadow-lg'>
                  2023
                </h5>
                <h2 className='text-[6vw]'>530+</h2>
              </span>
              <span className='absolute z-0 h-[25vw] w-[25vw] cursor-pointer rounded-full bg-gradient-to-br from-cblue to-cwhite blur-md duration-500 peer-hover:scale-[1.2] md:blur-lg'></span>
            </motion.div>
          </div>
        </div>

        <div className='flex w-full flex-col items-end justify-center gap-7 shadow-sm md:w-6/12'>
          <h2 className='flex flex-col gap-5 font-primary text-[52px] font-bold leading-10 text-cred after:rounded-xl after:bg-cwhite after:p-[2px] after:content-[""]'>
            Our Impact
          </h2>
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.5,
              },
            }}
            className='grid w-full grid-cols-[repeat(auto-fit,_minmax(11rem,_1fr))] items-center justify-center gap-5 rounded-3xl bg-gray-100 bg-opacity-20 p-7 shadow-lg'
          >
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
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.6,
          },
        }}
        className='flex h-auto w-full flex-col items-center justify-end md:flex-row lg:justify-around'
      >
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
      </motion.div>
    </div>
  );
}
