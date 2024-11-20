import Questions from "../questions.js";
import {useRef} from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort((a, b) => Math.random() - 0.5);
    }

    return (
        <>
            <ul id="answers">
                {shuffledAnswers.current.map((answer, index) => {
                    const isSelected = selectedAnswer === answer;
                    let cssClasses = '';

                    if (answerState === 'answered' && isSelected) {
                        cssClasses = 'selected';
                    } else if ((answerState === 'wrong' || answerState === 'correct') && isSelected) {
                        cssClasses = answerState;
                    }
                    return (
                        <li key={index} className="answer">
                            <button onClick={() => onSelect(answer)} className={cssClasses}>{answer}</button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}