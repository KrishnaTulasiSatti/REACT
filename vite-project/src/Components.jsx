import React from "react";

import Component1 from "./Component1.jsx";
import Component2 from "./Component2.jsx";

import "./Components.css"

const Components = () => {
    var sum = 10+30;
    console.log(sum);
    // Between function declaration and return statement
    return (
        <>
          <div className="componentsDiv">
            <Component1></Component1>
            <Component2></Component2>
          </div>
        </>
    )
}

export default Components