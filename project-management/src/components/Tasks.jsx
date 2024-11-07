import NewTask from "./NewTask";

export default function Tasks({tasks, onAddTask, onDeleteTask}) {
    return (
        <section>
            <NewTask onAddTask={onAddTask}></NewTask>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            {tasks.length === 0 && <p className="text-stone-800 mb-4 my-4">This project doesn't have any tasks yet!</p>}
            {tasks.length > 0 && 
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map(task => 
                    <li key={task.id} className="flex justify-between my-4">
                        <span>{task.task}</span>
                        <button onClick={() => onDeleteTask(task.id)} className="text-stone-700 hover:text-red-900">Clear</button>
                    </li>
                )}
            </ul>
            }
        </section>
    );
}