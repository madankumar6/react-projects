import {useState, useEffect} from "react";

export default function QuestionTimer({timer, onTimeout, mode}) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        console.log("Setting timeout");
        const timeOut = setTimeout(onTimeout, timer);
        return () => clearTimeout(timeOut);
    }, [timer, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(timer => timer - 100);
        }, 100);
        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <>
            <progress id="question-time" value={remainingTime} max={timer} className={mode}></progress>
        </>
        );
}