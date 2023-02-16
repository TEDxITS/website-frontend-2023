'use client';
import React from 'react';

export type Personality = 'The Survivor' | 'The Opportunist' | 'The Visioner';

export interface IAnswer {
  id: number;
  option: string;
}

export interface IQuestion {
  id: number;
  question: string;
  options: IAnswer[];
  answer: IAnswer | null;
}

export type TestContextType = {
  step: number;
  nextStep: () => void;
  previousStep: () => void;
  userName: string;
  setUserName: (name: string) => void;
  isPhotoUsed: boolean;
  setIsPhotoUsed: (isNeeded: boolean) => void;
  questions: IQuestion[];
  currentQuestion: number;
  saveAnswer: (questionId: number, answer: IAnswer) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  getMostAnswer: () => string;
  resetTest: () => void;
};

const questionList = [
  {
    id: 1,
    question: 'What is your favorite color',
    options: [
      { id: 1, option: 'Red' },
      { id: 2, option: 'Green' },
      { id: 3, option: 'Blue' },
    ],
    answer: null,
  },
  {
    id: 2,
    question: 'What is your favorite food',
    options: [
      { id: 1, option: 'Pizza' },
      { id: 2, option: 'Hamburger' },
      { id: 3, option: 'Sushi' },
    ],
    answer: null,
  },
  {
    id: 3,
    question: 'What is your favorite animal',
    options: [
      { id: 1, option: 'Dog' },
      { id: 2, option: 'Cat' },
      { id: 3, option: 'Bird' },
    ],
    answer: null,
  },
  {
    id: 4,
    question: 'What is your favorite car',
    options: [
      { id: 1, option: 'BMW' },
      { id: 2, option: 'Mercedes' },
      { id: 3, option: 'Audi' },
    ],
    answer: null,
  },
];

const shuffleAnswers = (questions: IQuestion[]) => {
  return questions.map((question) => {
    return {
      ...question,
      options: question.options.sort(() => Math.random() - 0.5),
    };
  });
};

const getPersonality = (mostAnswerId: number): Personality => {
  switch (mostAnswerId) {
    case 1:
      return 'The Survivor';
    case 2:
      return 'The Opportunist';
    case 3:
      return 'The Visioner';
    default:
      return 'The Survivor';
  }
};

const TestContext = React.createContext<TestContextType>(
  null as unknown as TestContextType
);

const TestProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // The Whole Test State
  const [step, setStep] = React.useState<number>(0);
  const [userName, setUserName] = React.useState<string>('');
  const [isPhotoUsed, setIsPhotoUsed] = React.useState<boolean>(false);
  // Question State
  const [questions, setQuestions] = React.useState<IQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const maxQuestionsIndex = questionList.length - 1;
  const minQuestionsIndex = 0;

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const saveAnswer = (questionId: number, answer: IAnswer) => {
    questions.filter((question) => {
      if (question.id === questionId) {
        question.answer = answer;
        setQuestions([...questions]);
      }
    });
  };

  const nextQuestion = () => {
    if (currentQuestion === maxQuestionsIndex) {
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const previousQuestion = () => {
    if (currentQuestion === minQuestionsIndex) {
      return;
    }
    setCurrentQuestion(currentQuestion - 1);
  };

  const getMostAnswer = () => {
    const answers = questions.map((question) => question.answer?.id);
    const mostAnswerId = answers
      .sort(
        (a, b) =>
          answers.filter((v) => v === a).length -
          answers.filter((v) => v === b).length
      )
      .pop();
    return getPersonality(mostAnswerId as number);
  };

  const resetTest = () => {
    setStep(1);
    setUserName('');
    setQuestions(shuffleAnswers(questionList));
    setCurrentQuestion(0);
  };

  React.useEffect(() => {
    setQuestions(shuffleAnswers(questionList));
  }, []);

  return (
    <TestContext.Provider
      value={{
        step,
        nextStep,
        previousStep,
        userName,
        setUserName,
        isPhotoUsed,
        setIsPhotoUsed,
        questions,
        currentQuestion,
        saveAnswer,
        nextQuestion,
        previousQuestion,
        getMostAnswer,
        resetTest,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => React.useContext(TestContext);

export default TestProvider;
