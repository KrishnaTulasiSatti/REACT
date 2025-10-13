import React, { useContext, useState } from "react";
import './AddData.css'

import Store from "./Store";
import Task2 from "./Task2"
const AddData = () => {

    const {data,setData} = useContext(Store)
    console.log(data)
    
    var temp = {
        "Name" : "",
        "Brand" : "",
        "Size" : "",
        "Price" : "",
        "Description" : "",
        "ImageURL" : ""
    };

    const GetData = (key,event) => {
        
        temp[key] = event.target.value;
    }

    const GetFile = (key,event) => {
        const file = event.target.files[0];
        var url = URL.createObjectURL(file);
        temp[key] = url;
    }

    const Update = (event) => {
        event.preventDefault()
    
        window.alert("Data Uploaded Successfully")
        setData([...data,temp]);
    }
    return (
        <> 
        <Task2 />
            <form action="">
           <div className="parent-div">
            <div className="form-data">
               <div className="form-input">
                 <div>
                    <label>Name  </label>
                 </div>
                 <div>
                    <input type="text" onChange={(event) => GetData("Name",event)}/> 
                 </div>
               </div>
               <div className="form-input">
                  <div>
                    <label>Brand  </label>
                  </div>
                  <div>
                        <input type="text" onChange={(event) => GetData("Brand",event)}/>
                  </div>
               </div>
               <div className="form-input">
                  <div><label>Size  </label></div>
                  <div><input type="text" onChange={(event) => GetData("Size",event)} /></div>
               </div>
               <div className="form-input">
                    <div><label>Price  </label></div>
                    <div><input type="text" onChange={(event) => GetData("Price",event)}/></div>
               </div>
               
               <div className="form-input">
                  <div><label>Description  </label></div>
                  <div><textarea name="" id="" onChange={(event) => GetData("Description",event)}></textarea></div>
               </div>
               <div className="form-input">
                 <input type="file" onChange={(event) => GetFile("ImageURL",event)} className="file_"/>
               </div>

               <div className="buttons">
                  <button onClick={(event) => Update(event)}>Submit</button>
                  <button type="reset">Clear</button>
               </div>
           </div>
           </div>
           </form>
        </>
    )
}

export default AddData;