import React, { useContext } from "react";

import Store from "./Store";
import { Link } from "react-router-dom";
import './ViewData.css'
const ViewData = () => {

    const {data} = useContext(Store)
    console.log(data)

    return (
        <> 
            
            <div className="cards">
                {
                    data.map((ele,index) => {
                        return (
                            <>
                                <div className="card">
                                    <h1>{ele.Name}</h1>
                                    <h1>{ele.Price}</h1>
                                    <h1>{ele.Brand}</h1>
                                    <Link to={`/info/${index}`}>Show More Details</Link>
                                    {/* <img src={ele.ImageURL} alt=""/> */}
                                </div>
                            </>
                        )
                    })
                }
            </div>

        
        </>
    )
}

export default ViewData;