import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=17&difficulty=${difficulty}&type=multiple`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.results) {
      throw new Error('No results found in the API response.');
    }
    console.log(data);
    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
    }));
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};


