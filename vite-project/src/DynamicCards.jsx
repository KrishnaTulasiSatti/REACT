import React from "react";

import "./DynamicCards.css"

import ReactImage from "./assets/react.svg"

const DynamicCards = () => {

    var cards = [
        {
            "image" : ReactImage,
            "price" : 200,
            "brand" : "USPA"
        },
        {
            "image" : ReactImage,
            "price" : 2000,
            "brand" : "Rare Rabbit"
        },
        {
            "image" : ReactImage,
            "price" : 20000,
            "brand" : "THUB"
        }

    ]
    return (

        <div className="parent">
           
            {
                cards.map((ele) => {
                    return (
                         <div className="card">
                            <div className="image-div">
                                <img src={ele.image} alt="" />
                            </div>
                            <div className="info-div">
                                <p>Price : {ele.price}/-</p>
                                <p>Brand : {ele.brand}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        
    )
}

export default DynamicCards;