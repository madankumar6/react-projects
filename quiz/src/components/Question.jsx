import QuestionTimer from "./QuestionTimer.jsx";
import Questions from "../questions.js";
import Answers from "./Answers.jsx";

export default function Question({questionText, answers, onSelectAnswer, handleSkipAnswer, selectedAnswer, answerState}) {
    return <div id="question">
        <QuestionTimer timer={10000} onTimeout={handleSkipAnswer}></QuestionTimer>
        <h2>{questionText}</h2>
        <Answers onSelect={onSelectAnswer} answers={answers} answerState={answerState} selectedAnswer={selectedAnswer} ></Answers>
    </div>
}