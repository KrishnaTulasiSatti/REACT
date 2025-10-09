import React from "react";
import { useState, useEffect } from "react";

import "./Task.css"


const Task = () => {

    const [CompleteData,setCompleteData] = useState(
        [
            {
                "name" : "Tulasi"
            },
            {
                "name" : "Pavani"
            },
            {
                "name" : "Durga"
            },
            {
                "name" : "Surekha"
            }
        ]
    )

    const [CopyData,setCopyData] = useState([])

    const [UserQuery,setUserQuery] = useState("");

    const GetUserInput = (event) => {

        setUserQuery(event.target.value);

       console.log(event.target.value);
    }

    useEffect(() => {

        if(UserQuery != "") {
            var arr = CompleteData.filter(ele => ele.name.includes(UserQuery));
            setCopyData(arr);
        }
        else {
            setCopyData(CompleteData);
        }
        
    },[UserQuery])


    return (
        <>
            

            <div className="main">
                <input type="text" placeholder="Search" onChange={(event) => GetUserInput(event)}/>
                <div className="parent">
                    {
                        CopyData.map((ele) => {
                            return (
                                <>
                                    <div className="card">
                                        <h1>{ele.name}</h1>
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

export default Task;