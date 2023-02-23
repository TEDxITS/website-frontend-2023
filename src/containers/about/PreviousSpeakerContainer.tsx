'use client';
import Image from 'next/image';
import { useState } from 'react';

import { Modal } from '@/components/modal/Modal';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import button from '~/images/about/section3/button.png';
import frame from '~/images/about/section3/frame.png';
import nameframe from '~/images/about/section3/nameframe.png';
import props from '~/images/about/section3/props.png';
import speaker_1 from '~/images/about/section3/speaker1.png';
import speaker_2 from '~/images/about/section3/speaker2.png';
import speaker_3 from '~/images/about/section3/speaker3.png';
import speaker_4 from '~/images/about/section3/speaker4.png';
import speaker_5 from '~/images/about/section3/speaker5.png';
import speaker_6 from '~/images/about/section3/speaker6.png';
import speaker_7 from '~/images/about/section3/speaker7.png';
import speaker_8 from '~/images/about/section3/speaker8.png';

export default function PreviousSpeakerContainer() {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <RandomStarfieldContainer
      className='h-[300vh] bg-black max-lg:h-[300vh] max-md:h-[250vh]'
      zAxis={2}
    >
      <div className='absolute z-10 h-full w-full bg-transparent-stars bg-cover'>
        <div className='absolute z-20 h-full w-full md:px-5'>
          <Image
            src={props}
            alt=''
            className='absolute right-[-50px] bottom-0 h-[200vh] w-[400vw] max-lg:top-96 max-lg:scale-[2] '
          />
          <h1 className='relative mt-40 p-3 font-primary text-5xl capitalize tracking-wide text-cred after:absolute after:bottom-[-5px] after:left-4 after:h-[2px] after:w-1/4 after:bg-cwhite after:content-[""] max-md:text-3xl max-md:after:bottom-1'>
            our previous speaker
          </h1>
          <section className='min-lg:pt-5 flex h-full w-full translate-y-[-250px] flex-col max-lg:translate-y-[-100px] max-md:translate-y-[-105px] '>
            <div className='flex h-3/4 w-full '>
              <div className='m-auto grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-lg:gap-36 max-md:gap-5 2xl:gap-36'>
                {[
                  {
                    img: speaker_8,
                    link: '#',
                    title: 'Women Right’s Fighter',
                    desc: '“Debunking the Virginity Myth”',
                  },
                  {
                    img: speaker_7,
                    link: 'https://www.youtube.com/watch?v=NECkw6bHgDQ',
                    title: 'Jurnalist of Project Multituli',
                    desc: '“Underprivileged Gen Z : Young, Woke, and Broke”',
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
                    title: 'Co-Founder of AjakGerak ',
                    desc: '“Stupid is Not Always Stupid”',
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
                    link: 'https://www.youtube.com/watch?v=GyucHZjnnwA&t=139s',
                    title: 'Politician ',
                    desc: '“The Price of Truth : Justice Behind Politics”',
                  },
                  {
                    img: speaker_1,
                    link: 'https://www.youtube.com/watch?v=Nz5qPlkzmDs',
                    title: 'Co-Founder of Ibunda.id ',
                    desc: '“My Parents, Everything I Don’t Want to Become”',
                  },
                ].map((items, i) => {
                  return (
                    <div
                      key={i}
                      className='relative mt-10 flex h-96 w-full justify-center max-md:h-64'
                    >
                      <div className='relative flex flex-col '>
                        <Image
                          src={items.img}
                          alt=''
                          className='object- h-full w-full scale-125 cursor-pointer object-cover duration-500 hover:scale-[1.3] max-md:h-[40vh] '
                          onClick={() => window.open(items.link, '_blank')}
                        />
                        <div className='relative'>
                          <div className='absolute top-0 left-0 flex w-full justify-center'>
                            <div
                              className='z-10 w-[250px] translate-y-[40px] flex-col items-center text-center font-primary text-xs text-white max-lg:bottom-[-100px] max-lg:left-16 max-lg:w-auto max-lg:text-lg max-md:left-[10px] max-md:w-[175px] md:w-[225px]
                            md:translate-y-10
                            lg:translate-y-7
                            '
                            >
                              <p
                                className='max-lg:text-lg max-md:text-xs 
                              lg:text-sm
                              2xl:text-xl
                              '
                              >
                                {items.title}
                              </p>
                              <p
                                className='text-xs font-thin leading-tight max-md:text-[9px] md:text-[15px] 
                              lg:text-[11px]
                              2xl:text-sm'
                              >
                                {items.desc}
                              </p>
                            </div>
                          </div>
                          <Image
                            src={nameframe}
                            alt=''
                            className='-z-30 scale-x-125 scale-y-[1.6] max-md:translate-y-5 max-md:scale-y-[1.75] max-md:scale-x-[1.3]
                            md:scale-x-110
                            lg:scale-x-[1.4]
                            '
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='justify- flex h-1/4 w-full flex-col items-center    max-md:h-36 lg:translate-y-[-100px]'>
              <div
                className='shadow-4xl flex h-36 w-1/3 translate-y-[-100px] flex-col items-center justify-evenly rounded-3xl bg-[rgba(255,255,255,.1)] p-7 drop-shadow-lg backdrop-blur max-lg:mt-[100px] max-lg:w-1/2 max-md:w-4/5 md:w-1/2 2xl:mt-[-100px]
            '
              >
                <h1 className='font-baron text-sm text-cwhite max-md:text-[10px]'>
                  With the accumulated total views of
                </h1>
                <h2 className='font-baron text-8xl text-cred max-md:text-6xl'>
                  239.000+
                </h2>
              </div>
              <Image
                src={frame}
                alt=''
                className='w-[720px] translate-y-[-100px] lg:w-[1000px]'
              />
              <button
                onClick={() => setIsPlay(!isPlay)}
                className='relative w-96 translate-y-[-400px] max-md:flex max-md:translate-y-[-260px] max-md:items-center max-md:justify-center lg:translate-y-[-450px]'
              >
                <Image src={button} alt='' className='max-md:w-64' />
                <h1 className='absolute bottom-[60px] left-[110px]  font-baron text-3xl text-white max-md:left-36 max-md:bottom-[40px] max-md:text-xl'>
                  Watch Me!
                </h1>
              </button>
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
    </RandomStarfieldContainer>
  );
}
