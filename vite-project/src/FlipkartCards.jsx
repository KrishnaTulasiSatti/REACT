import React from "react";
import "./FlipkartCards.css"


const FlipkartCards = (Props) => {
    return (
        <>
           
                <div className="flipkart-card">
                <div className="image">
                    <img src={Props.Card.image} alt="" />
                </div>
                <div className="information">
                    <div className="brand">
                        <p>{Props.Card.brand}</p>
                    </div>
                    <div className="properties">
                        <p>{Props.Card.properties}</p>
                    </div>
                    <div className="rating">
                        {Props.Card.rating}
                    </div>
                    <div className="price"><p>{Props.Card.price}/-</p></div>
                </div>
            </div>
           
        
        </>
    )
}

export default FlipkartCards