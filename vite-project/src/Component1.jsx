import React from "react";
import logo from "./assets/react.svg"  
// Since it is not in public-assets , you can't give the direct path here.

import "./Component1.css"

const Component1 = () => {
    return (
        <>
            <h1 className="c1">Component-1</h1>
            <img src={logo} alt="" />
        </>
    )
}

export default Component1;