import React from "react";

import Name from "./Name";
import Age from "./Age";
import Email from "./Email";
import Phone from "./Phone";
import Gender from "./Gender";
import FatherName from "./FatherName";
import MotherName from "./MotherName";
import City from "./City";
import Skills from "./Skills";
import Dob from "./Dob";

const Form = () => {
    return (
        <>
            <Name/>
            <br />
            <br />
            <Age/>
            <br />
            <br />
            <Email/>
            <br />
            <br />
            <Phone/>
            <br />
            <br />
            <Gender/>
            <br />
            <br />
            <FatherName/>
            <br />
            <br />
            <MotherName/>
            <br />
            <br />
            <City/>
            <br />
            <br />
            <Skills/>
            <br />
            <br />
            <Dob/>
        </>
    )
}

export default Form;