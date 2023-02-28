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
