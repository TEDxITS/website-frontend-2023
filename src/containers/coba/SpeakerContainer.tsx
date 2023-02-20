'use client';
import Image from 'next/image';
import { useState } from 'react';

import { Modal } from '@/components/modal/Modal';

import button from '~/images/about/section3/button.png';
import frame from '~/images/about/section3/frame-2.png';
import speaker_1 from '~/images/about/section3/temp/speaker1.png';
import speaker_2 from '~/images/about/section3/temp/speaker2.png';
import speaker_3 from '~/images/about/section3/temp/speaker3.png';
import speaker_4 from '~/images/about/section3/temp/speaker4.png';
import speaker_5 from '~/images/about/section3/temp/speaker5.png';
import speaker_6 from '~/images/about/section3/temp/speaker6.png';
import speaker_7 from '~/images/about/section3/temp/speaker7.png';
import speaker_8 from '~/images/about/section3/temp/speaker8.png';

const speakerList = [
  {
    img: speaker_8,
    link: '#',
    title: 'Women Right’s Fighter',
    desc: '“Debunking the Virginity Myth”',
  },

  {
    img: speaker_7,
    link: 'https://www.youtube.com/watch?v=GyucHZjnnwA&t=139s',
    title: 'Politician ',
    desc: '“The Price of Truth : Justice Behind Politics”',
  },
  {
    img: speaker_6,
    link: 'https://www.youtube.com/watch?v=EsIt6y46BLo&t=125s',
    title: 'Co-Founder of AjakGerak ',
    desc: '“Stupid is Not Always Stupid”',
  },
  {
    img: speaker_5,
    link: 'https://www.youtube.com/watch?v=3GoMTSoDJAs',
    title: 'Founder @rumahsandyakala',
    desc: '“How to Say "I Need Help" Out Loud”',
  },
  {
    img: speaker_4,
    link: 'https://www.youtube.com/watch?v=cA2KxgPDWNY&t=14s',
    title: 'Stand Up Comedian',
    desc: '“Comedy and Its Emotional Intelligence”',
  },
  {
    img: speaker_3,
    link: 'https://www.youtube.com/watch?v=R3zr1gtkxIY&t=141s',
    title: 'Content Creator',
    desc: '“Rediscovering Meaning of Life through Frugal Living”',
  },
  {
    img: speaker_2,
    link: 'https://www.youtube.com/watch?v=NECkw6bHgDQ',
    title: 'Jurnalist of Project Multituli',
    desc: '“Underprivileged Gen Z : Young, Woke, and Broke”',
  },
  {
    img: speaker_1,
    link: 'https://www.youtube.com/watch?v=Nz5qPlkzmDs',
    title: 'Co-Founder of Ibunda.id ',
    desc: '“My Parents, Everything I Don’t Want to Become”',
  },
];

export default function PreviousSpeakerContainer() {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className='relative bg-transparent py-20'>
      <div className='z-10 h-full w-full'>
        <div className='px-10'>
          <h1 className='relative mb-4 p-3 font-primary text-5xl capitalize tracking-wide text-cred after:absolute after:bottom-[-5px] after:left-4 after:h-[2px] after:w-1/4 after:bg-cwhite after:content-[""] max-md:text-3xl max-md:after:bottom-1'>
            our previous speaker
          </h1>
        </div>
        <div className='layout h-full'>
          <section className='flex h-full w-full flex-col'>
            <div className=' flex w-full'>
              <div className=' m-auto grid w-full grid-cols-4 gap-2 max-lg:grid-cols-2 md:gap-6 lg:gap-10'>
                {speakerList.map((items, i) => {
                  return (
                    <div
                      key={i}
                      className=' relative flex h-96 w-full cursor-pointer flex-col justify-center transition-transform hover:scale-110 max-md:h-64'
                    >
                      <div className=' relative flex h-3/4 w-full flex-col '>
                        <Image
                          src={items.img}
                          alt=''
                          className='absolute object-contain'
                          fill
                          onClick={() => window.open(items.link, '_blank')}
                          placeholder='blur'
                        />
                      </div>
                      <div
                        className=' bw relative flex h-1/4 w-full flex-col items-center justify-center bg-cblack'
                        onClick={() => window.open(items.link, '_blank')}
                      >
                        <h2 className='text-center text-xs text-cwhite md:text-lg'>
                          {items.title}
                        </h2>
                        <p className='text-center text-xs text-cwhite '>
                          {items.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=' flex w-full flex-col items-center'>
              <div className='my-20 flex w-full flex-col items-center justify-evenly rounded-3xl bg-[rgba(255,255,255,.1)] p-4 drop-shadow-lg backdrop-blur md:w-1/2 lg:w-auto lg:p-10'>
                <h1 className='font-baron text-sm text-cwhite max-md:text-[10px]'>
                  With the accumulated total views of
                </h1>
                <h2 className='font-baron text-6xl text-cred lg:text-8xl'>
                  239.000+
                </h2>
              </div>
              <div className=' relative h-[12rem] w-full md:h-[40rem] lg:h-[40rem]'>
                <Image
                  src={frame}
                  alt=''
                  className='absolute object-contain'
                  fill
                />
                <button
                  onClick={() => setIsPlay(!isPlay)}
                  className=' absolute left-12 top-1/4 transition-transform hover:scale-110 md:top-1/3 md:left-1/4 lg:left-1/3'
                >
                  <Image src={button} alt='' className='max-md:w-64' />
                </button>
              </div>
            </div>

            <Modal isOpen={isPlay} setIsOpen={setIsPlay}>
              <iframe
                title='Embedded Video'
                src='https://drive.google.com/file/d/1XqL4VcJ0vwbEwZpzWZKt6-aaIQPR3NYn/preview'
                frameBorder='0'
                allowFullScreen
                className='h-96 w-full'
              />
            </Modal>
          </section>
        </div>
      </div>
    </div>
  );
}
