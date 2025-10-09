import React, { useContext } from "react";
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
        setData([...data,temp]);
        console.log(temp)
    }


    return (
        <> 
        <Task2 />
            <form action="">
           <div className="parent-div">
            <div className="form-data">
               <div>
                 <label>Name : </label>
                 <input type="text" onChange={(event) => GetData("Name",event)}/> 
               </div>
               <div>
                <label>Brand : </label>
                <input type="text" onChange={(event) => GetData("Brand",event)}/>
               </div>
               <div>
                <label>Size : </label>
                <input type="text" onChange={(event) => GetData("Size",event)} />
               </div>
               <div>
                    <label>Price : </label>
               <input type="text" onChange={(event) => GetData("Price",event)}/>
               </div>
               
               <div>
                <label>Description : </label>
               <textarea name="" id="" onChange={(event) => GetData("Description",event)}></textarea>
               </div>
               <div>
                 <input type="file" onChange={(event) => GetFile("ImageURL",event)}/>
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