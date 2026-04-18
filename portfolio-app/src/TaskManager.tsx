import { useState } from "react";
import "./TaskManager.css"

interface TaskObject {
    id: number;
    title: string;
    completed: boolean;
}

function TaskManager() {

    const [tasks, setTasks] = useState<TaskObject[]>([])
    const [taskInput, setNewTask] = useState("");


    function addTask() {
        const newTask = { id: Date.now(), title: taskInput, completed: false }
        setTasks((prevTasks) => [...prevTasks, newTask])

        setNewTask("")
    }

    function toggleTaskCompletion(id: number) {
        const updatedTasks = tasks.map((task) =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        )
        setTasks(updatedTasks)
    }
    return (
        <div className="container task-manager">
            <h1 className="task-manager-title">Tasks</h1>
            <ul>
                {tasks.map((task) => (
                    <li className="task-item" key={task.id}>
                        <span className={task.completed ? "task-text completed" : "task-text"}>{task.title}</span>
                        <span className={task.completed ? "task-status done" : "task-status not-done"}>{task.completed ? "Done" : "Not Done"}</span>
                        <button onClick={() => toggleTaskCompletion(task.id)}>Toggle</button>
                    </li>
                ))}
            </ul>
            <div className= "task-controls">
                <input
                type="text"
                placeholder="New Task"
                value={taskInput}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
            </div>
            
        </div>
    )
}

export default TaskManager;

