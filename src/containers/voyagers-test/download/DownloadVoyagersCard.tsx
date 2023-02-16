import html2canvas from 'html2canvas';
import Image from 'next/image';
import React from 'react';

import Button from '@/components/button/Button';
import SmallVoyagersCard from '@/containers/voyagers-test/card/SmallVoyagersCard';
import VoyagersCardCanvas from '@/containers/voyagers-test/card/VoyagersCardCanvas';

import { DEFAULT_SMALLCARD_ATTRIBUTES } from '@/constant/voyagers-test';

import MonochromeTedLogo from '~/images/logo/tedxits-monochrome.png';

interface DownloadVoyagersCardProps {
  variant: 'story' | 'post';
}

export default function DownloadVoyagersCard({
  variant,
}: DownloadVoyagersCardProps) {
  const printRef = React.useRef<HTMLDivElement | null>(null);

  const handleDownloadImage = async () => {
    const element = printRef.current;
    if (!element) return;
    const canvas = await html2canvas(element, {
      scale: 2,
    });

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

  // const handleDownloadImage2 = async () => {
  //   const element = printRef.current;
  //   domtoimage.toPng(element).then(function (dataUrl) {
  //     const link = document.createElement('a');
  //     link.download = 'my-image-name.jpeg';
  //     link.href = dataUrl;
  //     link.click();
  //   });
  // };

  return (
    <>
      <Button className='w-full sm:w-auto' onClick={handleDownloadImage}>
        <p className='w-full px-5 text-center text-lg'>Download</p>
      </Button>
      {variant === 'story' ? (
        <VoyagersCardCanvas
          cardType='story'
          ref={printRef}
          contentClassName='h-full w-full'
        >
          <div className='flex justify-center pt-28'>
            <Image src={MonochromeTedLogo} alt='TEDxITS 2023' />
          </div>
          <div className='relative flex h-[70%] items-center justify-center'>
            <SmallVoyagersCard
              personalityType='The Survivor'
              className='absolute h-[40rem] w-[60rem] rotate-[15deg]'
              nameClassName='text-3xl'
              dateClassName='text-xl my-4'
            />
            <SmallVoyagersCard
              personalityType='The Survivor'
              className='absolute h-[40rem] w-[60rem] -rotate-[15deg]'
              nameClassName='text-3xl'
              dateClassName='text-xl my-4'
            />
            <SmallVoyagersCard
              personalityType='The Survivor'
              className='absolute h-[40rem] w-[60rem]'
              nameClassName='text-3xl'
              dateClassName='text-xl my-4'
            />
          </div>
        </VoyagersCardCanvas>
      ) : (
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
      )}
    </>
  );
}
