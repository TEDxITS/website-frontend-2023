import { RadioGroup } from '@headlessui/react';
import { motion } from 'framer-motion';
import React from 'react';

import { IAnswer, useTestContext } from '@/context/TestContext';
import clsxm from '@/utils/clsxm';

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

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 6 },
};

export default function Questions() {
  const {
    questions,
    currentQuestion,
    saveAnswer,

    nextQuestion,
    nextStep,
  } = useTestContext();
  const selectedQuestion = questions[currentQuestion];
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [toggle, setToggle] = React.useState(true);

  const handleChange = (value: IAnswer) => {
    saveAnswer(selectedQuestion.id, value);
    if (currentQuestion === questions.length - 1) {
      // exit the quiz if its the end of the questions
      nextStep();
    }
    nextQuestion();
  };

  return (
    <motion.div
      animate={toggle ? 'open' : 'closed'}
      variants={variants}
      className='h-full w-full'
      transition={{ duration: 0.5 }}
    >
      <div className='flex h-full w-full flex-col gap-x-10 p-5 sm:flex-row sm:p-24'>
        <div className='sm:w-3/5'>
          <p className='mb-4 text-2xl font-medium text-cwhite sm:mb-6'>
            {selectedQuestion.id} of {questions.length}
          </p>
          <h1 className='mb-4 font-quaker text-5xl text-cwhite sm:text-6xl'>
            {selectedQuestion?.question}
          </h1>
        </div>
        <RadioGroup
          className='grid h-full grid-cols-1 gap-6 sm:w-2/5'
          value={selectedQuestion.answer}
          onChange={(value: IAnswer) => handleChange(value)}
        >
          {selectedQuestion?.options.map((option, i) => (
            <RadioGroup.Option
              key={option.id}
              id={`answer-${option.id}`}
              value={option}
              className={clsxm(
                'flex cursor-pointer items-center gap-x-4 rounded-2xl bg-gradient-to-r from-cwhite via-cwhite to-cblue px-5 py-4 text-2xl font-semibold shadow-md transition-transform ease-in-out hover:scale-110 focus:outline-none active:scale-100'
              )}
            >
              <span className='rounded-full bg-white py-4 px-6 shadow-lg'>
                {ALPHABET[i]}
              </span>
              {option.option}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
    </motion.div>
  );
}
