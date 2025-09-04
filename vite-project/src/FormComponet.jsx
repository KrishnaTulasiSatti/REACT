import React from "react";

const FormComponent = () => {

    const Respond = (event) => {
        // console.log("Button is Pressed")
        // const Name = document.getElementsByClassName("Name")[0];
        // console.log(Name);
        console.log(event);
    }

    return (
        <>
            <label>Name : </label>
            <input type="text" />

            <label>Email : </label>
            <input type="email" onClick={(event) => Respond(event)}/>

            <button onClick={Respond}>Submit</button>
        
        </>
    )
}

export default FormComponent