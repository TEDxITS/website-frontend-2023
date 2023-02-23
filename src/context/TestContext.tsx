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
  userPhoto: string | undefined;
  setUserPhoto: (photo: string) => void;
  handleUserPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fromNextPage: boolean;
  setFromNextPage: (isNeeded: boolean) => void;
  questions: IQuestion[];
  currentQuestion: number;
  saveAnswer: (questionId: number, answer: IAnswer) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  getMostAnswer: () => Personality;
  resetTest: () => void;
};

const questionList = [
  {
    id: 1,
    question: 'What would be your ideal day off',
    options: [
      { id: 1, option: 'Me-time' },
      { id: 2, option: 'Finishing tasks and homework' },
      { id: 3, option: 'Exploring new places in your city' },
    ],
    answer: null,
  },
  {
    id: 2,
    question: 'What’s your favorite movie',
    options: [
      { id: 1, option: 'Mystic River, Room, The Perks of Being a Wallflower' },
      { id: 2, option: 'No Country for Old Man, There Will Be Blood' },
      { id: 3, option: 'Tomorrowland, Interstellar, 2001: A Space Odyssey' },
    ],
    answer: null,
  },
  {
    id: 3,
    question: 'Which of these following topics concerned you the most',
    options: [
      { id: 1, option: 'Your own past experience' },
      { id: 2, option: 'Country resources development' },
      { id: 3, option: 'Artificial Intelligence (AI) takeover' },
    ],
    answer: null,
  },
  {
    id: 4,
    question: 'How do you define your success',
    options: [
      { id: 1, option: 'Dealing with my past trauma' },
      { id: 2, option: 'Taking part on a research project/competition' },
      { id: 3, option: 'Knowing your purpose in life several years later' },
    ],
    answer: null,
  },
  {
    id: 5,
    question: 'What’s your biggest fear of the future',
    options: [
      { id: 1, option: 'Adulthood' },
      {
        id: 2,
        option: 'Not being able to survive in my country’s demographic crisis',
      },
      { id: 3, option: 'Uncontrollable technology advancement' },
    ],
    answer: null,
  },
  {
    id: 6,
    question: 'Which statement do you think is the most important',
    options: [
      { id: 1, option: 'No present, no future' },
      { id: 2, option: 'No preparation for the future, no progress' },
      { id: 3, option: 'No anticipation towards the future, no future' },
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
  const [userPhoto, setUserPhoto] = React.useState<string | undefined>(
    undefined
  );
  const [fromNextPage, setFromNextPage] = React.useState<boolean>(false);

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

  const getMostAnswer = (): Personality => {
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

  const handleUserPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setUserPhoto(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
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
        userPhoto,
        setUserPhoto,
        handleUserPhotoChange,
        fromNextPage,
        setFromNextPage,
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
