import React from "react";
import { useParams } from "react-router-dom";

const ContactPage = () => {

    const ReceivedData = useParams();
    console.log(ReceivedData);
    
    return (
        <>
            <h1>This is a Contact Page</h1>
        </>
    )

}
export default ContactPage;