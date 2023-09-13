import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate.tsx";
import Title from "../../components/Title/Title.tsx";
import {useTasks} from "./hooks.ts";
import TaskList from "./partials/TaskList/TaskList.tsx";

const Task: React.FC = () => {
    const tasks = useTasks()

    return <PageTemplate>
        <Title>Mis Tareas</Title>
        <h2>Contador de tareas: {tasks.length}</h2>
        <TaskList tasks={tasks}/>
    </PageTemplate>
}

export default Task
