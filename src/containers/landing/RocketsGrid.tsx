'use client';
import { AnimationControls, motion } from 'framer-motion';
import Image from 'next/image';

import Rocket from '@/containers/landing/Rocket';

import BgGlass1 from '~/images/landing/cracked-bg.png';
import BgGlass2 from '~/images/landing/cracked-bg-lg.png';
import grayRocket3 from '~/images/landing/rockets/gray3.png';
import grayRocket4 from '~/images/landing/rockets/gray4.png';
import grayRocket5 from '~/images/landing/rockets/gray5.png';
import grayRocket6 from '~/images/landing/rockets/gray6.png';
import redRocket from '~/images/landing/rockets/red1.png';
import redRocket2 from '~/images/landing/rockets/red2.png';

// eslint-disable-next-line unused-imports/no-unused-vars
const rocketList = [
  {
    id: 1,
    src: redRocket,
    alt: 'red-rocket-1',
    isComingSoon: false,
    href: '/voyagers-test',
    text: 'Try me!',
    title: (
      <div className='absolute top-0 font-quaker '>
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-xl text-xl text-transparent  xs:text-3xl sm:text-7xl'>
          Voyagers
        </span>
        <br />
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-2xl text-transparent xs:text-4xl sm:text-7xl'>
          Test
        </span>
      </div>
    ),
    className: '',
    animationSequenceFn: async function sequence(
      animationControls: AnimationControls
    ) {
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
      await animationControls.start({ scale: 1.3, rotate: 45, zIndex: 999 });
      await animationControls.start({
        x: '110vw',
        transition: { delay: 0.5, duration: 0.6, ease: 'easeInOut' },
      });
    },
  },
  {
    id: 2,
    src: redRocket2,
    alt: 'red-rocket-2',
    isComingSoon: false,
    href: '/CFLS',
    text: 'Try me',
    title: (
      <div className='absolute top-0 font-quaker'>
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-xl text-transparent  xs:text-3xl sm:text-6xl'>
          Call for
        </span>
        <br />
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-2xl text-transparent xs:text-4xl sm:text-7xl'>
          Local
        </span>
        <br />
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-2xl text-transparent xs:text-4xl sm:text-7xl'>
          Speaker
        </span>
      </div>
    ),
    className: 'h-[90%] w-[90%] xs:h-3/5 xs:w-3/5',
    animationSequenceFn: async function sequence(
      animationControls: AnimationControls
    ) {
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
    },
  },
  {
    id: 3,
    src: grayRocket3,
    alt: 'gray-rocket-3',
    isComingSoon: true,
    href: '#',
    text: 'Coming-soon',
    title: <></>,
    className: '',
    animationSequenceFn: async function sequence(
      animationControls: AnimationControls
    ) {
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
    },
  },
  {
    id: 4,
    src: grayRocket4,
    alt: 'gray-rocket-4',
    isComingSoon: true,
    href: '#',
    text: 'Coming-soon',
    title: <></>,
    className: '',
    animationSequenceFn: async function sequence(
      animationControls: AnimationControls
    ) {
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
    },
  },
  {
    id: 5,
    src: grayRocket5,
    alt: 'gray-rocket-5',
    isComingSoon: true,
    href: '#',
    text: 'Coming-soon',
    title: <></>,
    className: '',
    animationSequenceFn: async function sequence(
      animationControls: AnimationControls
    ) {
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
    },
  },
  {
    id: 6,
    src: grayRocket6,
    alt: 'gray-rocket-6',
    isComingSoon: true,
    href: '#',
    text: 'Coming-soon',
    title: <></>,
    className: '',
    animationSequenceFn: async function sequence(
      animationControls: AnimationControls
    ) {
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
    },
  },
];

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function RocketsGrid() {
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
          {rocketList.map((rocket) => (
            <Rocket key={rocket.id} rocket={rocket} />
          ))}
        </motion.div>
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
