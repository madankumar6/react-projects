import {useState, useCallback} from "react";
import Questions from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === Questions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(userAnswer) {
        setUserAnswer((prevState) => {
            return [...prevState, userAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    if (quizIsComplete) {
        return (<>
            <Summary userAnswers={userAnswers}></Summary>
        </> );
    }

    return (
        <div id="quiz">
            <Question key={activeQuestionIndex}  index={activeQuestionIndex} onSelectAnswer={handleSelectAnswer} handleSkipAnswer={handleSkipAnswer} />
        </div>
    );
}