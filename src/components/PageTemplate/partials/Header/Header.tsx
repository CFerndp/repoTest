import React from "react";
import RegisterButton from "./partials/RegisterButton/RegisterButton.tsx";
import {Link} from "react-router-dom";
import {PATHS} from "../../../../routes/paths.ts";


const Header: React.FC = () => {
    return (
        <div className="border-b-2 border-blue-500 py-3 flex flex-row justify-between">
            <Link to={PATHS.HOME}>
                <h1 className="text-3xl font-bold ml-5">Mi Task Controller</h1>
            </Link>
            <RegisterButton className="mr-5"/>
        </div>
    )
}

export default Header
