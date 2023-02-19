import html2canvas from 'html2canvas';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/button/Button';
import VoyagersCard from '@/containers/voyagers-test/card/VoyagersCard';
import VoyagersCardCanvas from '@/containers/voyagers-test/card/VoyagersCardCanvas';

import { DEFAULT_SMALLCARD_ATTRIBUTES } from '@/constant/voyagers-test';
import { useTestContext } from '@/context/TestContext';

import MonochromeTedLogo from '~/images/logo/tedxits-monochrome.png';

interface DownloadVoyagersCardProps {
  variant: 'story' | 'post';
  setIsAnnouncmentPresent: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DownloadVoyagersCard({
  variant,
  setIsAnnouncmentPresent,
}: DownloadVoyagersCardProps) {
  const printRef = React.useRef<HTMLDivElement | null>(null);
  const { userPhoto } = useTestContext();

  const handleDownloadImage = async () => {
    if (!userPhoto) {
      toast.error('Please upload your photo first!');
      setIsAnnouncmentPresent(true);
      return;
    }
    toast.loading('Downloading...');
    const element = printRef.current;
    if (!element) return;
    try {
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL('image/jpg');
      const link = document.createElement('a');

      if (typeof link.download === 'string') {
        link.href = data;
        link.download = 'voyagers-card';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.dismiss();
      } else {
        window.open(data);
        toast.dismiss();
      }
    } catch (error) {
      toast.dismiss();
      toast.error(`error ${error}`);
    }
  };

  return (
    <>
      <Button className='w-full sm:w-auto' onClick={handleDownloadImage}>
        <p className='w-full px-5 text-center text-sm sm:text-lg'>
          Download {variant === 'post' ? 'Post Version' : 'Story Version'}
        </p>
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
            <VoyagersCard
              className='absolute h-[40rem] w-[60rem] rotate-[15deg]'
              nameClassName='text-3xl'
              dateClassName='text-xl my-4'
            />
            <VoyagersCard
              className='absolute h-[40rem] w-[60rem] -rotate-[15deg]'
              nameClassName='text-3xl'
              dateClassName='text-xl my-4'
            />
            <VoyagersCard
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
          <VoyagersCard
            className={DEFAULT_SMALLCARD_ATTRIBUTES.post.size}
            nameClassName={DEFAULT_SMALLCARD_ATTRIBUTES.post.nameClassName}
          />
        </VoyagersCardCanvas>
      )}
    </>
  );
}
