import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentInfo = () => {
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

    const ReceivedData = useParams();
    console.log(ReceivedData);

    const [mycard,setmycard] = useState({});

    useEffect(() => {
        var arr = Data.filter((ele) => ele.RollNumber == ReceivedData.rollno)
        setmycard(arr[0])
    },[])


    return (
        <>
            <h1>Name : {mycard.Name}</h1>
            <h1>Roll Number : {mycard.RollNumber}</h1>
            <h1>Description : {mycard.Description}</h1>
        </>
    )
}

export default StudentInfo;