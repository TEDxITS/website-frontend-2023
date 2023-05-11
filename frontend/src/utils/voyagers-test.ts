import { IQuestion, Personality } from '@/types/voyagers-test.types';

export const shuffleAnswers = (questions: IQuestion[]) => {
  return questions.map((question) => {
    return {
      ...question,
      options: question.options.sort(() => Math.random() - 0.5),
    };
  });
};

export const getPersonality = (mostAnswerId: number): Personality => {
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
