import quizLogo from "../assets/quiz-logo.png";

export default function Header(props) {
    return (
        <header className="header">
            <img src={quizLogo} alt="quiz" />
            <h1>React Quiz</h1>
        </header>
    );
}