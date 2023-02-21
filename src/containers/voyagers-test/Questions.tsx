import { RadioGroup } from '@headlessui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';

import Button from '@/components/button/Button';

import FullTEDLogo from '@/assets/logo/FullTEDLogo';
import { IAnswer, useTestContext } from '@/context/TestContext';
import clsxm from '@/utils/clsxm';

import quizContainerBottom from '~/images/voyagers-test/quiz-container-bottom.png';
import quizContainerOrnament from '~/images/voyagers-test/quiz-container-ornament.png';
import quizContainerTop from '~/images/voyagers-test/quiz-container-top.png';

const ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Questions() {
  const {
    questions,
    currentQuestion,
    saveAnswer,
    previousQuestion,
    nextQuestion,
    nextStep,
  } = useTestContext();
  const selectedQuestion = questions[currentQuestion];
  const [areWeGoingNextStep, setAreWeGoingNextStep] =
    React.useState<boolean>(false);
  const [startAnimation, setStartAnimation] = React.useState<boolean>(true);
  const [startChildAnimation, setStartChildAnimation] =
    React.useState<boolean>(false);

  const handleChange = (value: IAnswer) => {
    setStartChildAnimation(false);
    setTimeout(() => {
      setStartAnimation(false);
      setTimeout(() => {
        nextQuestion();
      }, 300);
    }, 100);
    saveAnswer(selectedQuestion.id, value);
    if (currentQuestion === questions.length - 1) {
      setAreWeGoingNextStep(true);
      setTimeout(() => {
        nextStep();
      }, 500);
    }
  };

  const handleChildAnimation = async () => {
    if (startAnimation === false) {
      setStartAnimation(true);
    }
    setTimeout(() => {
      setStartChildAnimation(true);
    }, 500);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={areWeGoingNextStep ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.2 }}
      className='flex w-full flex-col gap-x-10 gap-y-4 p-4 md:flex-row md:p-10 lg:p-16'
    >
      <div className='flex h-[19rem] flex-col items-start justify-between md:h-[43rem] md:w-1/2 lg:h-[37rem] xl:w-3/5'>
        <div className='flex w-full items-center justify-between sm:mb-10 md:justify-start'>
          <FullTEDLogo variant='text' className='w-20 md:w-32' />
          <PreviousQuestionButton
            previousQuestion={previousQuestion}
            className='block md:hidden'
            startChildAnimation={startChildAnimation}
          />
        </div>
        <div className='h-[18rem] md:h-full'>
          <p className='mb-4 text-lg font-medium text-cwhite sm:mb-6 sm:text-2xl'>
            {selectedQuestion.id} of {questions.length}
          </p>
          <h1 className='font-quaker text-3xl text-cwhite md:text-5xl lg:text-6xl'>
            {selectedQuestion?.question}
          </h1>
        </div>
        <PreviousQuestionButton
          previousQuestion={previousQuestion}
          className='hidden md:block'
          startChildAnimation={startChildAnimation}
        />
      </div>
      <div className='h-[43rem] md:w-1/2 lg:h-[37rem] xl:w-2/5'>
        <motion.div
          variants={{
            hidden: { opacity: 0.7, y: '14rem' },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={startAnimation ? 'visible' : 'hidden'}
          transition={{ ease: 'easeInOut', duration: 1 }}
          onAnimationComplete={handleChildAnimation}
          className='relative h-[15%] w-full'
        >
          <Image
            src={quizContainerTop}
            alt='quiz container top'
            className='absolute'
            fill
          />
        </motion.div>
        <motion.div
          variants={container}
          initial='hidden'
          animate={startChildAnimation ? 'show' : 'hidden'}
          className='h-[70%] xs:px-7'
        >
          <RadioGroup
            className='h-full bg-cwhite/[40%] px-3 py-3 backdrop-blur-sm'
            value={selectedQuestion.answer}
            onChange={(value: IAnswer) => handleChange(value)}
          >
            <div className='relative hidden h-[15%] w-[25%] xs:block md:hidden xl:block'>
              <Image
                src={quizContainerOrnament}
                alt='quiz container ornament'
                className='absolute object-contain'
                fill
              />
            </div>
            <div className='question grid h-full grid-cols-1 gap-y-4 xs:h-[85%] md:h-full xl:h-[85%]'>
              {selectedQuestion?.options.map((option, i) => (
                <motion.div className='' key={option.id} variants={item}>
                  <RadioGroup.Option
                    id={`answer-${option.id}`}
                    value={option}
                    className={clsxm(
                      'flex h-full cursor-pointer items-center gap-x-4 rounded-[2rem] bg-gradient-to-r from-cwhite/75 via-cwhite/75 to-cblue/75 py-4 px-3 shadow-md transition-transform ease-in-out hover:scale-110 focus:outline-none active:scale-100 '
                    )}
                  >
                    <div className='w-1/4 xs:w-1/6 sm:h-14 md:w-1/4 lg:w-1/6'>
                      <div className='flex h-full w-full items-center justify-center rounded-full bg-white shadow-lg'>
                        <h2 className='text-2xl font-semibold xs:text-3xl'>
                          {ALPHABET[i]}
                        </h2>
                      </div>
                    </div>
                    <p className='w-5/6 font-baron leading-tight sm:text-lg'>
                      {option.option}
                    </p>
                  </RadioGroup.Option>
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0.7, y: '-14rem' },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={startAnimation ? 'visible' : 'hidden'}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='relative h-[15%] w-full'
        >
          <Image
            src={quizContainerBottom}
            alt='quiz container top'
            className='absolute'
            fill
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

function PreviousQuestionButton({
  previousQuestion,
  className,
  startChildAnimation,
}: {
  previousQuestion: () => void;
  className?: string;
  startChildAnimation: boolean;
}) {
  return (
    <Button
      onClick={() => {
        previousQuestion();
      }}
      variant='gradient-alt'
      className={clsxm('rounded-full p-4', className)}
      disabled={!startChildAnimation}
    >
      <HiArrowLeft className='h-7 w-7' />
    </Button>
  );
}
