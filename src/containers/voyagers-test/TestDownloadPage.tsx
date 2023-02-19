import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { HiArrowLeft } from 'react-icons/hi';

import Button from '@/components/button/Button';
import PhotolessVoyagersCard from '@/containers/voyagers-test/card/PhotolessVoyagersCard';
import { AnimatedVoyagersCard } from '@/containers/voyagers-test/card/VoyagersCard';
import DownloadPhotolessVoyagersCard from '@/containers/voyagers-test/download/DownloadPhotolessVoyagersCard';
import DownloadVoyagersCard from '@/containers/voyagers-test/download/DownloadVoyagersCard';

import { useTestContext } from '@/context/TestContext';

import blueCard from '~/images/voyagers-test/blue-card.png';
import creamCard from '~/images/voyagers-test/cream-card.png';
import greenCard from '~/images/voyagers-test/green-card.png';
import pinkCard from '~/images/voyagers-test/pink-card.png';
import redCard from '~/images/voyagers-test/red-card.png';
import skyCard from '~/images/voyagers-test/sky-card.png';
import theOpportunist from '~/images/voyagers-test/the-opportunist.png';
import theSurvivor from '~/images/voyagers-test/the-survivor.png';
import theVisioner from '~/images/voyagers-test/the-visioner.png';
import whiteCard from '~/images/voyagers-test/white-card.png';

const cardVariant = {
  'The Survivor': [creamCard, redCard],
  'The Opportunist': [skyCard, pinkCard],
  'The Visioner': [greenCard, blueCard],
};

const characterVariant = {
  'The Survivor': theSurvivor,
  'The Opportunist': theOpportunist,
  'The Visioner': theVisioner,
};

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

export default function TestDownloadPage() {
  const {
    isPhotoUsed,
    previousStep,
    getMostAnswer,
    setFromNextPage,
    setUserPhoto,
  } = useTestContext();
  const [isCardTransitionDone, setIsCardTransitionDone] =
    React.useState<boolean>(false);
  const [isAnnouncmentPresent, setIsAnnouncmentPresent] =
    React.useState<boolean>(false);

  if (isPhotoUsed) {
    return (
      <section className='flex h-full w-full flex-col items-center justify-center p-7'>
        <div className='h-full w-full py-10'>
          <div className='flex h-full w-full items-center justify-center'>
            {isAnnouncmentPresent && (
              <p className='absolute z-40 hidden animate-bounce items-center gap-x-3 text-sm font-medium text-cwhite md:left-[2%] md:inline-flex md:text-lg lg:left-[14%] xl:left-[24%]'>
                Add Your Photo
                <span>
                  <BsArrowRight className='h-8 w-8' />
                </span>
              </p>
            )}
            <AnimatedVoyagersCard
              rotateFrom={-13}
              rotateTo={13}
              cardClassName='sm:w-[30rem] sm:h-[20rem] w-[21rem] h-[14rem]'
            />
            <AnimatedVoyagersCard
              delay={0.15}
              rotateFrom={13}
              rotateTo={-13}
              cardClassName='sm:w-[30rem] sm:h-[20rem] w-[21rem] h-[14rem]'
            />
            <AnimatedVoyagersCard
              delay={0.3}
              cardClassName='sm:w-[30rem] sm:h-[20rem] w-[21rem] h-[14rem]'
            />
          </div>
        </div>
        <div className='flex w-full items-center justify-start gap-x-4 sm:justify-between'>
          <Button
            onClick={() => {
              setFromNextPage(true);
              setUserPhoto('');
              previousStep();
            }}
            variant='gradient-alt'
            className='rounded-full p-4'
          >
            <HiArrowLeft className='h-7 w-7' />
          </Button>
          <div className='flex w-full flex-col gap-x-4 gap-y-2 sm:w-auto sm:flex-row'>
            <DownloadVoyagersCard
              variant='post'
              setIsAnnouncmentPresent={setIsAnnouncmentPresent}
            />
            <DownloadVoyagersCard
              variant='story'
              setIsAnnouncmentPresent={setIsAnnouncmentPresent}
            />
          </div>
          <div className='hidden px-8 md:block'></div>
        </div>
      </section>
    );
  }
  return (
    <section className='flex h-full w-full flex-col items-center justify-center p-7'>
      <div className='h-full w-full py-10'>
        <div className='relative mx-auto h-full w-11/12 sm:w-full'>
          <PhotolessVoyagersCard
            card={cardVariant[getMostAnswer()][0]}
            rotateFrom={15}
            className='scale-110 sm:scale-105'
            x='100vw'
          />
          <PhotolessVoyagersCard
            card={cardVariant[getMostAnswer()][1]}
            delay={0.15}
            rotateFrom={-15}
            className='scale-110 sm:scale-105'
            x='100vw'
          />
          <PhotolessVoyagersCard
            card={whiteCard}
            delay={0.3}
            className='scale-90 sm:scale-100'
            x='100vw'
            helperFn={() => setIsCardTransitionDone(true)}
          />
          <div className='flex h-full w-full items-center'>
            <motion.div
              className='relative h-[70%] w-full sm:h-[88%]'
              initial={{ opacity: 0, y: -100 }}
              animate={isCardTransitionDone ? 'visible' : 'hidden'}
              variants={variants}
              transition={{
                delay: 0.5,
                default: { ease: 'easeOut' },
              }}
            >
              <Image
                src={characterVariant[getMostAnswer()]}
                alt='personality'
                className='absolute scale-90 object-contain sm:scale-100'
                fill
                priority={true}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-between gap-x-4'>
        <Button
          onClick={() => {
            previousStep();
            setIsCardTransitionDone(false);
            setFromNextPage(true);
          }}
          variant='gradient-alt'
          className='rounded-full p-4'
        >
          <HiArrowLeft className='h-7 w-7' />
        </Button>
        <DownloadPhotolessVoyagersCard />
        <div className='hidden px-8 sm:block'></div>
      </div>
    </section>
  );
}
