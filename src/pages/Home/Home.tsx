import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate.tsx";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button.tsx";
import {PATHS} from "../../routes/paths.ts";

const Home: React.FC = () => (
    <PageTemplate>
        <h1 className="text-xl font-bold underline">
            ¡Hola! Bienvenido a tu gestor de tareas.
        </h1>
        <p className="mt-2 w-50">
            Esperamos poder ayudarte, por favor, si te has registrado, pincha en el botón de abajo para comenzar:
        </p>
        <Link to={PATHS.TASK}><Button label="Comenzar" /></Link>
    </PageTemplate>
)

export default Home
