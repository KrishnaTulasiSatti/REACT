import React from "react";
import { Link } from "react-router-dom";

const TaskHome = () => {

    return (
        <>
            <Link to="/task1">View Task 1</Link>
            <Link to="/task2">View Task 2</Link>
        </>
    )
}

export default TaskHome;