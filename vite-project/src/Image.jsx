import React, { useState } from "react";


const Image = () => {

    const [myimage,setmyimage] = useState(null);

    const GetFile = (event) => {
        const file = event.target.files[0];
        const path = URL.createObjectURL(file);
        console.log(path)
        setmyimage(path)
    }

    const GetFile2 = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            console.log(reader.result)
            setmyimage(reader.result)
        }
    }
    return (
        <>

            <input type="file" onChange={(event) => GetFile(event)}/>

            <input type="file" onChange={(event) => GetFile2(event)} />
            
            {/* {
                myimage ? <> <img src={myimage} alt="Hello"/></> : <> </> 
            } */}

            <img src={myimage} alt="" />
        </>
    )
}

export default Image;