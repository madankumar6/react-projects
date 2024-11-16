import {useRef, useState, useCallback} from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Questions from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
    const [userAnswers, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === Questions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(userAnswer) {
        setUserAnswer(prevState => [...prevState, userAnswer]);
    }, []);

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
                <QuestionTimer timer={10000} onTimeout={handleSkipAnswer}></QuestionTimer>
                <h2>{Questions[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer, index) => (
                        <li key={index} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}