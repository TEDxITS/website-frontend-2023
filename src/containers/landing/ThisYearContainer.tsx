import Image from 'next/image';

import BgWhats from '~/images/landing/bg-whats.webp';
import FloatWhats from '~/images/landing/bg-whats2.webp';

export default function ThisYearContainer() {
  return (
    <div className='relative mt-40 mb-80 flex w-screen flex-col items-center justify-center md:mt-64 lg:mt-32'>
      <h3 className='pb-12 text-center font-baron text-3xl text-cwhite lg:pb-24 lg:text-5xl'>
        WHAT'S HAPPENING THIS YEAR?
      </h3>
      <p className='w-auto px-8 text-center text-base text-cwhite md:w-3/4 lg:max-w-2xl lg:text-xl'>
        We’re aiming to reach further beyond the skies, the galaxy{' '}
        <span className='font-semibold text-cred'>to be exact.</span> This year,
        you will embark on a journey with the voyagers to seek{' '}
        <span className='font-semibold text-cred'>
          “the uncertainty of the unknown”
        </span>{' '}
        with fresh and out-of-the box ideas.
        <br /> <br />
        It's time to launch and discover what the future holds,{' '}
        <span className='font-semibold text-cred'>for better</span> or{' '}
        <span className='font-semibold text-cred'>for worse.</span>
      </p>
      <Image
        src={BgWhats}
        alt='bg-whats'
        className='absolute top-8 -z-[1] h-96 w-full md:top-0 lg:top-8 lg:max-w-4xl'
        placeholder='blur'
      />
      <Image
        src={FloatWhats}
        alt='float-whats'
        className='absolute bottom-0 -z-[2] -translate-y-36 lg:top-0'
        placeholder='blur'
      />
    </div>
  );
}
