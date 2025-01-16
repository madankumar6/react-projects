import QuestionTimer from "./QuestionTimer.jsx";
import Questions from "../questions.js";
import Answers from "./Answers.jsx";
import {useState} from "react";

export default function Question({index, onSelectAnswer, handleSkipAnswer}) {
    const [answer, setAnswer] = useState({
            selectedAnswer: '',
            isCorrect: null
        });

    let timer = 10000;
    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(userAnswer) {
        setAnswer(prevState => {
            return {
                selectedAnswer: userAnswer,
                isCorrect: null
            };
        });

        setTimeout(() => {
            setAnswer(prevState => {
                return {
                    selectedAnswer: userAnswer,
                    isCorrect: Questions[index].answers[0] === userAnswer
                };
            });

            setTimeout(() => {
                onSelectAnswer(userAnswer);
            }, 2000);

        }, 1000);
    }

    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }
    else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return <div id="question">
        <QuestionTimer key={timer} timer={timer} onTimeout={answer.selectedAnswer === '' ? handleSkipAnswer : null} mode={answerState}></QuestionTimer>
        <h2>{Questions[index].text}</h2>
        <Answers onSelect={handleSelectAnswer} answers={Questions[index].answers} answerState={answerState} selectedAnswer={answer.selectedAnswer} ></Answers>
    </div>
}