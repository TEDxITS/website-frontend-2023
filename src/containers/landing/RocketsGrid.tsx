'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import BgGlass2 from '~/images/landing/bg-glass2.webp';
import BgGlass1 from '~/images/landing/crackedreal.png';
import lockedLock from '~/images/landing/locks/locked.png';
import unlockedLock from '~/images/landing/locks/unlock.png';
import grayRocket from '~/images/landing/rockets/gray2.png';
import grayRocket3 from '~/images/landing/rockets/gray3.png';
import grayRocket4 from '~/images/landing/rockets/gray4.png';
import grayRocket5 from '~/images/landing/rockets/gray5.png';
import grayRocket6 from '~/images/landing/rockets/gray6.png';
import redRocket from '~/images/landing/rockets/red1.png';

// eslint-disable-next-line unused-imports/no-unused-vars
const rocketList = [
  {
    id: 1,
    src: redRocket,
    alt: 'red-rocket-1',
    isComingSoon: false,
  },
];

// eslint-disable-next-line unused-imports/no-unused-vars
function ComingSoonLock() {
  return (
    <>
      <Image
        placeholder='blur'
        src={lockedLock}
        alt='lock'
        fill
        className='absolute object-contain transition duration-300 hover:-translate-y-2 group-hover:hidden'
      />
      <Image
        placeholder='blur'
        src={unlockedLock}
        alt='lock'
        fill
        className='absolute hidden object-contain transition duration-300 hover:-translate-y-2 group-hover:block'
      />
    </>
  );
}

export default function RocketsGrid() {
  return (
    <section className='relative flex h-[70rem] flex-col items-center justify-center bg-black bg-transparent-stars pb-40 pt-24 md:h-[73rem]'>
      <h3 className='z-20 mt-10 text-center font-baron text-4xl text-cblue md:mt-0 md:text-5xl lg:mt-0 lg:text-7xl'>
        Here We Go!
      </h3>
      <div className='layout z-20 mt-8 mb-4 grid h-5/6 max-w-6xl grid-cols-2 gap-8 lg:grid-cols-3'>
        <Link
          href='/voyagers-test'
          className='group relative flex items-end justify-center border-4 border-dashed border-cblack'
        >
          <Image
            placeholder='blur'
            src={redRocket}
            alt='red1'
            fill
            className='absolute object-contain transition duration-300 hover:-translate-y-2'
          />
          <p className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '>
            Try Me!
          </p>
        </Link>
        <div className='group relative flex items-end justify-center border-4 border-dashed border-cblack'>
          <Image
            placeholder='blur'
            src={grayRocket}
            alt='gray2'
            fill
            className='absolute object-contain transition duration-300 hover:-translate-y-2'
          />
          <Image
            placeholder='blur'
            src={lockedLock}
            alt='lock'
            fill
            className='absolute object-contain transition duration-300 hover:-translate-y-2 group-hover:hidden'
          />
          <Image
            placeholder='blur'
            src={unlockedLock}
            alt='lock'
            fill
            className='absolute hidden object-contain transition duration-300 hover:-translate-y-2 group-hover:block'
          />
          <a
            href='#'
            className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '
          >
            Coming Soon!
          </a>
        </div>
        <div className='group relative flex items-end justify-center border-4 border-dashed border-cblack'>
          <Image
            placeholder='blur'
            src={grayRocket3}
            alt='gray2'
            fill
            className='absolute object-contain transition duration-300 hover:-translate-y-2'
          />
          <Image
            placeholder='blur'
            src={lockedLock}
            alt='lock'
            fill
            className='absolute object-contain transition duration-300 hover:-translate-y-2 group-hover:hidden'
          />
          <Image
            placeholder='blur'
            src={unlockedLock}
            alt='lock'
            fill
            className='absolute hidden object-contain transition duration-300 hover:-translate-y-2 group-hover:block'
          />
          <a
            href='#'
            className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '
          >
            Coming Soon!
          </a>
        </div>
        <div className='group relative flex items-end justify-center border-4 border-dashed border-cblack'>
          <Image
            placeholder='blur'
            src={grayRocket4}
            alt='gray2'
            fill
            className='absolute object-contain transition duration-300 hover:-translate-y-2'
          />
          <Image
            placeholder='blur'
            src={lockedLock}
            alt='lock'
            fill
            className='absolute object-contain transition duration-300 hover:-translate-y-2 group-hover:hidden'
          />
          <Image
            placeholder='blur'
            src={unlockedLock}
            alt='lock'
            fill
            className='absolute hidden object-contain transition duration-300 hover:-translate-y-2 group-hover:block'
          />
          <a
            href='#'
            className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '
          >
            Coming Soon!
          </a>
        </div>
        <div className='group relative flex items-end justify-center border-4 border-dashed border-cblack'>
          <Image
            placeholder='blur'
            src={grayRocket5}
            alt='gray2'
            fill
            className='absolute object-contain transition duration-300 hover:-translate-y-2'
          />
          <Image
            placeholder='blur'
            src={lockedLock}
            alt='lock'
            fill
            className='absolute object-contain transition duration-300 hover:-translate-y-2 group-hover:hidden'
          />
          <Image
            placeholder='blur'
            src={unlockedLock}
            alt='lock'
            fill
            className='absolute hidden object-contain transition duration-300 hover:-translate-y-2 group-hover:block'
          />
          <a
            href='#'
            className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '
          >
            Coming Soon!
          </a>
        </div>
        <div className='group relative flex items-end justify-center border-4 border-dashed border-cblack'>
          <Image
            placeholder='blur'
            src={grayRocket6}
            alt='gray2'
            fill
            className='absolute object-contain transition duration-300 hover:-translate-y-2'
          />
          <Image
            placeholder='blur'
            src={lockedLock}
            alt='lock'
            fill
            className='absolute object-contain transition duration-300 hover:-translate-y-2 group-hover:hidden'
          />
          <Image
            placeholder='blur'
            src={unlockedLock}
            alt='lock'
            fill
            className='absolute hidden object-contain transition duration-300 hover:-translate-y-2 group-hover:block'
          />
          <a
            href='#'
            className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '
          >
            Coming Soon!
          </a>
        </div>
      </div>
      <h3 className='z-20 text-center font-baron text-4xl text-cwhite transition duration-300 lg:text-7xl'>
        COMING SOON
      </h3>
      <Image
        src={BgGlass1}
        alt='bg-glass'
        className='absolute top-0  left-0 hidden w-screen scale-[110%] object-cover md:block'
        fill
        placeholder='blur'
      />
      <Image
        src={BgGlass2}
        alt='bg-glass'
        className='absolute top-0 left-0 block w-screen object-cover md:hidden'
        fill
        placeholder='blur'
      />
    </section>
  );
}
