import React from "react";
import './Task2.css'
import { Link } from "react-router-dom";

const Task2 = () => {

    return (
        <>
            <div className="nav-bar">
                <Link to="/add-data" className="add_data">Add Data</Link>
                <Link to="/view-data" className="view_data">View Data</Link>
            </div>
        </>
    )
}

export default Task2;