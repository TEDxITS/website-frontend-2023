import html2canvas from 'html2canvas';
import React from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/button/Button';
import VoyagersCard from '@/containers/voyagers-test/card/VoyagersCard';
import VoyagersCardCanvas from '@/containers/voyagers-test/card/VoyagersCardCanvas';

import { DEFAULT_SMALLCARD_ATTRIBUTES } from '@/constant/voyagers-test';
import { useTestContext } from '@/context/TestContext';

import { Personality } from '@/types/voyagers-test.types';

interface DownloadVoyagersCardProps {
  variant: 'story' | 'post';
  setIsAnnouncmentPresent: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DownloadVoyagersCard({
  variant,
  setIsAnnouncmentPresent,
}: DownloadVoyagersCardProps) {
  const printRef = React.useRef<HTMLDivElement | null>(null);
  const { userPhoto, getMostAnswer } = useTestContext();
  const [isLoading, setIsLoading] = React.useState(false);

  const personality = getMostAnswer();
  const personalityOrder: Personality[] =
    personality === 'The Visioner'
      ? ['The Opportunist', 'The Survivor']
      : personality === 'The Opportunist'
      ? ['The Visioner', 'The Survivor']
      : ['The Visioner', 'The Opportunist'];

  const dateClassNameContainer = {
    post:
      window.innerWidth > 768 ? 'top-[11.5%] font-bold' : 'top-[12%] font-bold',
    story:
      window.innerWidth > 768
        ? 'top-[12.2%] font-bold'
        : 'top-[12.6%] font-bold',
  };

  const handleDownloadImage = async () => {
    setIsLoading(true);
    if (!userPhoto) {
      toast.error('Please upload your photo first!');
      setIsAnnouncmentPresent(true);
      setIsLoading(false);
      return;
    }
    toast.loading('Downloading...');
    const element = printRef.current;
    if (!element) return;
    try {
      const canvas = await html2canvas(
        element,
        variant === 'story'
          ? {
              width: 1080,
              height: 1920,
              scale: 1,
            }
          : {
              width: 1080,
              height: 1080,
              scale: 1,
            }
      );
      const data = canvas.toDataURL('image/png');
      const link = document.createElement('a');

      if (typeof link.download === 'string') {
        link.href = data;
        link.download = 'voyagers-card';
        link.target = '_blank';

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        className='w-full sm:w-auto'
        onClick={handleDownloadImage}
        disabled={isLoading}
      >
        <p className='w-full px-1 text-center text-xs sm:px-5 sm:text-lg'>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/images/logo/tedxits-monochrome.png' alt='TEDxITS 2023' />
          </div>
          <div className='relative flex h-[65%] items-center justify-center'>
            <VoyagersCard
              personality={personalityOrder[0]}
              className='absolute h-[40rem] w-[60rem] rotate-[15deg]'
              nameClassName='text-3xl'
              dateClassName='text-xl my-4'
            />
            <VoyagersCard
              personality={personalityOrder[1]}
              className='absolute h-[40rem] w-[60rem] -rotate-[15deg]'
              nameClassName='text-3xl'
              dateClassName='text-xl my-4'
            />
            <VoyagersCard
              className='absolute h-[40rem] w-[60rem]'
              nameClassName='text-4xl'
              dateClassName='text-xl'
              dateContainerClassName={dateClassNameContainer.story}
            />
          </div>
          <div className='flex flex-col items-center pl-5'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/images/voyagers-test/announcement-3.png'
              alt='announcement'
              className=''
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
            dateContainerClassName={dateClassNameContainer.post}
          />
        </VoyagersCardCanvas>
      )}
    </>
  );
}
