import React from "react";
import CR1 from "./CR1";
import CR2 from "./CR2";
const ConditionalRendering = () => {

    var x = false;

    return (
        <>  
            {x == true ? <CR1/> : <CR2/>}
        </>
    )
}

export default ConditionalRendering;