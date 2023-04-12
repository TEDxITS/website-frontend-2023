'use client';
// import { motion } from 'framer-motion';
// import type { Metadata } from 'next';
// import Image from 'next/image';

// import { generateTemplateMetadata } from '@/utils/metadata';

// import speaker_1 from '~/images/about/last-year-journey/speaker/speaker1.png';
// import speaker_2 from '~/images/about/last-year-journey/speaker/speaker2.png';
// import speaker_3 from '~/images/about/last-year-journey/speaker/speaker3.png';
// import speaker_4 from '~/images/about/last-year-journey/speaker/speaker4.png';
// import speaker_5 from '~/images/about/last-year-journey/speaker/speaker5.png';
// import speaker_6 from '~/images/about/last-year-journey/speaker/speaker6.png';
// import speaker_7 from '~/images/about/last-year-journey/speaker/speaker7.png';
// import speaker_8 from '~/images/about/last-year-journey/speaker/speaker8.png';

import { Metadata } from 'next';
import Image from 'next/image';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

import comingSoon from '~/images/coming-soon/coming-soon.png';
import comingsoonBg from '~/images/coming-soon/coming-soon-bg-alt-2.png';
import leftBg from '~/images/coming-soon/left-bg.png';
import rightBg from '~/images/coming-soon/right-bg.png';

const metadataObject = generateTemplateMetadata(
  'Our Pilots',
  '',
  '/our-pilots'
);
export const metadata: Metadata = {
  ...metadataObject,
};

// const speakerList = [
//   {
//     img: speaker_8,
//     link: '#',
//     title: 'Women Right’s Fighter',
//     desc: '“Debunking the Virginity Myth”',
//   },

//   {
//     img: speaker_7,
//     link: 'https://www.youtube.com/watch?v=GyucHZjnnwA&t=139s',
//     title: 'Politician ',
//     desc: '“The Price of Truth : Justice Behind Politics”',
//   },
//   {
//     img: speaker_6,
//     link: 'https://www.youtube.com/watch?v=EsIt6y46BLo&t=125s',
//     title: 'Co-Founder of AjakGerak ',
//     desc: '“Stupid is Not Always Stupid”',
//   },
//   {
//     img: speaker_5,
//     link: 'https://www.youtube.com/watch?v=3GoMTSoDJAs',
//     title: 'Founder @rumahsandyakala',
//     desc: '“How to Say "I Need Help" Out Loud”',
//   },
//   {
//     img: speaker_4,
//     link: 'https://www.youtube.com/watch?v=cA2KxgPDWNY&t=14s',
//     title: 'Stand Up Comedian',
//     desc: '“Comedy and Its Emotional Intelligence”',
//   },
//   {
//     img: speaker_3,
//     link: 'https://www.youtube.com/watch?v=R3zr1gtkxIY&t=141s',
//     title: 'Content Creator',
//     desc: '“Rediscovering Meaning of Life through Frugal Living”',
//   },
//   {
//     img: speaker_2,
//     link: 'https://www.youtube.com/watch?v=NECkw6bHgDQ',
//     title: 'Jurnalist of Project Multituli',
//     desc: '“Underprivileged Gen Z : Young, Woke, and Broke”',
//   },
//   {
//     img: speaker_1,
//     link: 'https://www.youtube.com/watch?v=Nz5qPlkzmDs',
//     title: 'Co-Founder of Ibunda.id ',
//     desc: '“My Parents, Everything I Don’t Want to Become”',
//   },
// ];

// const containerAnimation = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemAnimation = {
//   hidden: { opacity: 0, y: 100 },
//   show: { opacity: 1, y: 0 },
// };

export default function OurPilotsPage() {
  return (
    // <div className='relative bg-transparent py-20'>
    //   <div className='z-10 h-full w-full'>
    //     <div className='layout h-full'>
    //       <section className='flex h-full w-full flex-col'>
    //         <div className='mb-4 pl-7 pb-4'>
    //           <h1 className='relative font-baron text-5xl capitalize tracking-wide text-white'>
    //             Our Pilots
    //           </h1>
    //         </div>
    //         <div className=' flex w-full'>
    //           <motion.div
    //             variants={containerAnimation}
    //             initial='hidden'
    //             whileInView='show'
    //             viewport={{ once: true }}
    //             className=' m-auto grid w-full grid-cols-4 gap-2 max-lg:grid-cols-2 md:gap-6 lg:gap-10'
    //           >
    //             {speakerList.map((items, i) => {
    //               return (
    //                 <motion.div
    //                   variants={itemAnimation}
    //                   whileHover={{ scale: 1.1 }}
    //                   transition={{ type: 'spring' }}
    //                   key={i}
    //                   className=' relative flex h-96 w-full cursor-pointer flex-col justify-center max-md:h-64'
    //                 >
    //                   <div className=' relative flex h-3/4 w-full flex-col '>
    //                     <Image
    //                       src={items.img}
    //                       alt='speaker'
    //                       className='absolute object-contain'
    //                       fill
    //                       onClick={() => window.open(items.link, '_blank')}
    //                       placeholder='blur'
    //                     />
    //                   </div>
    //                   <div
    //                     className=' bw relative flex h-1/4 w-full flex-col items-center justify-center bg-cblack'
    //                     onClick={() => window.open(items.link, '_blank')}
    //                   >
    //                     <h2 className='text-center text-xs text-cwhite md:text-lg'>
    //                       {items.title}
    //                     </h2>
    //                     <p className='text-center text-xs text-cwhite '>
    //                       {items.desc}
    //                     </p>
    //                   </div>
    //                 </motion.div>
    //               );
    //             })}
    //           </motion.div>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    // </div>
    <RandomStarfieldContainer className='bg-black'>
      <div className='absolute z-30 flex h-full w-full flex-col items-center justify-center'>
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
          <UnstyledLink href='/ticket'>
            <Button className='px-8'>
              <p className='font-primary'>BACK</p>
            </Button>
          </UnstyledLink>
        </section>
        {/* <ComingSoonFooter /> */}
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
