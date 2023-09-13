import React from "react";
import {RegisterButtonProps} from "./types.ts";
import Button from "../../../../../Button/Button.tsx";

const RegisterButton: React.FC<RegisterButtonProps> = ({ className }) => {

    const onClick = () => {
        alert('A registrarse')
    }

    return <Button onClick={onClick} className={`p-2 border-2 bg-blue-500 border-white rounded-lg text-white ${className}`} label="Registrarse"/>
}

export default RegisterButton
