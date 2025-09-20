import React from "react";
import { useState } from "react";
import './Cards.css'

const Cards = () => {

    const [Data,setData] = useState([
        {
            "firstname" : "Krishna",
            "lastname"  : "Tulasi",
            "email"     : "krishnatulasi0302@gmail.com"
        }
    ])

    var cardData = [
        {
            "firstname" : "",
            "lastname"  : "",
            "email"     : ""
        }
    ]

    const GetData = (key,event) => {
        cardData[key] = event.target.value;
    }

    const Fun = () => {

        setData([...Data,cardData]); 
        
        // To add a new item to the existing items

        cardData = {

            "firstname" : "",
            "lastname"  : "",
            "email"     : ""
        }

    }

    const DelCard = (delIndex) => {
        
        // To delete an existing item

        const arr = Data.filter((ele,index) => index != delIndex)
        setData(arr);
    }

    
    return (
        <>
            <form action="">
                <div>
                    <label htmlFor="">First Name : </label>
                    <input type="text" onChange={(event) => GetData("firstname",event)}/>
                </div>
                 <div>
                    <label htmlFor="">Last Name : </label>
                    <input type="text" onChange={(event) => GetData("lastname",event)}/>
                </div>
                 <div>
                    <label htmlFor="">Email </label>
                    <input type="text" onChange={(event) => GetData("email",event)}/>
                </div>
            </form>
            <button onClick={Fun}>Add Data</button>

            <div className="parent">
                {
                    Data.map((ele,index) => {
                        return (
                            <>

                                <div className="child">
                                    <h3>{ele.firstname}</h3>
                                    <h3>{ele.lastname}</h3>
                                    <h3>{ele.email}</h3>
                                    <button onClick={() => DelCard(index)}>Delete</button>
                                </div>
                            
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cards;

