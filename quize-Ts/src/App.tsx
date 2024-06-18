import React , {useState} from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuestions } from "./API";
import { QuestionState,Difficulty } from "./API";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
  
}

const App = () => {

  const TOTAL_QUESTIONS = 10;

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};



  return <div className="App">
    <h1>React Quiz</h1>

    <button className="start" onClick={startQuiz}>Start Quiz</button>
<p className="score">Score:</p>
<p>Loading Questions ...</p>

    {/*<QuestionCard 
     questionNr={number + 1}
     totalQuestions={TOTAL_QUESTIONS}
     question={questions[number].question}
     answers={questions[number].answers}
     userAnswer={userAnswers ? userAnswers[number] : undefined}
     callback={checkAnswer}
     />*/}

    <button className="next" onClick={nextQuestion}>Next Question</button>

  </div>;
};

export default App;



