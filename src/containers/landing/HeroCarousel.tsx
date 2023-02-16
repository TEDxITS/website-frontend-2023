'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Navigation, Pagination, EffectFade, Swiper as SwiperType, Controller, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tommorow from '~/images/landing/tommorow.png'
import SevenYears from '~/images/landing/7-years-later.png'
import FiftyYears from '~/images/landing/50-years-later.png'
import BgWhats from '~/images/landing/bg-whats.webp'
import FloatWhats from '~/images/landing/bg-whats2.webp'
import BgGlass1 from '~/images/landing/bg-glass.webp'
import BgGlass2 from '~/images/landing/bg-glass2.webp'

// css modules
import 'swiper/swiper-bundle.css';

const carouselData = [
  {
    name: 'Befriend The Trauma',
    titleComponent: <>Befriend <br /> The Trauma</>,
    descriptionComponent: <>The art of letting go and <br /> embracing the past.</>,
    image: Tommorow,
  },
  {
    name: 'Embrace The Unknown',
    titleComponent: <>Embrace <br /> The Unknown</>,
    descriptionComponent: <>The drive and spirit of youth <br /> to seek new opportunities <br /> and experiences.</>,
    image: SevenYears,
  },
  {
    name: 'Imagine The Unimagineable',
    titleComponent: <>Imagine <br /> The Unimaginable</>,
    descriptionComponent: <>A vast world of endless possibilities <br /> and an unimaginable future.</>,
    image: FiftyYears,
  }
]

interface IconProps {
  src?: string;
  srcOnHover?: string;
  alt?: string;
  addClass?: string;
  clickFn?: () => any;
}

const Icon: React.FC<IconProps> = ({ src, srcOnHover, alt, addClass, clickFn }) => (
  <img
    src={src}
    alt={alt}
    className={addClass}
    onMouseOver={(e): void => {
      srcOnHover && (e.currentTarget.src = srcOnHover);
    }}
    onMouseOut={(e): void => {
      srcOnHover && (e.currentTarget.src = src || '');
    }}
    onClick={clickFn}
  />
);


