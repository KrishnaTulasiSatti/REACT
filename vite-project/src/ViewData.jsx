import React, { useContext, useState,useEffect } from "react";

import Store from "./Store";
import { Link } from "react-router-dom";
import './ViewData.css'
import Task2 from "./Task2";
const ViewData = () => {

    const {data} = useContext(Store)
    console.log(data)

    const [CopyData,setCopyData] = useState([])

    const [UserQuery,setUserQuery] = useState("");

    const GetUserInput = (event) => {
        setUserQuery(event.target.value);
        // console.log(event.target.value);
    }

    useEffect(() => {
    
            if(UserQuery != "") {
                var arr = data.filter(ele => (ele.Name.includes(UserQuery) || ele.Brand.includes(UserQuery)));
                setCopyData(arr);
            }
            else {
                setCopyData(data);
            }
            
    },[UserQuery])

    const ChangeColor = (event) => {
        console.log(CopyData);
        if(CopyData.Like == 0) {
            event.target.style.backgroundColor = "white";
            data.Like = 1;
        }
        else {
            event.target.style.backgroundColor = "red";
            data.Like = 0;
        }
    }
    return (
        <> 
            <Task2/>
            <div className="main-div">
            <div className="search-bar">
                <input type="text" placeholder="Search by Name or Brand" onChange={(event) => GetUserInput(event)}/>
            </div>
            <div className="cards">
                {
                    CopyData.map((ele,index) => {
                        return (
                            <>
                                <div className="card">
                                    
                                    <div className="image_">
                                        <img src={ele.ImageURL} alt="" />
                                    </div>
                                    <div className="form-input">
                                        <div>Name </div>
                                        <p>:</p>
                                        <div>{ele.Name}</div>
                                    </div>
                                    <div className="form-input">
                                        <div>Brand </div>
                                        <p>:</p>
                                        <div>{ele.Brand}</div>
                                    </div>
                                
                                    <div className="form-input">
                                        <div>Price </div>
                                        <p>:</p>
                                        <div>{ele.Price}</div>
                                    </div>
                                    <Link to={`/info/${index}`} className="more_details">More Details</Link>
                                    <div className="like-button" onClick={(event) => ChangeColor(event)}></div>
                                    <p>Like</p>

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

export default ViewData;