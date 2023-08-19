'use client';
import Image from 'next/image';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// css modules
import 'swiper/swiper-bundle.css';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';

import clsxm from '@/utils/clsxm';

import carouselBtn from '~/images/icons/CarouselNav.png';
import SevenYears from '~/images/landing/7-years-later.png';
import FiftyYears from '~/images/landing/50-years-later.png';
import Adhitia from '~/images/landing/post-event/adhitia.png';
import Jehian from '~/images/landing/post-event/jehian.png';
import Kennard from '~/images/landing/post-event/kennard.png';
import Novi from '~/images/landing/post-event/novi.png';
import Ory from '~/images/landing/post-event/ory.png';
import Prasetya from '~/images/landing/post-event/prasetya.png';
import Premana from '~/images/landing/post-event/premana.png';
import ProfBadri from '~/images/landing/post-event/prof-badri.png';
import Tommorow from '~/images/landing/tommorow.png';

// eslint-disable-next-line unused-imports/no-unused-vars
const oldCarouselData = [
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

const carouselData = [
  {
    name: 'Inside The Mind of a Master Overthinker',
    titleComponent: <>Inside The Mind of a Master Overthinker</>,
    descriptionComponent: <>Clara Lourdessa Oryza Emmanuella</>,
    title: 'Inside The Mind of a Master Overthinker',
    description: 'Clara Lourdessa Oryza Emmanuella',
    image: Ory, // Replace with actual image URL
    href: 'https://www.youtube.com/watch?v=zyRAOBw1OtY',
  },
  {
    name: 'Songs from Your Stories',
    titleComponent: <>Songs from Your Stories</>,
    descriptionComponent: <>Adhitia Sofyan</>,
    title: 'Songs from Your Stories',
    description: 'Adhitia Sofyan',
    image: Adhitia, // Replace with actual image URL
    href: 'https://www.youtube.com/watch?v=HhKH3dcp5cM',
  },
  {
    name: 'Missions, Not Majors',
    titleComponent: <>Missions, Not Majors</>,
    descriptionComponent: <>Jehian Panangian Sijabat</>,
    title: 'Missions, Not Majors',
    description: 'Jehian Panangian Sijabat',
    image: Jehian, // Replace with actual image URL
    href: 'https://www.youtube.com/watch?v=uQOXaAWd3mg',
  },
  {
    name: 'Being Different is Meant to be Scary',
    titleComponent: <>Being Different is Meant to be Scary</>,
    descriptionComponent: <>Kennard Mahib Bariumanto</>,
    title: 'Being Different is Meant to be Scary',
    description: 'Kennard Mahib Bariumanto',
    image: Kennard, // Replace with actual image URL
    href: 'https://www.youtube.com/watch?v=_ghR73U0fyo',
  },
  {
    name: 'How Can Digital Transitions Bridge Equality and Sustainability?',
    titleComponent: (
      <>How Can Digital Transitions Bridge Equality and Sustainability?</>
    ),
    descriptionComponent: <>Prasetya Dwicahya</>,
    title: 'How Can Digital Transitions Bridge Equality and Sustainability?',
    description: 'Prasetya Dwicahya',
    image: Prasetya, // Replace with actual image URL
    href: 'https://www.youtube.com/watch?v=gfijZDnyTi8',
  },
  {
    name: 'Demographic Bonuses: A Bull or a Bush?',
    titleComponent: <>Demographic Bonuses: A Bull or a Bush?</>,
    descriptionComponent: <>Prof. Badri Munir Sukoco, SE. MBA. PhD.</>,
    title: 'Demographic Bonuses: A Bull or a Bush?',
    description: 'Prof. Badri Munir Sukoco, SE. MBA. PhD.',
    image: ProfBadri, // Replace with actual image URL
    href: 'https://www.youtube.com/watch?v=UXduiJSQtH8',
  },
  {
    name: 'Cosmic Purpose: Meaning of Life Through the Lens of Astronomy',
    titleComponent: (
      <>Cosmic Purpose: Meaning of Life Through the Lens of Astronomy</>
    ),
    descriptionComponent: <>Premana W. Premadi, Ph.D.</>,
    title: 'Cosmic Purpose: Meaning of Life Through the Lens of Astronomy',
    description: 'Premana W. Premadi, Ph.D.',
    image: Premana, // Replace with actual image URL
    href: 'https://www.youtube.com/watch?v=HladEoo-OjU',
  },
  {
    name: 'How The Cities are Sinking',
    titleComponent: <>How The Cities are Sinking</>,
    descriptionComponent: <>Novi Andriany Teguh, ST, M.Sc</>,
    title: 'How The Cities are Sinking',
    description: 'Novi Andriany Teguh, ST, M.Sc',
    image: Novi, // Replace with actual image URL
    href: 'https://www.youtube.com/watch?v=yY6loiKiWjU',
  },
];

export default function Carousel() {
  return (
    <section className='h-[50%]'>
      {/* desktop view */}
      <div className='relative hidden w-screen flex-col items-center justify-center pt-6 lg:flex lg:flex-row'>
        <div className=' relative z-20 flex w-full max-w-screen-lg flex-col items-center justify-center bg-cgray p-3 lg:max-w-6xl lg:flex-row'>
          <div className='absolute -left-3 bottom-6 z-40 h-32 w-4 rounded-l-md bg-cgray'></div>
          <div className='absolute -bottom-3 left-6 z-40 h-4 w-32 rounded-b-md bg-cgray'></div>
          <div className='absolute -right-3 top-6 z-40 h-32 w-4 rounded-r-md bg-cgray'></div>
          <div className='absolute -top-3 right-2/3 z-40 h-4 w-64  rounded-t-md bg-cgray'></div>
          <Swiper
            effect='fade'
            loop={true}
            autoplay={{ disableOnInteraction: false }}
            allowTouchMove={false}
            navigation={{
              nextEl: '#button-next-swiper',
              prevEl: '#button-prev-swiper',
            }}
            modules={[EffectFade, Navigation, Autoplay]}
            className='mySwiper  z-[999] h-[576px] w-full'
          >
            {carouselData.map((item, index) => (
              <SwiperSlide key={index} className=' relative z-[999]'>
                <div className='noisy flex h-full flex-col justify-center space-y-6 border-r-[12px] border-cgray bg-black'>
                  <h2 className='relative z-[999] pl-8 font-quaker uppercase text-cwhite lg:text-5xl'>
                    {item.titleComponent}
                  </h2>
                  <p className='relative z-[999] pb-10 pl-8 text-cred lg:text-2xl'>
                    {item.descriptionComponent}
                  </p>
                  <UnstyledLink
                    href={item.href}
                    className={clsxm(
                      'relative z-[999] pl-8 text-cwhite lg:text-2xl'
                    )}
                    openNewTab
                  >
                    <Button className='px-8'>
                      <p className='font-primary'>Watch Now</p>
                    </Button>
                  </UnstyledLink>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            loop={true}
            allowTouchMove={false}
            autoplay={{ disableOnInteraction: false }}
            navigation={{
              nextEl: '#button-next-swiper',
              prevEl: '#button-prev-swiper',
            }}
            modules={[Navigation, Autoplay]}
            className='mySwiper !relative !-z-[999] h-[576px] w-full'
          >
            {carouselData.map((item, index) => (
              <SwiperSlide
                key={index}
                className='!relative !-z-[999] h-full w-full max-w-xl'
              >
                <div className='!relative !-z-[999] h-full w-full pl-4'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    placeholder='blur'
                    className='absolute object-cover'
                    fill
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
                  />
                </div>
              </SwiperSlide>
            ))}

            <button
              id='button-next-swiper'
              className='absolute inset-y-0 right-5 z-50'
            >
              <Image
                src={carouselBtn}
                className='w-12'
                alt='next-btn'
                placeholder='blur'
              />
            </button>
            <button
              id='button-prev-swiper'
              className='absolute inset-y-0 left-5 z-50 rotate-180'
            >
              <Image
                src={carouselBtn}
                className='w-12'
                alt='next-btn'
                placeholder='blur'
              />
            </button>
          </Swiper>
        </div>
      </div>

      {/* mobile view */}
      <div className='relative top-0 block h-full w-screen pt-7 lg:hidden '>
        <Swiper
          loop={true}
          className='h-full'
          autoplay={{ disableOnInteraction: false }}
          navigation={{
            nextEl: '#button-next-swiper-2',
            prevEl: '#button-prev-swiper-2',
          }}
          modules={[Navigation, Autoplay]}
        >
          {carouselData.map((item, index) => (
            <SwiperSlide key={index} className='h-full'>
              <div className='h-full p-4'>
                <div className='flex max-h-full flex-col gap-y-3 rounded-md bg-cgray p-4'>
                  <div className='max-h-[66%] overflow-hidden'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      placeholder='blur'
                      className='rounded-xl'
                      sizes='(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw'
                    />
                  </div>
                  <div className='rounded-xl bg-cblack p-4'>
                    <h2 className='text-center font-quaker text-2xl text-cwhite'>
                      {item.title}
                    </h2>
                    <p className='pb-4 text-center text-lg text-cred'>
                      {item.description}
                    </p>
                    <UnstyledLink
                      href={item.href}
                      className='relative z-[999] flex justify-center py-4'
                      openNewTab
                    >
                      <Button className='py-2 px-5'>
                        <p className='font-primary'>Watch Now</p>
                      </Button>
                    </UnstyledLink>
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
              className='w-10 '
              alt='next-btn'
              placeholder='blur'
            />
          </button>
        </div>
      </div>
    </section>
  );
}
