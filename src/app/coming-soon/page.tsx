import { Metadata } from 'next';
import Image from 'next/image';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import ComingSoonFooter from '@/containers/coming-soon/ComingSoonFooter';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

import comingSoon from '~/images/coming-soon/coming-soon.png';
import comingsoonBg from '~/images/coming-soon/coming-soon-bg-alt-2.png';
import leftBg from '~/images/coming-soon/left-bg.png';
import rightBg from '~/images/coming-soon/right-bg.png';

const metadataObject = generateTemplateMetadata(
  'Coming Soon',
  '',
  '/coming-soon'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function ComingSoonPage() {
  return (
    <RandomStarfieldContainer className='bg-black'>
      <div className='absolute z-30 flex h-full w-full flex-col items-center justify-between'>
        <section className='h-1/4 sm:h-1/3'></section>
        <section className='flex h-1/3 w-full flex-col items-center justify-center px-4 sm:px-0'>
          <div className='relative h-full w-full sm:w-1/2'>
            <Image
              src={comingSoon}
              alt='Coming Soon Title'
              className='absolute z-30'
              fill
              style={{ objectFit: 'contain' }}
              placeholder='blur'
            />
          </div>
          <h1 className='sr-only'>Coming Soon</h1>
          <h2 className='mb-12 text-center font-primary text-[1.3rem] font-semibold text-white'>
            Stay tuned as we will guide you to #ExpectTheUnexpected
          </h2>
          <UnstyledLink href='https://www.instagram.com/tedxits/' openNewTab>
            <Button className='px-8'>
              <p className='font-primary'>EXPLORE HERE</p>
            </Button>
          </UnstyledLink>
        </section>
        <ComingSoonFooter />
      </div>
      {/* Large Background */}
      <Image
        src={comingsoonBg}
        alt='Background'
        className='absolute z-20 hidden sm:block'
        fill
        style={{ objectFit: 'cover' }}
        placeholder='blur'
        priority
      />
      {/* Mobile Background */}
      <div className='absolute bottom-36 -right-32 z-20 h-1/2 w-full rotate-12'>
        <Image
          src={rightBg}
          alt='Background'
          className='absolute block sm:hidden'
          fill
          style={{ objectFit: 'contain' }}
          placeholder='blur'
        />
      </div>
      <div className='absolute top-5 -left-24 z-20 h-1/2 w-full rotate-12'>
        <Image
          src={leftBg}
          alt='Background'
          className='absolute block sm:hidden'
          fill
          style={{ objectFit: 'contain' }}
          placeholder='blur'
        />
      </div>
    </RandomStarfieldContainer>
  );
}
