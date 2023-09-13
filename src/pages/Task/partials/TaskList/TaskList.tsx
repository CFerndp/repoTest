import React from "react";
import {TaskListProps} from "./types.ts";
import TaskItem from "../TaskItem/TaskItem.tsx";

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return <>
        {tasks.length > 0 ? (tasks.map(task => (<TaskItem task={task} key={task._id} />))) : (<div>No hay tareas</div>)}
    </>
}

export default TaskList;
