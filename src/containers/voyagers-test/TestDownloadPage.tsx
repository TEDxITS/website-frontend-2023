import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';

import Button from '@/components/button/Button';
import SmallVoyagersCard from '@/containers/voyagers-test/card/SmallVoyagersCard';
import VoyagersCardCanvas from '@/containers/voyagers-test/card/VoyagersCardCanvas';
import DownloadPhotolessVoyagersCard from '@/containers/voyagers-test/download/DownloadPhotolessVoyagersCard';

import { DEFAULT_SMALLCARD_ATTRIBUTES } from '@/constant/voyagers-test';
import { useTestContext } from '@/context/TestContext';

import creamCard from '~/images/voyagers-test/cream-card.png';
import redCard from '~/images/voyagers-test/red-card.png';
import whiteCard from '~/images/voyagers-test/white-card.png';

export default function TestDownloadPage() {
  const { isPhotoUsed, previousStep } = useTestContext();
  // const [isTransitionOver, setIsTransitionOver] = React.useState(false);
  const printRef = React.useRef<HTMLDivElement | null>(null);

  const handleDownloadImage = async () => {
    const element = printRef.current;
    if (!element) return;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  if (isPhotoUsed) {
    return (
      <>
        <VoyagersCardCanvas
          cardType='post'
          ref={printRef}
          contentClassName={DEFAULT_SMALLCARD_ATTRIBUTES.post.position}
        >
          <SmallVoyagersCard
            personalityType='The Survivor'
            className={DEFAULT_SMALLCARD_ATTRIBUTES.post.size}
            nameClassName={DEFAULT_SMALLCARD_ATTRIBUTES.post.nameClassName}
          />
        </VoyagersCardCanvas>
        <section className='flex h-full w-full flex-col items-center justify-center px-4 sm:px-0'>
          <h1 className='mb-5 text-center font-baron text-4xl text-cwhite shadow-lg sm:text-6xl'>
            You used photo
          </h1>
          <button className='text-white' onClick={handleDownloadImage}>
            Download
          </button>
          {/* <DownloadVoyagersCard variant='post' /> */}
        </section>
      </>
    );
  }
  return (
    <section className='flex h-full w-full flex-col items-center justify-center p-7'>
      <div className='h-full w-full py-10'>
        <div className='relative mx-auto h-full w-full'>
          <VoyagersCard card={redCard} />
          <VoyagersCard card={creamCard} delay={0.15} />
          <VoyagersCard card={whiteCard} delay={0.3} />
        </div>
      </div>
      <div className='flex w-full justify-between gap-x-4'>
        <Button
          onClick={previousStep}
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

function VoyagersCard({
  card,
  delay = 0,
}: {
  card: StaticImageData;
  delay?: number;
}) {
  const [isTransitionOver, setIsTransitionOver] = React.useState(false);
  return (
    <div className='absolute h-full w-full'>
      <motion.div
        className='relative h-full w-full'
        initial={{ x: '100%', rotate: 30 }}
        animate={isTransitionOver ? { x: 0, rotate: 0 } : { x: 0, rotate: 30 }}
        transition={{
          type: 'spring',
          damping: 14,
          mass: 0.75,
          stiffness: 100,
          delay: delay,
        }}
        onAnimationComplete={() => setIsTransitionOver(true)}
      >
        <Image
          className='absolute left-1/2 right-1/2 scale-105'
          fill
          style={{ objectFit: 'contain' }}
          src={card}
          alt='card'
        />
      </motion.div>
    </div>
  );
}
