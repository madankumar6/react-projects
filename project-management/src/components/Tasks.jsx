export default function Tasks({onAddTask, onDeleteTask}) {
    return (
        <section>
            <NewTask onAddTask={onAddTask}></NewTask>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <p className="text-stone-800 mb-4 my-4">This project doesn't have any tasks yet!</p>
        </section>
    );
}