import Button from '@/components/button/Button';

import { useTestContext } from '@/context/TestContext';

export default function TestLandingPage() {
  const { nextStep } = useTestContext();
  return (
    <section className='flex h-full w-full flex-col items-center justify-center px-4 sm:px-0'>
      <h1 className='mb-5 text-center font-baron text-4xl text-cwhite shadow-lg sm:text-6xl'>
        What Kind Of Voyagers Are You?
      </h1>
      <h2 className='mb-12 text-center font-primary text-xl font-semibold text-white sm:text-2xl'>
        Take this quiz to find out
      </h2>
      <Button className='px-10' onClick={nextStep}>
        <p className='text-xl sm:text-2xl'>Try Me!</p>
      </Button>
    </section>
  );
}
