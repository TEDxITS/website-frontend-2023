import Image from 'next/image';

import UnstyledLink from '@/components/link/UnstyledLink';

import ComingSoon from '~/images/dashboard/coming-soon-small.png';
import FloatWhats from '~/images/landing/bg-whats2.png';
import TvStatic from '~/images/landing/tv-static-small.jpg';

const AFTER_MOVIE_URL = '';
const AFTER_MOVIE_THUMBNAIL_URL = '';

// const AFTER_MOVIE_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
// const AFTER_MOVIE_THUMBNAIL_URL = DummyThumbnail;

// md:mt-80 lg:mb-80 lg:mt-40 md:mt-80 lg:mb-80 lg:mt-40
export default function ThisYearContainer() {
  const afterMovieThumbnail =
    AFTER_MOVIE_URL && AFTER_MOVIE_THUMBNAIL_URL
      ? AFTER_MOVIE_THUMBNAIL_URL
      : TvStatic;
  const afterMovieLinkButton = AFTER_MOVIE_URL ? (
    <div className='absolute top-[30%] flex justify-center sm:top-[40%]'>
      <UnstyledLink
        href={AFTER_MOVIE_URL}
        openNewTab
        className='border-4 border-cgray bg-black px-8 pb-4 pt-3 font-baron text-base text-white sm:text-xl'
      >
        Watch Now
      </UnstyledLink>
    </div>
  ) : (
    <div className='absolute top-[10%] flex justify-center sm:top-[20%]'>
      <Image
        src={ComingSoon}
        alt='coming soon'
        className='h-1/2 w-1/2 sm:h-auto sm:w-auto'
      />
    </div>
  );
  return (
    <section className='relative h-1/2 w-full'>
      <div className='absolute z-20 h-full w-full'>
        <div className='layout flex h-full flex-col items-center justify-start xs:justify-center lg:justify-start lg:pt-20'>
          <h3 className='pb-12 text-center font-baron text-3xl text-cwhite lg:text-5xl'>
            THIS IS NOT THE END
          </h3>
          <div className='noisy relative flex flex-col items-center border-[10px] border-cgray bg-black'>
            <div className='absolute -left-4 bottom-6 z-40 h-32 w-4 rounded-l-md bg-cgray'></div>
            <div className='absolute -bottom-4 left-6 z-40 h-4 w-32 rounded-b-md bg-cgray'></div>
            <div className='absolute -bottom-4 right-6 z-40 h-4 w-32 rounded-b-md bg-cgray'></div>
            <div className='absolute -right-4 top-6 z-40 h-32 w-4 rounded-r-md bg-cgray'></div>
            <div className='absolute -top-4 right-4 z-40 h-4 w-64  rounded-t-md bg-cgray'></div>
            {/* <p className='w-auto px-8 text-center text-base text-cwhite md:w-3/4 lg:max-w-2xl lg:text-xl'>
              We’re aiming to reach further beyond the skies, the galaxy{' '}
              <span className='font-semibold text-cred'>to be exact.</span> This
              year, you will embark on a journey with the voyagers to seek{' '}
              <span className='font-semibold text-cred'>
                “the uncertainty of the unknown”
              </span>{' '}
              with fresh and out-of-the box ideas.
              <br /> <br />
              It's time to launch and discover what the future holds,{' '}
              <span className='font-semibold text-cred'>
                for better
              </span> or{' '}
              <span className='font-semibold text-cred'>for worse.</span>
            </p> */}
            <Image src={afterMovieThumbnail} alt='thumbnail' />
            {afterMovieLinkButton}
          </div>
        </div>
      </div>
      <Image
        src={FloatWhats}
        alt='float-whats'
        className='absolute xs:top-32 md:top-20 lg:-top-20'
        placeholder='blur'
      />
    </section>
  );
}
