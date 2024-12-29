import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} result="lost" remainingTime = {timeRemaining} onReset={handleReset}></ResultModal>
    <section className="challenge">
        <h2>
            {title}
        </h2>
        {/* {!timerIsActive && <p>You lost!</p>} */}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's':''}
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerIsActive ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Time is running' : 'Timer inactive'}
        </p>
    </section>
    </>);
}





// import { useState, useRef } from "react";
// import ResultModal from "./ResultModal";

// export default function TimerChallenge({title, targetTime}) {
//     const timer = useRef();
//     const dialog = useRef();

//     const [timerStarted, setTimerStarted] = useState(false);
//     const [timerExpired, setTimerExpired] = useState(false);

//     function handleStart() {
//         timer.current = setTimeout(() => {
//             setTimerExpired(prevValue => true);
//             //dialog.current.showModal();
//             dialog.current.open();
//         }, targetTime * 1000);

//         setTimerStarted(true);
//     }

//     function handleStop() {
//         clearTimeout(timer.current);
//     }

//     return (
//     <>
//     <ResultModal ref={dialog} targetTime={targetTime} result="lost"></ResultModal>
//     <section className="challenge">
//         <h2>
//             {title}
//         </h2>
//         {timerExpired && <p>You lost!</p>}
//         <p className="challenge-time">
//             {targetTime} second{targetTime > 1 ? 's':''}
//         </p>
//         <p>
//             <button onClick={timerStarted ? handleStop : handleStart}>
//                 {timerStarted ? 'Stop' : 'Start'} Challenge
//             </button>
//         </p>
//         <p className={timerStarted ? 'active' : undefined}>
//             {timerStarted ? 'Time is running' : 'Timer inactive'}
//         </p>
//     </section>
//     </>);
// }