'use client';
import Image from 'next/image';
import { useState } from 'react';

import sevenYearsRocket from '~/images/about/7-years.png';
import fiftyYearsRocket from '~/images/about/50-years.png';
import grandThemeBg from '~/images/about/grand-theme-section.png';
import grandThemeMobileBg from '~/images/about/grand-theme-section-mobile.png';
import todayRocket from '~/images/about/today.png';
import tomorrowRocket from '~/images/about/tomorrow.png';

export default function GrandThemeContainer() {
  interface rckt {
    today: boolean;
    tomorrow: boolean;
    sevenYears: boolean;
    fiftyYears: boolean;
  }

  const [rocket, setRocket] = useState<rckt>({
    today: true,
    tomorrow: false,
    sevenYears: false,
    fiftyYears: false,
  });

  return (
    <div>
      <section className='relative z-20 flex justify-center overflow-x-clip bg-black'>
        <Image
          src={grandThemeBg}
          className='hidden w-full md:block xl:max-w-[1560px]'
          alt='Background'
          placeholder='blur'
          style={{ objectFit: 'cover' }}
        />
        <Image
          src={grandThemeMobileBg}
          className='md:hidden'
          alt='Background'
          placeholder='blur'
          style={{ objectFit: 'cover' }}
        />

        <div className='absolute flex h-full w-full flex-col overflow-hidden py-4 md:pt-7 lg:pt-10 lg:pl-5 xl:max-w-[1560px] xl:px-10 xl:pt-20'>
          <div className=' flex w-full p-1 md:mx-10 xl:mx-16'>
            <a className='mx-auto font-baron text-2xl text-cwhite drop-shadow-md sm:text-3xl md:mx-0 md:text-4xl lg:text-[2.75rem] xl:text-[3.1rem] 2xl:text-[3.8rem]'>
              GRANð TНeМE
            </a>
          </div>

          <div className='flex h-full w-full flex-col md:flex-row'>
            <div className='relative m-2 mx-auto w-[40%] min-w-[130px] max-w-[250px] drop-shadow-lg md:m-5 md:ml-10 md:w-[250%] md:max-w-[300px] lg:m-5 lg:w-[280%] lg:max-w-[320px] xl:mt-16 xl:ml-9 xl:h-full xl:w-[300%] xl:max-w-[365px] 2xl:ml-16 2xl:w-[350%] 2xl:max-w-[400px]'>
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
            </div>

            <div className='flex h-full flex-col gap-4 px-2 pt-3 md:gap-4 md:px-4 md:pr-6 lg:gap-8 lg:px-12 lg:pt-4 xl:gap-9 xl:px-16 xl:pt-8 xl:pr-20 2xl:px-28 2xl:pt-10'>
              <div
                className='2xl:rounded[2.8rem] rounded-[1.7rem] bg-cwhite px-4 pt-1 text-center
              opacity-60 drop-shadow-xl min-[320px]:h-28 min-[350px]:h-32 min-[415px]:h-[8.5rem] min-[415px]:h-36 min-[415px]:py-3 min-[550px]:h-[9.5rem]
              min-[600px]:h-36 min-[650px]:h-[9rem] md:h-[10rem] md:py-0 md:pt-1 lg:px-2 lg:pb-5 lg:pt-[13px] xl:h-[11rem] xl:rounded-[2.6rem] xl:pt-[16px] 2xl:pt-[20px]'
              >
                <p className='mx-auto text-[19px] font-bold leading-relaxed text-cred min-[550px]:text-[22px] md:leading-loose min-[900px]:text-[23px] lg:text-[23px] lg:leading-none xl:text-[32px] 2xl:text-[33px]'>
                  BEYOND TODAY
                </p>
                <div
                  className='mx-auto w-full text-center text-[9.5px] font-semibold
                  text-cblack min-[350px]:text-[11px] min-[550px]:text-[12px] min-[600px]:text-[13px] md:text-[10px] min-[900px]:text-[12px] lg:text-[13px] xl:text-[14px]'
                >
                  <p className='leading-none lg:leading-8 xl:leading-10'>
                    "Uncertainty of the Unknown" shows the{' '}
                    <span className='font-extrabold'>
                      {' '}
                      possibility that might come
                    </span>
                    , either an <span className='font-bold'>
                      improvement
                    </span>{' '}
                    or
                    <span className='font-bold'>decline</span>.
                  </p>
                  <p className='leading-none xl:leading-relaxed'>
                    It represents diverse thoughts and brings a wide range of
                    topics about politics, art, technology, and self-related
                    topics.
                  </p>
                  <p className=' leading-3 '>
                    We imagined this as a
                    <span className='font-bold'>rocket traveling in space</span>
                    , each representing different sub-themes
                  </p>
                </div>
              </div>

              <div
                className='flex h-[80%] flex-col justify-center gap-4 px-7 min-[365px]:px-[45px] 
                min-[400px]:px-[76px] min-[450px]:px-[96px] min-[500px]:h-[100%] min-[500px]:px-[140px] min-[550px]:px-[165px] min-[600px]:px-[190px] min-[650px]:px-[220px] min-[730px]:px-[250px] md:flex-row 
                md:gap-7 md:px-0 lg:gap-10 xl:max-h-[500px] xl:gap-[65px]'
              >
                <div
                  className='h-[30%] min-h-fit w-full rounded-[1.7rem] bg-cwhite px-4 pt-1 font-primary opacity-60 shadow-2xl transition delay-150 
                  ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl md:h-[83%] md:max-h-72 md:px-3
                  md:pt-2 lg:max-h-[340px] lg:min-h-[77%] lg:px-4 lg:pb-[7rem] lg:hover:scale-105 xl:rounded-[2.4rem] xl:px-5 xl:pb-[10rem] 2xl:pt-4'
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
                  <p className='text-center text-[18px] font-bold leading-loose text-cred min-[550px]:text-[22px] md:text-[18px] min-[900px]:text-[21px] xl:text-[25px] 2xl:text-[27px]'>
                    Tomorrow
                  </p>
                  <p
                    className='mx-auto text-justify text-[9.5px] font-medium leading-[9px] text-cblack min-[350px]:text-[11px]  
                    min-[400px]:leading-none min-[450px]:text-[12px] min-[600px]:text-[13px] md:text-[10px] min-[900px]:text-[12px] lg:text-[13px] lg:leading-none xl:text-[14px]'
                  >
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
                </div>

                <div
                  className='h-[30%] min-h-fit w-full rounded-[1.7rem] bg-cwhite px-4 pt-1 font-primary opacity-60  drop-shadow-xl transition delay-150 
                  ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl md:h-[83%] md:max-h-72 md:px-3
                  md:pb-9 md:pt-2 lg:max-h-[340px] lg:min-h-[77%] lg:px-4 lg:hover:scale-105 xl:rounded-[2.4rem] xl:px-5 xl:pb-[5.8rem] 2xl:pt-4'
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
                  <p className='text-center text-[18px] font-bold leading-loose text-cred min-[550px]:text-[22px] md:text-[18px] min-[900px]:text-[21px] xl:text-[25px] 2xl:text-[27px]'>
                    7 Years Later
                  </p>
                  <p
                    className='mx-auto text-justify text-[9.5px] font-medium leading-[9px] text-cblack min-[350px]:text-[11px]  
                    min-[400px]:leading-none min-[450px]:text-[12px] min-[600px]:text-[13px] md:text-[10px] min-[900px]:text-[12px] lg:text-[13px] lg:leading-none xl:text-[14px]'
                  >
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
                </div>

                <div
                  className='h-[30%] min-h-fit w-full rounded-[1.7rem] bg-cwhite px-4 pb-3 pt-1 font-primary opacity-60 drop-shadow-xl 
                  transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl md:h-[83%] md:max-h-72 md:px-3
                  md:pb-[54px] md:pt-2 lg:max-h-[340px] lg:min-h-[77%] lg:px-4 lg:hover:scale-105 xl:rounded-[2.4rem] xl:px-5 xl:pb-[7rem] 2xl:h-[10.4rem] 2xl:pt-4'
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
                  <p className='text-center text-[18px] font-bold leading-loose text-cred min-[550px]:text-[22px] md:text-[18px] min-[900px]:text-[25px] xl:text-[23px] 2xl:text-[27px]'>
                    50 Years Later
                  </p>
                  <p
                    className='mx-auto text-justify text-[9.5px] font-medium leading-[9px] text-cblack min-[350px]:text-[11px]  
                    min-[400px]:leading-none min-[450px]:text-[12px] min-[600px]:text-[13px] md:text-[10px] min-[900px]:text-[12px] lg:text-[13px] lg:leading-none xl:text-[14px]'
                  >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='h-16 w-full bg-black'></div>
    </div>
  );
}
