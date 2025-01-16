import quizCompleteImg from "../assets/quiz-complete.png";
import Questions from "../questions.js";

export default function Summary({userAnswers}) {
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter(((answer, index) => answer === Questions[index].answers[0]));
    const incorrectAnswers = userAnswers.filter(((answer, index) => answer !== Questions[index].answers[0]));

    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length ) * 100);
    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length ) * 100);
    const wrongAnswersShare = 100 - correctAnswersShare - skippedAnswersShare;

    return (<div id="summary">
        <img src={quizCompleteImg} alt="quiz"/>
        <h2>Quiz completed!</h2>
        <div id="summary-stats">
            <p>
                <span className="number">
                    {skippedAnswersShare}%
                </span>
                <span className="text">
                    skipped
                </span>
            </p>
            <p>
                <span className="number">
                    {correctAnswersShare}%
                </span>
                <span className="text">
                    answered correctly
                </span>
            </p>
            <p>
                <span className="number">
                    {wrongAnswersShare}%
                </span>
                <span className="text">
                    answered incorrectly
                </span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClasses = 'user-answer';

                if (answer === null) {
                    cssClasses += ' skipped';
                }
                else if (answer === Questions[index].answers[0]) {
                    cssClasses += ' correct';
                }
                else {
                    cssClasses += ' wrong';
                }


                return (<li key={index}>
                    <h3>{index + 1}</h3>
                    <p className="question">{Questions[index].text}</p>
                    <p className={cssClasses}>{answer ?? 'Skipped'}</p>
                </li>);
            })}

        </ol>
    </div>);
}