'use client';
import Image from 'next/image';
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// css modules
import 'swiper/swiper-bundle.css';

import carouselBtn from '~/images/icons/CarouselNav.png';
import SevenYears from '~/images/landing/7-years-later.png';
import FiftyYears from '~/images/landing/50-years-later.png';
import carouselBg from '~/images/landing/bg-carousel.png';
import leftCarouselBg from '~/images/landing/left-carousel.webp';
import Tommorow from '~/images/landing/tommorow.png';

const carouselData = [
  {
    name: 'Befriend The Trauma',
    titleComponent: (
      <>
        Befriend <br /> The Trauma
      </>
    ),
    descriptionComponent: (
      <>
        The art of letting go and <br /> embracing the past.
      </>
    ),
    title: 'Befriend The Trauma',
    description: 'The art of letting go and embracing the past.',
    image: Tommorow,
  },
  {
    name: 'Embrace The Unknown',
    titleComponent: (
      <>
        Embrace <br /> The Unknown
      </>
    ),
    descriptionComponent: (
      <>
        The drive and spirit of youth <br /> to seek new opportunities <br />{' '}
        and experiences.
      </>
    ),
    title: 'Embrace The Unknown',
    description:
      'The drive and spirit of youth to seek new opportunities and experiences.',
    image: SevenYears,
  },
  {
    name: 'Imagine The Unimagineable',
    titleComponent: (
      <>
        Imagine <br /> The Unimaginable
      </>
    ),
    descriptionComponent: (
      <>
        A vast world of endless possibilities <br /> and an unimaginable future.
      </>
    ),
    title: 'Imagine The Unimaginable',
    description:
      'A vast world of endless possibilities and an unimaginable future.',
    image: FiftyYears,
  },
];

export default function Carousel() {
  return (
    <section className='sm:h-screen'>
      {/* desktop view */}
      <div className='relative hidden w-screen flex-col items-center justify-center pt-6 lg:flex lg:flex-row'>
        <div className='relative z-20 flex max-w-screen-lg flex-col items-center justify-center p-3 lg:max-w-6xl lg:flex-row'>
          <Swiper
            effect='fade'
            loop={true}
            allowTouchMove={false}
            navigation={{
              nextEl: '#button-next-swiper',
              prevEl: '#button-prev-swiper',
            }}
            modules={[EffectFade, Navigation]}
            className='mySwiper z-[999] h-[576px]'
          >
            {carouselData.map((item, index) => (
              <SwiperSlide key={index} className='relative z-[999]'>
                <div className='flex h-full flex-col justify-center space-y-6'>
                  <h2 className='relative z-[999] pl-8 font-quaker uppercase text-cwhite lg:text-5xl'>
                    {item.titleComponent}
                  </h2>
                  <p className='relative z-[999] pl-8 text-cred lg:text-2xl'>
                    {item.descriptionComponent}
                  </p>
                  <div className='absolute right-0 z-10'>
                    <Image
                      src={leftCarouselBg}
                      alt='left-carousel-bg'
                      className='h-[616px] w-full'
                      placeholder='blur'
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
              prevEl: '#button-prev-swiper',
            }}
            modules={[Navigation]}
            className='mySwiper !relative !-z-[999]'
          >
            {carouselData.map((item, index) => (
              <SwiperSlide
                key={index}
                className='!relative !-z-[999] max-w-xl px-8 lg:px-0'
              >
                <div className='!relative !-z-[999]'>
                  <Image src={item.image} alt={item.name} placeholder='blur' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='text-cwhite'>
            <button id='button-next-swiper' className='absolute right-5 z-50'>
              <Image
                src={carouselBtn}
                className='w-12'
                alt='next-btn'
                placeholder='blur'
              />
            </button>
          </div>
        </div>
        <Image
          src={carouselBg}
          alt='bg-carousel'
          className='absolute h-full w-full object-contain'
          placeholder='blur'
        />
      </div>

      {/* mobile view */}
      <div className='relative top-0 block w-screen pt-7 lg:hidden '>
        <Swiper
          loop={true}
          navigation={{
            nextEl: '#button-next-swiper-2',
            prevEl: '#button-prev-swiper-2',
          }}
          modules={[Navigation]}
        >
          {carouselData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='p-4'>
                <div className='flex flex-col gap-y-3 rounded-md bg-cgray p-4'>
                  <div>
                    <Image
                      src={item.image}
                      alt={item.name}
                      placeholder='blur'
                      className='rounded-xl'
                    />
                  </div>
                  <div className='rounded-xl bg-cblack p-4'>
                    <h2 className='text-center font-quaker text-3xl text-cwhite'>
                      {item.title}
                    </h2>
                    <p className='text-center text-lg text-cred'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='text-cwhite'>
          <button
            id='button-prev-swiper-2'
            className='absolute top-0 bottom-0 left-5 z-20'
          >
            <Image
              src={carouselBtn}
              className='w-10 rotate-180'
              alt='prev-btn'
              placeholder='blur'
            />
          </button>
          <button
            id='button-next-swiper-2'
            className='absolute top-0 bottom-0 right-5 z-20'
          >
            <Image
              src={carouselBtn}
              className='w-10'
              alt='next-btn'
              placeholder='blur'
            />
          </button>
        </div>
      </div>
    </section>
  );
}
