import {Task} from "../../types/task.ts";

export type GetTask = ()=> Promise<Task[]>