export default function HeroCarousel() {
  const [isShowing, setIsShowing] = useState(false);
  const [isShowingCS, setIsShowingCS] = useState(false);

  return (
    <section className="h-screen w-full flex-col absolute flex justify-start items-center">
      {/* desktop view */}
      <div className='lg:flex lg:flex-row flex-col justify-center items-center pt-6 w-screen relative hidden'>
        <div className='flex lg:flex-row flex-col justify-center items-center z-20 max-w-screen-lg lg:max-w-6xl relative'>
          <Swiper
            effect={"fade"}
            loop={true}
            allowTouchMove={false}
            navigation={{
              nextEl: '#button-next-swiper',
              prevEl: '#button-prev-swiper'
            }}
            modules={[EffectFade, Navigation]}
            className="mySwiper h-[576px] z-[999]"
          >

            {carouselData.map((item, index) => (
              <SwiperSlide key={index} className="relative z-[999]">
                <div className='flex flex-col space-y-6 justify-center h-full'>
                  <h2 className='text-cwhite pl-8 lg:text-5xl relative z-[999] uppercase font-quaker'>
                    {item.titleComponent}
                  </h2>
                  <p className='text-cred pl-8 lg:text-2xl relative z-[999]'>
                    {item.descriptionComponent}
                  </p>
                  <div className={'absolute right-0 z-10'}>
                    <img
                      src={'/images/landing/left-carousel.webp'}
                      alt={'left-carousel-bg'}
                      className={`w-full h-[616px]`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            loop={true}
            allowTouchMove={false}
            navigation={{
              nextEl: '#button-next-swiper',
              prevEl: '#button-prev-swiper'
            }}
            modules={[Navigation]}
            className="mySwiper !-z-[999] !relative"
          >
            {carouselData.map((item, index) => (
              <SwiperSlide key={index} className="max-w-xl lg:px-0 px-8 !relative !-z-[999]">
                <div className='!relative !-z-[999]'>
                  <Image src={item.image} alt={item.name} width={576} height={576} className='!relative !-z-[999]' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='text-cwhite'>
            {/* <button id="button-prev-swiper">
            <img src="/images/icons/CarouselNav.png" className='w-12 rotate-180' alt="prev-btn" />
          </button> */}
            <button id="button-next-swiper" className='absolute right-5 z-50'>
              <img src="/images/icons/CarouselNav.png" className='w-12 ' alt="next-btn" />
            </button>
          </div>

        </div>
        <div className='-z-10 absolute p-40'>
          <img src="/images/landing/bg-carousel.webp" alt="bg-carousel" className='w-full' />
        </div>
      </div>

      {/* mobile view */}
      <div className='relative w-screen pt-4 top-0 lg:hidden block '>
        <Swiper
          loop={true}
          navigation={{
            nextEl: '#button-next-swiper-2',
            prevEl: '#button-prev-swiper-2'
          }}
          modules={[Navigation]}
        >
          {carouselData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col space-y-6 p-8'>
                <div>
                  <h2 className='text-3xl font-baron text-cwhite'>
                    {item.titleComponent}
                  </h2>
                  <p className='text-lg text-cred'>
                    {item.descriptionComponent}
                  </p>
                </div>
                <div>
                  <Image src={item.image} alt={item.name} width={576} height={576} className='rounded-xl' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='text-cwhite'>
          <button id="button-prev-swiper-2" className='absolute top-0 bottom-0 left-5 z-50'>
            <img src="/images/icons/CarouselNav.png" className='w-10 rotate-180' alt="prev-btn" />
          </button>
          <button id="button-next-swiper-2" className='absolute top-0 bottom-0 right-5 z-50'>
            <img src="/images/icons/CarouselNav.png" className='w-10 ' alt="next-btn" />
          </button>
        </div>
      </div>

      <div className='mt-36 lg:mt-64 flex flex-col items-center w-screen relative'>
        <h3 className='font-baron text-3xl lg:text-5xl text-cwhite pb-12 lg:pb-24 text-center'>WHAT'S HAPPENING THIS YEAR?</h3>
        <p className='text-cwhite text-base lg:text-xl text-center px-8 lg:max-w-2xl'>
          We’re aiming to reach further beyond the skies, the galaxy <span className='text-cred font-semibold'>to be exact.</span> This year, you will embark on a journey with the voyagers to seek <span className='text-cred font-semibold'>“the uncertainty of the unknown”</span> with fresh and out-of-the box ideas.
          <br /> <br />
          It's time to launch and discover what the future holds, <span className='text-cred font-semibold'>for better</span> or <span className='text-cred font-semibold'>for worse.</span>
        </p>
        <Image src={BgWhats} alt="bg-whats" className='absolute top-8 -z-[1] h-96 w-full lg:max-w-4xl' />
        <Image src={FloatWhats} alt="float-whats" className='absolute bottom-0 lg:top-0 -z-[2] -translate-y-36' />

      </div>

      <div className='mt-24 lg:mt-[24rem] relative w-screen flex flex-col items-center justify-center'>
        <h3 className={`text-cblue text-4xl lg:text-7xl font-baron text-center mt-24 transition duration-300`}>Here We Go!</h3>
        <div className='grid grid-cols-2 lg:grid-cols-3 h-full gap-4 lg:gap-x-24 lg:gap-y-8 max-w-6xl mt-8'>
          <div className='lg:w-96 h-48 lg:h-96 border-dashed border-4 border-cblack relative group flex justify-center items-end'>
            <a href="#">
              <img src="/images/landing/rockets/red1.png" alt="red1" onClick={() => setIsShowing((isShowing) => !isShowing)} className='hover:-translate-y-2 transition duration-300' />
            </a>
            <a href="#" className='absolute opacity-0 group-hover:opacity-100 font-baron -translate-y-4 text-lg lg:text-2xl transition duration-300 text-cwhite '>
              Try Me!
            </a>
          </div>
          <div className='lg:w-96 h-48 lg:h-96 border-dashed border-4 border-cblack relative flex justify-center items-end group '>
            <img src="/images/landing/rockets/gray2.png" alt="gray2" className='group-hover:-translate-y-2 transition duration-300 absolute' />
            <Icon src="/images/landing/locks/locked.png" srcOnHover="/images/landing/locks/unlock.png" alt="Description" addClass='absolute' clickFn={() => setIsShowingCS((isShowingCS) => !isShowingCS)} />
            <a href="#" className='absolute opacity-0 group-hover:opacity-100 font-baron -translate-y-4 text-lg lg:text-2xl transition duration-300 text-cwhite '>
              Coming Soon!
            </a>
          </div>
          <div className='lg:w-96 h-48 lg:h-96 border-dashed border-4 border-cblack relative group flex justify-center items-end'>
            <img src="/images/landing/rockets/gray3.png" alt="gray3" className='group-hover:-translate-y-2 transition duration-300 absolute' />
            <Icon src="/images/landing/locks/locked.png" srcOnHover="/images/landing/locks/unlock.png" alt="Description" addClass='absolute ' clickFn={() => setIsShowingCS((isShowingCS) => !isShowingCS)} />
            <a href="#" className='absolute opacity-0 group-hover:opacity-100 font-baron -translate-y-4 text-lg lg:text-2xl transition duration-300 text-cwhite '>
              Coming Soon!
            </a>
          </div>
          <div className='lg:w-96 h-48 lg:h-96 border-dashed border-4 border-cblack relative group flex justify-center items-end'>
            <img src="/images/landing/rockets/gray4.png" alt="gray4" className='group-hover:-translate-y-2 transition duration-300 absolute' />
            <Icon src="/images/landing/locks/locked.png" srcOnHover="/images/landing/locks/unlock.png" alt="Description" addClass='absolute' clickFn={() => setIsShowingCS((isShowingCS) => !isShowingCS)} />
            <a href="#" className='absolute opacity-0 group-hover:opacity-100 font-baron -translate-y-4 text-lg lg:text-2xl transition duration-300 text-cwhite '>
              Coming Soon!
            </a>

          </div>
          <div className='lg:w-96 h-48 lg:h-96 border-dashed border-4 border-cblack relative group flex justify-center items-end'>
            <img src="/images/landing/rockets/gray5.png" alt="gray5" className='group-hover:-translate-y-2 transition duration-300 absolute' />
            <Icon src="/images/landing/locks/locked.png" srcOnHover="/images/landing/locks/unlock.png" alt="Description" addClass='absolute' clickFn={() => setIsShowingCS((isShowingCS) => !isShowingCS)} />
            <a href="#" className='absolute opacity-0 group-hover:opacity-100 font-baron -translate-y-4 text-lg lg:text-2xl transition duration-300 text-cwhite '>
              Coming Soon!
            </a>

          </div>
          <div className='lg:w-96 h-48 lg:h-96 border-dashed border-4 border-cblack relative group flex justify-center items-end'>
            <img src="/images/landing/rockets/gray6.png" alt="gray6" className='group-hover:-translate-y-2 transition duration-300 absolute' />
            <Icon src="/images/landing/locks/locked.png" srcOnHover="/images/landing/locks/unlock.png" alt="Description" addClass='absolute' clickFn={() => setIsShowingCS((isShowingCS) => !isShowingCS)} />
            <a href="#" className='absolute opacity-0 group-hover:opacity-100 font-baron -translate-y-4 text-lg lg:text-2xl transition duration-300 text-cwhite '>
              Coming Soon!
            </a>

          </div>
        </div>
        <h3 className={`text-cwhite text-center text-4xl lg:text-7xl font-baron transition duration-300`}>COMING SOON</h3>
        <Image
          src={BgGlass1}
          alt={'bg-glass'}
          className='absolute top-0 left-0 z-[-1] w-screen opacity-80 lg:block hidden'
          placeholder='blur'
        />
        <Image
          src={BgGlass2}
          alt={'bg-glass'}
          className='absolute top-0 left-0 z-[-1] w-screen opacity-80 lg:hidden block'
          placeholder='blur'
        />

      </div>

    </section >
  )
}
