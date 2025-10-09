import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import ServicesPage from "./ServicesPage";
import PageNotFound from "./PageNotFound";

const Routing = () => {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                    <Route path="/services" element={<ServicesPage/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
            
            </BrowserRouter>
        
        </>
    )
}

export default Routing;