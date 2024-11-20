import {useState, useCallback} from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Questions from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswer] = useState([]);
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === Questions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(userAnswer) {
        setAnswerState('answered');
        setUserAnswer(prevState => [...prevState, userAnswer]);

        const timeout = setTimeout(() => {
            if(userAnswer == Questions[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            }
            else {
                setAnswerState('wrong');
            }

            const nestedTimeout = setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

    if (quizIsComplete) {
        return (<div id="summary">
            <img src={quizCompleteImg} alt="quiz" />
            <h2>Quiz completed!</h2>
        </div> );
    }

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    return (
        <div id="quiz">
            <Question key={activeQuestionIndex}  questionText={Questions[activeQuestionIndex].text} answers={Questions[activeQuestionIndex].answers}
            onSelectAnswer={handleSelectAnswer} handleSkipAnswer={handleSkipAnswer} selectedAnswer={userAnswers[userAnswers.length - 1]} answerState={answerState} />
        </div>
    );
}