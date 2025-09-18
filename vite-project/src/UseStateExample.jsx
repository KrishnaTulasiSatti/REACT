import React from "react";
import { useState } from "react";

const UseStateExample = () => {
    
    const [arr,setArr] = useState([]);

    // const getCards = () => {
    //     setArr([
    //         {
    //             "name" : "Tulasi",
    //             "age" : 19
    //         }
    //     ])
    // }

    return (
        <>
            <h1>{arr.name}</h1>
            {/* <button onClick={getCards}>Click me</button> */}
        
        </>
    )

}

export default UseStateExample;