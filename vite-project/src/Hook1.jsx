import React from "react";

import { useState } from "react";


const Hook1 = () => {

    const [Data,setData] = useState(0);

    const Change = () => {
        setData(Data+1)
    }

    

    return (
        <>
            <button onClick={Change}>Click Me!</button>
            <h1>Count : {Data}</h1>
        </>
    )
}

export default Hook1;