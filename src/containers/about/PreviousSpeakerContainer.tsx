'use client';
import Image from 'next/image';
import { useState } from 'react';

import { Modal } from '@/components/modal/Modal';
import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

import button from '../../assets/button.png';
import dea from '../../assets/speaker/speaker-0.png';
import adriano from '../../assets/speaker/speaker-1.png';
import haikal from '../../assets/speaker/speaker-2.png';
import gandhi from '../../assets/speaker/speaker-3.png';
import permata from '../../assets/speaker/speaker-4.png';
import samuel from '../../assets/speaker/speaker-5.png';
import aryo from '../../assets/speaker/speaker-6.png';
import lady from '../../assets/speaker/speaker-7.png';

export default function PreviousSpeakerContainer() {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <RandomStarfieldContainer className='h-[200vh] bg-black' zAxis={2}>
      <div className='absolute z-10 h-full w-full bg-transparent-stars bg-cover'>
        <div className='absolute z-20 h-full w-full bg-hue'>
          <h1 className='relative mt-5 p-3 font-primary text-5xl capitalize tracking-wide text-cred after:absolute after:bottom-[-5px] after:left-4 after:h-[2px] after:w-1/4 after:bg-cwhite after:content-[""] max-md:text-3xl max-md:after:bottom-1 '>
            our previous speaker
          </h1>
          <section className='min-lg:pt-5 flex h-full w-full flex-col'>
            <div className='flex h-3/4 w-full '>
              <div className='m-auto grid grid-cols-4 gap-10 max-lg:grid-cols-2'>
                {[
                  { img: dea, link: '' },
                  {
                    img: permata,
                    link: 'https://www.youtube.com/watch?v=NECkw6bHgDQ',
                  },
                  {
                    img: haikal,
                    link: 'https://www.youtube.com/watch?v=EsIt6y46BLo&t=125s',
                  },
                  {
                    img: gandhi,
                    link: 'https://www.youtube.com/watch?v=3GoMTSoDJAs',
                  },
                  {
                    img: adriano,
                    link: 'https://www.youtube.com/watch?v=cA2KxgPDWNY&t=14s',
                  },
                  {
                    img: samuel,
                    link: 'https://www.youtube.com/watch?v=R3zr1gtkxIY&t=141s',
                  },
                  {
                    img: aryo,
                    link: 'https://www.youtube.com/watch?v=GyucHZjnnwA&t=139s',
                  },
                  {
                    img: lady,
                    link: 'https://www.youtube.com/watch?v=Nz5qPlkzmDs',
                  },
                ].map((items, i) => {
                  return (
                    <div
                      key={i}
                      className='relative mt-5 flex h-96 w-full justify-center max-md:h-56 max-md:gap-10 '
                    >
                      <Image
                        src={items.img}
                        alt=''
                        className='h-full w-full scale-125 cursor-pointer object-cover object-center duration-500 hover:scale-150 max-md:h-[40vh] max-md:scale-125 hover:max-md:scale-125 '
                        onClick={() => window.open(items.link, '_blank')}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='justify- flex h-1/4 w-full flex-col items-center  max-md:h-36 max-md:translate-y-24'>
              <div
                className='shadow-4xl flex h-36 w-1/4 flex-col items-center justify-evenly rounded-3xl bg-[rgba(255,255,255,.25)] backdrop-blur max-lg:w-4/5 
            '
              >
                <h1 className='font-baron text-sm text-cwhite max-md:text-xs'>
                  With the accumulated total views of
                </h1>
                <h2 className='text-8xl text-cred max-md:text-7xl'>239.000+</h2>
              </div>
              <button onClick={() => setIsPlay(!isPlay)}>
                <Image src={button} alt='' />
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
