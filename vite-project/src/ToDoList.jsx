import React from "react";

import { useState } from "react";

import "./ToDoList.css"

const ToDoList = () => {

    const [tasks,setTasks] = useState([
        {
            "desc" : "Task 1"
        }
    ])

    const [new_task,setNewTask] = useState({
        "desc" : ""
    })

    const getNewTask = (event) => {
        
        setNewTask({
            "desc" : event.target.value
        })

        
    }

    const addListItems = () => {
        if(new_task["desc"] != "") {
            var arr = [...tasks,new_task]
            setTasks(arr);
            setNewTask({
                "desc" : ""
            })
        }
    }

    const removeItem = (delIndex) => {

        var arr = tasks.filter((ele,index) => index != delIndex)
        console.log(arr)
        setTasks(arr)

    }

    return (
        <>
            <div className="to-do-parent">
                <h1 className="list-heading">To Do List</h1>
                <div className="add-task-div">
                    <input type="text" value={new_task["desc"]} placeholder="Add New Task" onChange={(event) => getNewTask(event)}/>
                    <button className="add-task" onClick={addListItems}>Add Task</button>
                    
                </div>
                <div className="task-items">
                    {
                        tasks.map((ele,index) => {
                            return (
                                <>
                                    <div className="list-item">
                                        
                                        <div className="info">
                                            <input type="checkbox" onClick={(event) => func(event,index)}/> &nbsp; {ele.desc}</div>
                                        <div className="buttons-class">
                                            <button className="edit-button">Edit</button>
                                            <button className="remove-button" onClick={() => removeItem(index)}>Remove</button>
                                        </div>

                                    </div>
                                    

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ToDoList;
