'use client';

import { useState } from 'react';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

export default function OurPilotsContainer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className='z-10 cursor-pointer rounded-lg border-[2.2px] border-cgreen px-2 duration-300 hover:-translate-y-3 hover:scale-125 xl:rounded-2xl xl:border-[3px] xl:px-3'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className='z-10 cursor-pointer font-primary text-xs font-medium xl:text-base'>
          Our Pilots
        </h1>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className='noisy border-[10px] border-cgray bg-black'
      >
        <div className='z-20 flex flex-col items-center justify-center'>
          <h1 className='text-center font-baron text-xl text-cwhite sm:text-4xl'>
            Coming Soon
          </h1>
          <p className='mt-4 mb-5 text-center text-base font-medium text-cwhite sm:text-lg'>
            We're thrilled to announce that we'll be revealing our incredible
            lineup of speakers very soon.
            <br />
            Stay tuned for updates on our social media.
          </p>
          <Button
            variant='primary'
            className='px-9 text-base xs:text-xl'
            onClick={() => setIsOpen(!isOpen)}
          >
            Back
          </Button>
        </div>
      </Modal>
    </>
  );
}
