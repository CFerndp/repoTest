import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loading from "../components/Loading/Loading.tsx";
import {PATHS} from "./paths.ts";

const Home = lazy(() => import("../pages/Home/Home.tsx"));
const Task = lazy(() => import("../pages/Task/Task.tsx"));


const Root: React.FC = () =>(
    <Suspense fallback={<Loading />}>
        <BrowserRouter>
            <Routes>
                <Route path={PATHS.HOME} element={<Home />}/>
                <Route path={PATHS.TASK} element={<Task />}/>
            </Routes>
        </BrowserRouter>
    </Suspense>
)


export default Root
