import { motion } from 'framer-motion';
import React from 'react';

import Button from '@/components/button/Button';
import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { useTestContext } from '@/context/TestContext';

export default function TestLandingPage() {
  const { nextStep } = useTestContext();
  const [areWeGoingNextStep, setareWeGoingNextStep] = React.useState(false);

  const handleStart = async () => {
    setareWeGoingNextStep(true);
    setTimeout(() => {
      nextStep();
    }, 500);
  };

  return (
    <>
      <motion.div
        animate={
          areWeGoingNextStep ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }
        }
      >
        <Header />
      </motion.div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={areWeGoingNextStep ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className='flex h-[37rem] w-full flex-col items-center justify-center px-4 sm:px-0'
      >
        <h1 className='mb-5 text-center font-baron text-4xl text-cwhite shadow-lg sm:text-6xl'>
          What Kind Of Voyagers Are You?
        </h1>
        <h2 className='mb-12 text-center font-primary text-xl font-semibold text-white sm:text-2xl'>
          Take this quiz to find out
        </h2>
        <Button className='px-10' onClick={handleStart}>
          <p className='text-xl sm:text-2xl'>Try Me!</p>
        </Button>
      </motion.section>
      <motion.div
        animate={
          areWeGoingNextStep ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }
        }
      >
        <NormalFooter className='bg-transparent' />
      </motion.div>
    </>
  );
}
