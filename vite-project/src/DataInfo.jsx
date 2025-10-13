import React, { useContext, useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import Store from "./Store";
import './DataInfo.css'
import Task2 from "./Task2";

const DataInfo = () => {

    const {data} = useContext(Store)

    const [card,setCard] = useState({})

    const ReceivedData = useParams();

    useEffect(() => {
        var arr = data.filter((ele,index) => index == ReceivedData.ind)
        console.log(arr)
        setCard(arr[0])
    },[])

    return (
        <>
            <Task2/>
            <div className="cards">
                <div className="card">
                    
                                    
                                    <div className="image_">
                    
                                        <img src={card.ImageURL} alt="" />
                                    </div>

                                    <div className="detailed_info">Detailed Info</div>
                                    <div className="form-input">
                                        <div>Name </div>
                                        <p>:</p>
                                        <div>{card.Name}</div>
                                    </div>
                                    <div className="form-input">
                                        <div>Brand </div>
                                        <p>:</p>
                                        <div>{card.Brand}</div>
                                    </div>
                                
                                    <div className="form-input">
                                        <div>Price </div>
                                        <p>:</p>
                                        <div>{card.Price}</div>
                                    </div>
                                    <div className="form-input">
                                        <div>Size </div>
                                        <p>:</p>
                                        <div>{card.Size}</div>
                                    </div>

                                    <div className="form-input">
                                        <div>Description </div>
                                        <p>:</p>
                                        <div>{card.Description}</div>
                                    </div>
                                    
                                </div>

                    
               
            </div>
        
        </>
    )
}

export default DataInfo;