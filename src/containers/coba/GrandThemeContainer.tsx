'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import sevenYearsRocket from '~/images/about/7-years.png';
import fiftyYearsRocket from '~/images/about/50-years.png';
import todayRocket from '~/images/about/today.png';
import tomorrowRocket from '~/images/about/tomorrow.png';

interface rckt {
  today: boolean;
  tomorrow: boolean;
  sevenYears: boolean;
  fiftyYears: boolean;
}
export default function GrandThemeContainer() {
  const [rocket, setRocket] = React.useState<rckt>({
    today: true,
    tomorrow: false,
    sevenYears: false,
    fiftyYears: false,
  });
  return (
    <section className='relative mt-16 rounded-[10rem] bg-gradient-to-r from-cblack via-cblue to-cwhite'>
      <div className='noisy h-full w-full rounded-[10rem] px-4 py-16 sm:py-20 sm:px-10'>
        <div className='flex h-full w-full flex-col'>
          <div className=' mb-4 flex w-full p-1 md:mx-10 xl:mx-16'>
            <a className='mx-auto font-baron text-2xl text-cwhite drop-shadow-md sm:text-3xl md:mx-0 md:text-4xl lg:text-[2.75rem] xl:text-[3.1rem] 2xl:text-[3.8rem]'>
              GRANð TНeМE
            </a>
          </div>

          <div className='flex h-full w-full flex-col md:flex-row'>
            <motion.div
              initial={{
                opacity: 0,
                y: 300,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className='relative m-2 mx-auto w-[40%] min-w-[130px] max-w-[250px] drop-shadow-lg sm:sticky sm:top-4 md:m-5 md:ml-10 md:h-full md:w-[250%] md:max-w-[300px] lg:m-5 lg:w-[280%] lg:max-w-[320px] xl:mt-16 xl:ml-9 xl:w-[300%] xl:max-w-[365px] 2xl:ml-16 2xl:w-[350%] 2xl:max-w-[400px]'
            >
              <Image
                src={todayRocket}
                className={`${rocket.today ? '' : 'hidden'}`}
                alt='Background'
                placeholder='blur'
                style={{ objectFit: 'cover' }}
              />
              <Image
                src={tomorrowRocket}
                className={`${rocket.tomorrow ? '' : 'hidden'}`}
                alt='Background'
                placeholder='blur'
                style={{ objectFit: 'cover' }}
              />
              <Image
                src={sevenYearsRocket}
                className={`${rocket.sevenYears ? '' : 'hidden'}`}
                alt='Background'
                placeholder='blur'
                style={{ objectFit: 'cover' }}
              />
              <Image
                src={fiftyYearsRocket}
                className={`${rocket.fiftyYears ? '' : 'hidden'}`}
                alt='Background'
                placeholder='blur'
                style={{ objectFit: 'cover' }}
              />
            </motion.div>

            <div className='flex h-full flex-col gap-4 px-2 pt-3 md:gap-4 md:px-4 md:pr-6 lg:gap-8 lg:px-12 lg:pt-4 xl:gap-9 xl:px-16 xl:pt-8 xl:pr-20 2xl:px-28 2xl:pt-10'>
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
                className='rounded-[3rem] bg-cwhite/50 py-7 px-9 shadow-lg'
              >
                <h1 className='mx-auto mb-5 text-center text-4xl font-bold text-cred'>
                  BEYOND TODAY
                </h1>
                <div className='space-y-2 '>
                  <p className='text-primary text-center font-semibold'>
                    "Uncertainty of the Unknown" shows the possibility that
                    might come, either an improvement or decline.
                  </p>
                  <p className='text-primary text-center font-medium'>
                    It represents diverse thoughts and brings a wide range of
                    topics about politics, art, technology, and self-related
                    topics. We imagined this as a rocket traveling in space ,
                    each representing different sub-themes
                  </p>
                </div>
              </motion.div>

              <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 60,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'spring',
                    },
                  }}
                  whileHover={{
                    scale: 1.2,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  className='col-span-1 cursor-pointer rounded-[3rem] bg-cwhite/50 py-7 px-9 shadow-lg transition-colors hover:bg-cwhite lg:px-3 '
                  onMouseEnter={() =>
                    setRocket({
                      today: false,
                      tomorrow: true,
                      sevenYears: false,
                      fiftyYears: false,
                    })
                  }
                  onMouseLeave={() =>
                    setRocket({
                      today: true,
                      tomorrow: false,
                      sevenYears: false,
                      fiftyYears: false,
                    })
                  }
                >
                  <p className='mb-4 text-center text-3xl font-bold text-cred'>
                    Tomorrow
                  </p>
                  <p className='text-justify'>
                    To seek tomorrow, one must overcome its past traumas. The
                    combustion of the rocket is the{' '}
                    <span className='font-bold'> art of letting go </span>
                    and <span className='font-bold'>embracing the past</span>,
                    in order to
                    <span className='font-bold'>
                      {' '}
                      move forward into the future.
                    </span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 60,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'spring',
                      delay: 0.3,
                    },
                  }}
                  whileHover={{
                    scale: 1.2,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  className='transition-color col-span-1 cursor-pointer rounded-[3rem] bg-cwhite/50 py-7 px-9 shadow-lg hover:bg-cwhite lg:px-3'
                  onMouseEnter={() =>
                    setRocket({
                      today: false,
                      tomorrow: false,
                      sevenYears: true,
                      fiftyYears: false,
                    })
                  }
                  onMouseLeave={() =>
                    setRocket({
                      today: true,
                      tomorrow: false,
                      sevenYears: false,
                      fiftyYears: false,
                    })
                  }
                >
                  <p className='mb-4 text-center text-3xl font-bold text-cred'>
                    7 Years Later
                  </p>
                  <p className=' text-justify'>
                    A rocket, launching seven years later, represents the{' '}
                    <span className='font-bold'>drive and spirit of youth</span>{' '}
                    equip themselves with necessary skills and knowledge to face
                    the upcoming decade. It symbolizes a vehicle that will take
                    them to{' '}
                    <span className='font-bold'>
                      {' '}
                      new opportunities and experiences
                    </span>
                    , and it encourages them to{' '}
                    <span className='font-bold'>embrace the unknown.</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 60,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'spring',
                      delay: 0.6,
                    },
                  }}
                  whileHover={{
                    scale: 1.2,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  className='transition-color col-span-1 cursor-pointer rounded-[3rem] bg-cwhite/50 py-7 px-9 shadow-lg hover:bg-cwhite lg:px-3'
                  onMouseEnter={() =>
                    setRocket({
                      today: false,
                      tomorrow: false,
                      sevenYears: false,
                      fiftyYears: true,
                    })
                  }
                  onMouseLeave={() =>
                    setRocket({
                      today: true,
                      tomorrow: false,
                      sevenYears: false,
                      fiftyYears: false,
                    })
                  }
                >
                  <p className='mb-4 text-center text-3xl font-bold text-cred'>
                    50 Years later
                  </p>
                  <p className='text-justify'>
                    The outer space represents the idea of being{' '}
                    <span className='font-bold'>open</span> to a vast world of
                    possibilities and encourages being aware of the invisible
                    things. A symbol for the{' '}
                    <span className='font-bold'>unknown future</span> and it
                    encourages to{' '}
                    <span className='font-bold'>imagine the unimaginable</span>{' '}
                    and consider the{' '}
                    <span className='font-bold'>endless possibilities.</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
