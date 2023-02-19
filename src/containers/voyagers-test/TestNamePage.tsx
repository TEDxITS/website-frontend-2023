import Image from 'next/image';
import React from 'react';

import Button from '@/components/button/Button';

import { useTestContext } from '@/context/TestContext';

import quizBg from '~/images/voyagers-test/quiz-bg-1.png';
import quizBgAlt from '~/images/voyagers-test/quiz-bg-2.png';

export default function TestNamePage() {
  const { nextStep, setUserName, userName } = useTestContext();
  const [isNameEmpty, setIsNameEmpty] = React.useState<boolean>(false);
  const ref = React.useCallback((node: HTMLInputElement) => {
    node?.focus();
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleSubmitName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName) {
      nextStep();
    } else {
      setIsNameEmpty(true);
    }
  };
  return (
    <section className='relative h-full w-full'>
      <div className='absolute z-10 flex h-full w-full flex-col items-center justify-center px-5 md:px-0'>
        <h1 className='mb-5 text-center font-quaker text-[4rem] font-normal text-cwhite shadow-lg md:text-[4.7rem]'>
          Hello...
        </h1>
        <h2 className='mb-20 font-normal text-cwhite md:text-3xl'>
          What can we call you?
        </h2>
        <form
          onSubmit={handleSubmitName}
          className='flex w-full flex-col sm:items-center'
        >
          <label htmlFor='name' className='mx-auto font-medium text-cwhite'>
            Your Name:
          </label>
          <div className='border-b-2 border-cwhite'>
            <input
              type='text'
              id='name'
              ref={ref}
              className='border-transparent bg-transparent text-white focus:border-0 focus:border-transparent focus:outline-none focus:outline-0 focus:ring-0'
              onChange={handleNameChange}
              value={userName}
            />
          </div>
          {isNameEmpty && <p className='text-cred'>Name is required</p>}
          <Button className='mt-6 px-10' type='submit'>
            <p className='w-full text-xl sm:text-2xl'>Start Here</p>
          </Button>
        </form>
      </div>
      <Image
        src={quizBg}
        alt='background'
        className='absolute left-0 top-0 z-0'
        placeholder='blur'
      />
      <Image
        src={quizBgAlt}
        alt='background'
        className='absolute right-0 -bottom-0 z-0'
        placeholder='blur'
      />
    </section>
  );
}
