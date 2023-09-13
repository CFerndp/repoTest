import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const Root: React.FC = () =>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>}/>
            <Route path="/task" element={<div>Task</div>}/>
        </Routes>
    </BrowserRouter>
)


export default Root
