import {Task} from "../../types/task.ts";
import {GetTask} from "./types.ts";
import {TASK_API_URL} from "../../configs/endpoints/endpoints.ts";


export const getTasks: GetTask= async () => {
    const response = await fetch(TASK_API_URL);

    if(!response.ok) {
        return [];
    }

    const dataResponse = await response.json();
    return dataResponse.data as Task[];
}
