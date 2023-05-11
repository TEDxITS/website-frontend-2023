import { motion } from 'framer-motion';
import NextImage from 'next/image';
import React from 'react';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';
import HyperStarfieldContainer from '@/containers/stars/HyperStarfieldContainer';

import { DEFAULT_CARD_FILEPATH } from '@/constant/voyagers-test';
import { useTestContext } from '@/context/TestContext';

import modalBgLarge from '~/images/voyagers-test/large-modal.png';
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
      customDialog={
        <>
          <NextImage
            src={modalBg}
            alt='Modal'
            placeholder='blur'
            className='hidden sm:block'
          />
          <NextImage
            src={modalBgLarge}
            alt='Modal'
            placeholder='blur'
            className='block sm:hidden'
          />
        </>
      }
    >
      <div className='absolute flex h-full w-full flex-col items-center justify-center space-y-2 p-12 sm:space-y-4 sm:p-14'>
        <p className='mb-2 text-center text-sm font-medium text-cwhite xs:text-base sm:mb-6 sm:text-xl'>
          Would you like to attach your photo to the voyagers card?
        </p>
        <div className='flex gap-x-4'>
          <Button
            variant='primary'
            className='flex justify-center rounded-lg bg-cgreen px-2 py-1 xs:w-24 xs:px-5 xs:py-2.5'
            onClick={handleYes}
          >
            Yes
          </Button>
          <Button
            variant='primary'
            className='flex justify-center rounded-lg bg-red-700 px-2 py-1 xs:w-24 xs:px-5 xs:py-2.5'
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
  const { getMostAnswer, resetTest, fromNextPage, setFromNextPage } =
    useTestContext();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(
    fromNextPage ? false : true
  );

  const resethandler = () => {
    setFromNextPage(false);
    resetTest();
  };

  React.useEffect(() => {
    // Preload the voyagers card image
    for (const image of Object.values(DEFAULT_CARD_FILEPATH.card)) {
      const imageElement = new Image();
      imageElement.src = image;
    }
    // ends here
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <TestResultModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.section
        className='h-full w-full'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          animate={isLoading ? { opacity: 1 } : { opacity: 0, y: '-100%' }}
          className='absolute h-full w-full'
        >
          <HyperStarfieldContainer starCount={50} isLoading={isLoading} />
        </motion.div>

        <div className='z-30 flex h-full w-full flex-col items-center justify-center px-4 sm:px-0'>
          <h2 className='text-center font-baron font-primary text-2xl font-semibold text-white'>
            You are
          </h2>
          <h1 className='mb-12 text-center font-baron text-4xl text-cwhite shadow-lg sm:text-6xl'>
            {getMostAnswer()}
          </h1>
          <div className='flex w-full flex-col gap-y-4 sm:w-auto'>
            <Button
              className='px-10 text-center'
              onClick={() => setIsOpen(true)}
            >
              <p className='w-full text-center'>Download Your Card Here!</p>
            </Button>
            <Button className='px-10' onClick={resethandler}>
              <p className='w-full text-center'>Retake the Test</p>
            </Button>
          </div>
        </div>
      </motion.section>
    </>
  );
}
