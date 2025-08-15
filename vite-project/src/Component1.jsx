import React from "react";
import logo from "./assets/react.svg"  
// Since it is not in public-assets , you can't give the direct path here.

import "./Component1.css"

const Component1 = () => {
    return (
        <>
            <h1 className="c1">Component-1</h1>
            <img src={logo} alt="" />
            <img src="../public/vite.svg" alt="" /> 

            {/* This is in the public assets so we can give the path here directly  */}
            
        </>
    )
}

export default Component1;