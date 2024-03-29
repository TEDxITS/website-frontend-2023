'use client';
import { AnimationControls, motion } from 'framer-motion';
import Image from 'next/image';

import Rocket from '@/containers/landing/Rocket';

import BgGlass1 from '~/images/landing/cracked-bg.png';
import BgGlass2 from '~/images/landing/cracked-bg-lg.png';
import redRocket from '~/images/landing/rockets/red1.png';
import redRocket2 from '~/images/landing/rockets/red2.png';
import redRocket3 from '~/images/landing/rockets/red3.png';
import redRocket6 from '~/images/landing/rockets/red4.png';
import redRocket4 from '~/images/landing/rockets/red5.png';
import redRocket5 from '~/images/landing/rockets/red6.png';

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
    text: 'Register Here!',
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
    src: redRocket3,
    alt: 'red-rocket-3',
    isComingSoon: false,
    href: '/anthropocene',
    text: 'Try me!',
    title: (
      <div className='absolute top-0 font-quaker'>
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-xl text-transparent xs:text-2xl sm:text-5xl'>
          Anthropocene
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
      await animationControls.start({ scale: 1.3, rotate: 45, zIndex: 50 });
      await animationControls.start({
        x: '110vw',
        transition: { delay: 0.5, duration: 0.6, ease: 'easeInOut' },
      });
    },
  },
  {
    id: 4,
    src: redRocket4,
    alt: 'red-rocket-4',
    isComingSoon: false,
    href: '/ticketME',
    text: 'Order Now!',
    title: (
      <div className='absolute top-0 font-quaker '>
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-xl text-transparent xs:text-3xl sm:text-6xl'>
          Main Event
        </span>
        <br />
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-3xl text-transparent sm:text-3xl md:text-8xl'>
          Ticket
        </span>
      </div>
    ),
    className: 'h-[90%] w-[90%] xs:h-4/5 xs:w-4/5',
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
    src: redRocket5,
    alt: 'red-rocket-5',
    isComingSoon: false,
    href: 'ticketPE3',
    text: 'Order Now!',
    title: (
      <div className='absolute top-0 font-quaker '>
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text font-baron text-xl font-black text-transparent xs:text-3xl sm:text-5xl'>
          PROJECT 2073
        </span>

        <br />
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-3xl text-transparent sm:text-3xl md:text-8xl'>
          Ticket
        </span>
      </div>
    ),
    className: 'h-[90%] w-[90%] xs:h-4/5 xs:w-4/5',
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
    src: redRocket6,
    alt: 'red-rocket-6',
    isComingSoon: false,
    href: '/cosmoventure',
    text: 'Order Now!',
    title: (
      <div className='absolute top-0 font-quaker '>
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-xl text-xl text-transparent  xs:text-3xl sm:text-8xl'>
          Cosmo
        </span>
        <br />
        <span className='bg-gradient-to-r from-cblack to-cblue bg-clip-text text-2xl text-transparent xs:text-4xl sm:text-7xl'>
          Venture
        </span>
      </div>
    ),
    className: 'h-[90%] w-[90%] xs:h-4/5 xs:w-4/5',
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
