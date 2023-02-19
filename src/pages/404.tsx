import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import '../styles/globals.css';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import DefaultHead from '@/components/utils/DefaultHead';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import FullTEDLogo from '@/assets/logo/FullTEDLogo';

import fire from '~/images/404/fire-1.png';
import fireAlt from '~/images/404/fire-2.png';
import moonImageAlt from '~/images/404/moon-2.png';
import moonImage from '~/images/404/moon-with-rocket.png';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Not Found | TEDxITS 2023</title>
        <DefaultHead templateTitle='Not Found' />
      </Head>
      <RandomStarfieldContainer>
        <div className='absolute z-30 flex h-full w-full flex-col sm:flex-row'>
          <section className='flex h-3/4 flex-col justify-center pl-10 sm:h-full sm:w-1/3 sm:pl-80'>
            <div className='flex items-center gap-x-3'>
              <FullTEDLogo variant='text' className='h-20 w-56 sm:w-64' />
              <span>
                <p className='text-lg text-cwhite sm:text-2xl'>
                  <span>&#169;</span>2023
                </p>
              </span>
            </div>
            <div className='-mt-3 mb-10'>
              <p className='whitespace-nowrap text-2xl text-cwhite'>
                404. Page Not Found.
              </p>
              <p className='whitespace-nowrap text-xl text-cwhite'>
                It's probably <b>lost</b> in the milky way.
              </p>
            </div>
            <div>
              <UnstyledLink href='/'>
                <Button>Go Back</Button>
              </UnstyledLink>
            </div>
          </section>
          <section className='relative h-1/4 sm:h-full sm:w-2/3'>
            <Image
              src={fire}
              alt='fire'
              className='absolute right-28 bottom-10 z-20 animate-rotate sm:right-40 sm:bottom-40'
              placeholder='blur'
            />
            <Image
              src={fireAlt}
              alt='fire'
              className='absolute left-[50%] bottom-36 z-20 hidden animate-rotate sm:block'
              placeholder='blur'
            />
            <Image
              src={moonImage}
              alt='moon'
              className='absolute bottom-0 right-0 z-30 sm:-right-56'
              placeholder='blur'
            />
            <Image
              src={moonImageAlt}
              alt='moon'
              className='absolute bottom-0 sm:-right-56'
              placeholder='blur'
            />
          </section>
        </div>
      </RandomStarfieldContainer>
    </>
  );
}
