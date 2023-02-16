import Image from 'next/image';
import React from 'react';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

import { useTestContext } from '@/context/TestContext';

import modalBg from '~/images/voyagers-test/modal.png';

function TestResultModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setIsPhotoUsed, nextStep } = useTestContext();

  const handleYes = () => {
    setIsPhotoUsed(true);
    setIsOpen(false);
    nextStep();
  };

  const handleNo = () => {
    setIsPhotoUsed(false);
    setIsOpen(false);
    nextStep();
  };
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      customDialog={<Image src={modalBg} alt='Modal' placeholder='blur' />}
    >
      <div className='absolute flex h-full w-full flex-col items-center justify-center space-y-2 p-8 sm:space-y-4 sm:p-14'>
        <p className='mb-6 text-xl font-medium text-cwhite'>
          Would you like to attach your photo to the voyagers card?
        </p>
        <div className='flex gap-x-4'>
          <Button
            variant='primary'
            className='flex w-24 justify-center rounded-lg bg-cgreen'
            onClick={handleYes}
          >
            Yes
          </Button>
          <Button
            variant='primary'
            className='flex w-24 justify-center rounded-lg bg-red-700'
            onClick={handleNo}
          >
            No
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default function TestResultPage() {
  const { getMostAnswer, resetTest } = useTestContext();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <TestResultModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className='flex h-full w-full flex-col items-center justify-center px-4 sm:px-0'>
        <h2 className='text-center font-baron font-primary text-xl font-semibold text-white sm:text-2xl'>
          You are
        </h2>
        <h1 className='mb-12 text-center font-baron text-4xl text-cwhite shadow-lg sm:text-6xl'>
          {getMostAnswer()}
        </h1>
        <div className='flex flex-col gap-y-4'>
          <Button className='px-10 text-center' onClick={() => setIsOpen(true)}>
            <p className='w-full text-center'>Download Your Card Here!</p>
          </Button>
          <Button className='px-10' onClick={resetTest}>
            <p className='w-full text-center'>Retake the Test</p>
          </Button>
        </div>
      </section>
    </>
  );
}
