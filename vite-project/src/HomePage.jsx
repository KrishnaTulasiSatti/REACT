import React from "react";
import {Link} from "react-router-dom"

const HomePage = () => {

    const go_to_contact = () => {
        window.location.href = "/contact/100"
    }

    const go_to_services = () => {
        window.location.href = "/services"
    }

    const Data = [

        {

            "Name" : "Tulasi",
            "Age" : "19",
            "RollNumber" : "23A91A05C5",
            "Description" : "Studying in branch of Computer Science"
        },
        {
            "Name" : "Surekha",
            "Age" : "19",
            "RollNumber" : "23A91A0519",
            "Description" : "Studying in branch of Computer Science"
        }
    ]


    return (
        <>

            <h1>Hey ! This is Home Page</h1>

            
            <div className="parent">
                {
                    Data.map((ele) => {
                        return (
                            <div className="child" onClick={() => window.location.href = `/student-info/${ele.RollNumber}`}>
                                <h1>Name : {ele.Name}</h1>
                                <h1>Age : {ele.Age}</h1>
                                <h1>Roll Number : {ele.RollNumber}</h1>
                            </div>
                        )
                    })
                }
                
            </div>
            

            <Link to="/contact/150">Go to Contact Page</Link>
            <br />
            <Link to="/services">Go to services Page</Link>
            {/* <Link to="*">Page not found</Link> */}
            <br />

            <button onClick={go_to_contact}>Contact</button>
            <button onClick={go_to_services}>Services</button>
        
        </>
        
    )
}

export default HomePage;