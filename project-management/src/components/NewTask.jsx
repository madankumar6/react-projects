import { useState } from "react";

export default function NewTask({onAddTask}) {
    const [enteredTask, setEnteredTask] = useState();

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }
    function handleAddTask() {
        setEnteredTask('');
        onAddTask(enteredTask);
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" onChange={handleChange} value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200"></input>
            <button className="text-stone-700 hover:text-stone-900">Add Task</button>
        </div>
    );
}