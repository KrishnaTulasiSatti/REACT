import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import StudentInfo from "./StudentInfo";

const PathParameters = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/contact/:data" element={<ContactPage/>}></Route>
                    <Route path="/student-info/:rollno" element={<StudentInfo/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default PathParameters;