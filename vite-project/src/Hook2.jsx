import React from "react";
import { use } from "react";

import { useState,useEffect } from "react";

const Hook2 = () => {

    const [x,setx] = useState(0);

    // useEffect(() => {
    //     console.log("Hello")
    // },[x]) 

    // const func = () => {
    //     setx(x+1);
    // }

   

    useEffect(() => {
        console.log("Hello")
    }, [])

    return (
        <>
            <form>
                <label>Name</label>
                <input type="text"/>
            </form>

            <button onClick={() => setx(x+1)}>Click Me</button>

            {/* <button onClick={func}>Click Me</button> */}
            {/* {x} */}

        </>
    )
}

export default Hook2;