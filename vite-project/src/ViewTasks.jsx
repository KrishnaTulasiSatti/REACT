import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import TaskHome from "./TaskHome";
import ToDoList from "./ToDoList";

import ConditionalRendering from "./ConditionalRendering";



const ViewTasks = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TaskHome/>}></Route>
                    <Route path="/task1" element={<ToDoList/>}></Route>
                    <Route path="/task2" element={<ConditionalRendering/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default ViewTasks;