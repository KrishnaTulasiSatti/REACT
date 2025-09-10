import React from "react";

const PropsConcept = (Props) => {
    console.log(Props) // It will stored the data (x = 2) as an object
    // To access the data
    // console.log(Props.Data)
    // If we send multiple data , then both will be stored as an object --- Props.Data, Props.MyArray

    // To receive only desired data .. ({MyData}) ({MyData,MyFruits})

    return (

        // <div className="parent">
           
        //     {
        //         Props.MyCards.map((ele) => {
        //             return (
        //                  <div className="card">
        //                     <div className="image-div">
        //                         <img src={ele.image} alt="" />
        //                     </div>
        //                     <div className="info-div">
        //                         <p>Price : {ele.price}/-</p>
        //                         <p>Brand : {ele.brand}</p>
        //                     </div>
        //                 </div>
        //             )
        //         })
        //     }
        // </div>
        
        <div className="card">
              <div className="image-div">
                <img src={Props.Card.image} alt="" />
              </div>
              <div className="info-div">
                    <p>Price : {Props.Card.price}/-</p>
                    <p>Brand : {Props.Card.brand}</p>
              </div>
        </div>

    )
}

export default PropsConcept