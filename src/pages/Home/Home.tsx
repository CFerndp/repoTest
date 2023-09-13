import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate.tsx";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button.tsx";
import {PATHS} from "../../routes/paths.ts";
import Title from "../../components/Title/Title.tsx";

const Home: React.FC = () => (
    <PageTemplate>
        <Title>
            ¡Hola! Bienvenido a tu gestor de tareas.
        </Title>
        <p className="mt-2 w-50">
            Esperamos poder ayudarte, por favor, si te has registrado, pincha en el botón de abajo para comenzar:
        </p>
        <Link to={PATHS.TASK}><Button label="Comenzar" /></Link>
    </PageTemplate>
)

export default Home
