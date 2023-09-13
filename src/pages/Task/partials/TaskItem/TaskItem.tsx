import React from "react";
import {TaskItemProps} from "./types.ts";
import {handleTaskIds} from "./helpers.ts";

export const TaskItem: React.FC<TaskItemProps> = ({task}) => {
    return <div>* Tarea {handleTaskIds(task._id)}: {task.name}</div>
}


export default TaskItem
