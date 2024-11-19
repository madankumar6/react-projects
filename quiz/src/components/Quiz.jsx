import {useRef, useState, useCallback} from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Questions from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";

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

    const shuffledAnswers = [...Questions[activeQuestionIndex].answers];
    shuffledAnswers.sort((a, b) => Math.random() - 0.5);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer key={activeQuestionIndex} timer={10000} onTimeout={handleSkipAnswer}></QuestionTimer>
                <h2>{Questions[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer, index) => {
                        const isSelected = userAnswers[userAnswers.length - 1] === answer;
                        let cssClasses = '';

                        if (answerState === 'answered' && isSelected) {
                            cssClasses = 'selected';
                        }
                        else if((answerState === 'wrong' || answerState === 'correct') && isSelected) {
                            cssClasses = answerState;
                        }
                        return (
                            <li key={index} className="answer">
                                <button onClick={() => handleSelectAnswer(answer)} className={cssClasses}>{answer}</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}