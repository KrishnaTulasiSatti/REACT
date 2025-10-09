import React, { useContext, useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import Store from "./Store";


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
            <div className="cards">
                <div className="card">
                    <h1>{card.Description}</h1>
                </div>
            </div>
        
        </>
    )
}

export default DataInfo;