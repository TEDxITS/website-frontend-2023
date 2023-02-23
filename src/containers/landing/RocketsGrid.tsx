'use client';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import BgGlass1 from '~/images/landing/cracked-bg.png';
import BgGlass2 from '~/images/landing/cracked-bg-lg.png';
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
    href: '/voyagers-test',
    text: 'Try me!',
  },
  {
    id: 2,
    src: grayRocket,
    alt: 'gray-rocket-1',
    isComingSoon: true,
    href: '#',
    text: 'Coming-soon',
  },
  {
    id: 3,
    src: grayRocket3,
    alt: 'gray-rocket-3',
    isComingSoon: true,
    href: '#',
    text: 'Coming-soon',
  },
  {
    id: 4,
    src: grayRocket4,
    alt: 'gray-rocket-4',
    isComingSoon: true,
    href: '#',
    text: 'Coming-soon',
  },
  {
    id: 5,
    src: grayRocket5,
    alt: 'gray-rocket-5',
    isComingSoon: true,
    href: '#',
    text: 'Coming-soon',
  },
  {
    id: 6,
    src: grayRocket6,
    alt: 'gray-rocket-6',
    isComingSoon: true,
    href: '#',
    text: 'Coming-soon',
  },
];

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

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export default function RocketsGrid() {
  const animationControls = useAnimation();
  const router = useRouter();

  // Temporary
  async function sequence(href: string) {
    router.prefetch('/voyagers-test');
    animationControls.start({
      x: '3px',
      y: '3px',
      rotate: 10,
      transition: {
        ease: 'easeInOut',
        duration: 0.1,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    });
    await animationControls.start({ scale: 1.3, rotate: 45, zIndex: 50 });
    await animationControls.start({
      x: '110vw',
      transition: { delay: 0.5, duration: 0.6, ease: 'easeInOut' },
    });
    router.push(href);
  }

  return (
    <section className='relative flex h-[80rem] flex-col items-center justify-center bg-black bg-transparent-stars pb-40 pt-24 md:h-[73rem]'>
      <div className='z-30 h-full w-full'>
        <h3 className='mt-10 text-center font-baron text-4xl text-cblue md:mt-0 md:text-5xl lg:mt-0 lg:text-7xl'>
          Here We Go!
        </h3>
        <motion.div
          variants={containerAnimation}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='layout mt-8 mb-4 grid h-5/6 max-w-6xl grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-3'
        >
          {rocketList.map((rocket) =>
            rocket.isComingSoon ? (
              <motion.div
                key={rocket.id}
                variants={itemAnimation}
                className='group relative flex items-end justify-center border-4 border-dashed border-cblack'
              >
                <Image
                  placeholder='blur'
                  src={rocket.src}
                  alt={rocket.alt}
                  fill
                  className='absolute object-contain transition duration-300 group-hover:-translate-y-2'
                />
                <ComingSoonLock />
                <p className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '>
                  {rocket.text}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={rocket.id}
                variants={itemAnimation}
                onClick={() => sequence(rocket.href)}
                className='group relative flex h-full w-full cursor-pointer items-end justify-center border-4 border-dashed border-cblack'
              >
                <motion.div
                  animate={animationControls}
                  className='relative flex h-full w-full items-end justify-center'
                >
                  <Image
                    placeholder='blur'
                    src={rocket.src}
                    alt={rocket.alt}
                    fill
                    className='absolute z-50 object-contain transition duration-300 hover:-translate-y-2'
                  />
                </motion.div>
                <p className='absolute -translate-y-4 font-baron text-lg text-cwhite opacity-0 transition duration-300 group-hover:opacity-100 lg:text-2xl '>
                  {rocket.text}
                </p>
                <div className='absolute top-0 font-quaker '>
                  <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-xl text-xl text-transparent  xs:text-3xl sm:text-7xl'>
                    Voyagers
                  </span>
                  <br />
                  <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-2xl text-transparent xs:text-4xl sm:text-7xl'>
                    Test
                  </span>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        <h3 className='z-20 text-center font-baron text-cwhite transition duration-300 xs:text-4xl lg:text-7xl'>
          COMING SOON
        </h3>
      </div>
      <Image
        src={BgGlass1}
        alt='bg-glass'
        className='absolute top-0 left-0  z-0 hidden w-screen scale-[110%] object-cover md:block'
        fill
        placeholder='blur'
      />
      <Image
        src={BgGlass2}
        alt='bg-glass'
        className='absolute top-0 left-0 z-0 block w-screen scale-[110%] object-cover md:hidden'
        fill
        placeholder='blur'
      />
    </section>
  );
}
