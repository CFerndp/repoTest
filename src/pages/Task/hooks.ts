import {useEffect, useState} from "react";
import {Task as TaskType} from "../../types/task.ts";
import {getTasks} from "../../services/task/taskRepository.ts";


export const useTasks = () => {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect( () => {
        const doAsyncTask = async () => {
            const tasks = await getTasks()
            setTasks(tasks)
        }

        doAsyncTask()

    },[])

    return tasks
}
