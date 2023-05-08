import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { generateTemplateMetadata } from '@/utils/metadata';

import astronaut from '~/images/ticket/astronaut.png';
import beyondOrnament from '~/images/ticket/beyondOrnament.png';
import leftBg from '~/images/ticket/leftBg.png';
import leftBgMobile from '~/images/ticket/leftBgMobile.png';
import rightBg from '~/images/ticket/rightBg.png';
import rightBotBgMobile from '~/images/ticket/rightBotBgMobile.png';
import rightTopBgMobile from '~/images/ticket/rightTopBgMobile.png';
import satellite from '~/images/ticket/satellite.png';
import spaceShuttle from '~/images/ticket/spaceShuttle.png';
import titleDecoration1 from '~/images/ticket/titleDecoration1.png';
import titleDecoration2 from '~/images/ticket/titleDecoration2.png';
import titleDecoration3 from '~/images/ticket/titleDecoration3.png';

const metadataObject = generateTemplateMetadata(
  'Project 2073 Ticket',
  '',
  '/ticketPE3'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function TicketPage() {
  return (
    <div className='relative min-h-screen w-screen overflow-clip'>
      <div className='relative flex h-fit w-full flex-col items-center pt-32 text-white'>
        <div className='flex h-fit w-full flex-col items-center'>
          <h2 className='z-10 font-primary text-sm font-semibold sm:text-lg xl:text-2xl'>
            <span className='text-cred'>TEDx</span>ITS 2023 Pre Event 3
          </h2>
          <h1 className='relative z-20 font-baron text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
            <Image
              src={titleDecoration1}
              alt='Title Decoration'
              className='absolute -right-5 -top-3 z-20 h-10 w-10 md:-top-1 xl:top-1 xl:-right-6 xl:scale-150'
              placeholder='blur'
            />
            <Image
              src={titleDecoration2}
              alt='Title Decoration'
              className='absolute -left-3  top-6 h-10  w-10 md:top-10 lg:top-12 xl:top-16 xl:-left-2 xl:scale-150'
              placeholder='blur'
            />
            <div className='inline-flex items-end whitespace-nowrap'>
              PR
              <Image
                src={beyondOrnament}
                alt='decoration'
                placeholder='blur'
                className='h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-14 lg:w-14 xl:h-16 xl:w-16'
              />
              JECT 2073
            </div>
          </h1>
          <h1 className='z-10 mt-1 font-primary text-base font-semibold italic sm:mt-3 sm:text-xl lg:text-xl xl:mt-5 xl:text-3xl'>
            Dystopia
          </h1>
        </div>
        <div className='mt-14 flex h-fit items-center justify-center gap-7 sm:mt-24 md:gap-11 xl:gap-16 '>
          <Link
            className='z-10 cursor-pointer rounded-lg border-[2.2px] border-cgreen px-2 duration-300 hover:-translate-y-3 hover:scale-125 xl:rounded-2xl xl:border-[3px] xl:px-3'
            href='/ticketPE3/benefit'
          >
            <h1 className='font-primary text-xs font-medium xl:text-base'>
              Benefits
            </h1>
          </Link>
        </div>
        <Link href='/dashboard' prefetch>
          <h1 className='relative z-10 mt-24 cursor-pointer font-quaker text-base font-medium duration-300 hover:-translate-y-2 hover:scale-125 sm:mt-12 sm:text-xl md:text-2xl xl:text-3xl'>
            <Image
              src={titleDecoration3}
              alt='Title Decoration'
              className='absolute -right-5 -top-3 h-10 w-10 xl:scale-150'
              placeholder='blur'
            />
            Experience The Future Now!
          </h1>
        </Link>
        <h2 className='z-10 mt-16 font-primary text-xs font-normal xl:mt-20 xl:text-lg'>
          Contact Person
        </h2>
        <h3 className='z-10 font-primary text-[0.5rem] font-normal sm:text-xs xl:text-lg'>
          LINE ID : knytlth (Kinaya) | WhatsApp : 085836649611 (Kinaya)
        </h3>
      </div>

      {/* Desktop Background Ornament */}
      <Image
        src={rightBg}
        alt='Right Ornament'
        className='absolute -bottom-20 -left-28 z-10 hidden w-[360px] rotate-180 sm:block md:-bottom-24 md:w-[400px] xl:-left-32 xl:w-[450px]'
        placeholder='blur'
      />
      <Image
        src={leftBg}
        alt='Left Ornament'
        className='absolute -top-24 -right-72 z-10 hidden w-[750px] sm:block md:-right-96 md:w-[900px] lg:-top-32 xl:w-[930px]'
        placeholder='blur'
      />

      {/* Mobile Background Ornament */}
      <div className='absolute bottom-24 -left-44 z-0 h-1/2 w-full'>
        <Image
          src={leftBgMobile}
          alt='Left Ornament Mobile'
          className='absolute z-10 block sm:hidden'
          style={{ objectFit: 'contain' }}
          fill
          placeholder='blur'
        />
      </div>
      <div className='absolute -bottom-20 -right-40 z-0 h-1/2 w-full'>
        <Image
          src={rightBotBgMobile}
          alt='Right Ornament Mobile'
          className='absolute z-10 block scale-150 sm:hidden'
          style={{ objectFit: 'contain' }}
          fill
          placeholder='blur'
        />
      </div>
      <div className='absolute -top-16 -right-44 z-0 h-1/2 w-full'>
        <Image
          src={rightTopBgMobile}
          alt='Right Ornament Mobile'
          className='absolute z-0 block h-1/2 w-full scale-90 sm:hidden'
          style={{ objectFit: 'contain' }}
          fill
          placeholder='blur'
        />
      </div>

      {/* Background Property */}
      <div className='absolute top-4 -left-20 z-0 w-full sm:top-6 sm:-left-56 lg:-left-64 xl:-left-[28rem]'>
        <Image
          src={satellite}
          alt='Satellite'
          className='absolute h-[70px] w-full sm:h-[80px] xl:h-[100px]'
          style={{ objectFit: 'contain' }}
          placeholder='blur'
        />
      </div>
      <div className='absolute bottom-40 -left-16 z-0 w-full sm:bottom-56 sm:left-64 md:left-72 xl:left-[28rem]'>
        <Image
          src={spaceShuttle}
          alt='Space Shuttle'
          className='absolute h-[55px] w-full'
          style={{ objectFit: 'contain' }}
          placeholder='blur'
        />
      </div>
      <div className='absolute bottom-32 -left-6 z-0 w-full sm:bottom-40 sm:left-72 md:left-80 xl:left-[28rem]'>
        <Image
          src={astronaut}
          alt='Astronaut'
          className='absolute h-[45px] w-full'
          style={{ objectFit: 'contain' }}
          placeholder='blur'
        />
      </div>
    </div>
  );
}
