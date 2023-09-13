import React from "react";
import {ButtonProps} from "./types.ts";

const Button: React.FC<ButtonProps> = ({ className, onClick,label }) => {
    return <button onClick={onClick}
                   className={`p-2 border-2 bg-blue-500 border-white rounded-lg text-white ${className}`}>
        {label}
    </button>
}

export default Button
