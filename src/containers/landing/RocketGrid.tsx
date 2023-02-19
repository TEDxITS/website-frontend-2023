'use client';

import Image from 'next/image';
import React from 'react';

import BgGlass1 from '~/images/landing/bg-glass.webp';
import BgGlass2 from '~/images/landing/bg-glass2.webp';
import grayRocket from '~/images/landing/rockets/gray2.png';
import grayRocket3 from '~/images/landing/rockets/gray3.png';
import grayRocket4 from '~/images/landing/rockets/gray4.png';
import grayRocket5 from '~/images/landing/rockets/gray5.png';
import grayRocket6 from '~/images/landing/rockets/gray6.png';
import redRocket from '~/images/landing/rockets/red1.png';

interface IconProps {
  src?: string;
  srcOnHover?: string;
  alt?: string;
  addClass?: string;
  clickFn?: () => void;
}

const Icon: React.FC<IconProps> = ({
  src,
  srcOnHover,
  alt,
  addClass,
  clickFn,
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt={alt}
    className={addClass}
    onMouseOver={(e): void => {
      srcOnHover && (e.currentTarget.src = srcOnHover);
    }}
    onMouseOut={(e): void => {
      srcOnHover && (e.currentTarget.src = src || '');
    }}
    onClick={clickFn}
  />
);

export default function RocketGrid() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isShowingCS, setIsShowingCS] = React.useState(false);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isShowing, setIsShowing] = React.useState(false);
  return (
    <section className='relative mt-24 flex w-screen flex-col items-center justify-center lg:mt-[24rem]'>
      <h3 className='mt-24 text-center font-baron text-4xl text-cblue transition duration-300 lg:text-7xl'>
        Here We Go!
      </h3>
      <div className='mt-8 grid h-full max-w-6xl grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-x-24 lg:gap-y-8'>
        <div className='group relative flex h-48 items-end justify-center border-4 border-dashed border-cblack lg:h-96 lg:w-96'>
          <a href='#'>
            <Image
              placeholder='blur'
              src={redRocket}
              alt='red1'
              onClick={() => setIsShowing((isShowing) => !isShowing)}
              className='transition duration-300 hover:-translate-y-2'
            />
          </a>
          <a
            href='#'
            className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '
          >
            Try Me!
          </a>
        </div>
        <div className='group relative flex h-48 items-end justify-center border-4 border-dashed border-cblack lg:h-96 lg:w-96 '>
          <Image
            placeholder='blur'
            src={grayRocket}
            alt='gray2'
            className='absolute transition duration-300 group-hover:-translate-y-2'
          />
          <Icon
            src='/images/landing/locks/locked.png'
            srcOnHover='/images/landing/locks/unlock.png'
            alt='Description'
            addClass='absolute'
            clickFn={() => setIsShowingCS((isShowingCS) => !isShowingCS)}
          />
          <a
            href='#'
            className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '
          >
            Coming Soon!
          </a>
        </div>
        <div className='group relative flex h-48 items-end justify-center border-4 border-dashed border-cblack lg:h-96 lg:w-96'>
          <Image
            placeholder='blur'
            src={grayRocket3}
            alt='gray3'
            className='absolute transition duration-300 group-hover:-translate-y-2'
          />
          <Icon
            src='/images/landing/locks/locked.png'
            srcOnHover='/images/landing/locks/unlock.png'
            alt='Description'
            addClass='absolute '
            clickFn={() => setIsShowingCS((isShowingCS) => !isShowingCS)}
          />
          <a
            href='#'
            className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '
          >
            Coming Soon!
          </a>
        </div>
        <div className='group relative flex h-48 items-end justify-center border-4 border-dashed border-cblack lg:h-96 lg:w-96'>
          <Image
            placeholder='blur'
            src={grayRocket4}
            alt='gray4'
            className='absolute transition duration-300 group-hover:-translate-y-2'
          />
          <Icon
            src='/images/landing/locks/locked.png'
            srcOnHover='/images/landing/locks/unlock.png'
            alt='Description'
            addClass='absolute'
            clickFn={() => setIsShowingCS((isShowingCS) => !isShowingCS)}
          />
          <a
            href='#'
            className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '
          >
            Coming Soon!
          </a>
        </div>
        <div className='group relative flex h-48 items-end justify-center border-4 border-dashed border-cblack lg:h-96 lg:w-96'>
          <Image
            placeholder='blur'
            src={grayRocket5}
            alt='gray5'
            className='absolute transition duration-300 group-hover:-translate-y-2'
          />
          <Icon
            src='/images/landing/locks/locked.png'
            srcOnHover='/images/landing/locks/unlock.png'
            alt='Description'
            addClass='absolute'
            clickFn={() => setIsShowingCS((isShowingCS) => !isShowingCS)}
          />
          <a
            href='#'
            className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '
          >
            Coming Soon!
          </a>
        </div>
        <div className='group relative flex h-48 items-end justify-center border-4 border-dashed border-cblack lg:h-96 lg:w-96'>
          <Image
            placeholder='blur'
            src={grayRocket6}
            alt='gray6'
            className='absolute transition duration-300 group-hover:-translate-y-2'
          />
          <Icon
            src='/images/landing/locks/locked.png'
            srcOnHover='/images/landing/locks/unlock.png'
            alt='Description'
            addClass='absolute'
            clickFn={() => setIsShowingCS((isShowingCS) => !isShowingCS)}
          />
          <a
            href='#'
            className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '
          >
            Coming Soon!
          </a>
        </div>
      </div>
      <h3 className='text-center font-baron text-4xl text-cwhite transition duration-300 lg:text-7xl'>
        COMING SOON
      </h3>
      <Image
        src={BgGlass1}
        alt='bg-glass'
        className='absolute top-0 left-0 z-[-1] hidden w-screen opacity-80 lg:block'
        placeholder='blur'
      />
      <Image
        src={BgGlass2}
        alt='bg-glass'
        className='absolute top-0 left-0 z-[-1] block w-screen opacity-80 lg:hidden'
        placeholder='blur'
      />
    </section>
  );
}
