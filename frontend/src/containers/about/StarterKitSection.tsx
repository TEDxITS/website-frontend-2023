'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import UnstyledLink from '@/components/link/UnstyledLink';

import tedLogo from '~/images/logo/ted.png';
import tedxLogo from '~/images/logo/tedx.png';

// TODO: make animation reusable
export default function StarterKitSection() {
  return (
    <div className='layout z-10 flex min-h-screen flex-col justify-center py-10 md:py-12'>
      <h1 className='mb-10 text-center font-baron text-4xl text-white sm:mb-24 sm:text-start sm:text-6xl'>
        TED AND TED<span className='text-2xl font-bold sm:text-3xl'>x</span>{' '}
        STARTER KIT
      </h1>
      <div className='flex flex-col gap-14 md:flex-row'>
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
          className='flex w-full flex-col items-center rounded-3xl bg-gray-100 bg-opacity-20 p-7 shadow-sm backdrop-blur-sm md:w-1/2'
        >
          <Image
            src={tedLogo}
            className='w-20 pb-5 pt-2'
            alt='tedx'
            placeholder='blur'
          />
          <p className='mb-6 text-justify text-xl text-cwhite'>
            TEDx is a grassroots initiative, created in the spirit of TED's
            overall mission to reach and discover "Ideas Worth Spreading" TEDx
            brings the spirit of TED to local communities around the globe
            through TEDx events. These events are organized by passionate
            individuals who seek to uncover new ideas and to share the latest
            research in their local areas that spark conversations in their
            communities.
          </p>
          <p className='w-full text-lg text-cwhite'>
            Click here to find out more about{' '}
            <UnstyledLink
              className='font-bold hover:text-cred'
              href='https://www.ted.com'
            >
              TED
            </UnstyledLink>
          </p>
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
            },
          }}
          className='flex w-full flex-col items-center rounded-3xl bg-gray-100 bg-opacity-20 p-7 shadow-sm backdrop-blur-sm md:w-1/2'
        >
          <Image
            src={tedxLogo}
            className='w-20 pb-5 pt-2'
            alt='tedx'
            placeholder='blur'
          />
          <p className='mb-6 text-justify text-xl text-cwhite'>
            TEDx aims to become an experience for individuals to delve into a
            journey of self-awareness by being reflective of one's self to
            discover one's passion and thrive in the respective field in order
            to give impact to others, and ultimately, the whole world
          </p>
          <p className='w-full text-lg text-cwhite'>
            Find out more about{' '}
            <UnstyledLink
              className='font-bold hover:text-cred'
              href='https://www.ted.com/about/programs-initiatives/tedx-program'
            >
              TEDx
            </UnstyledLink>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
