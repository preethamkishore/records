import { set,ref } from "firebase/database";
import React,{useState} from "react";
import { firebasedatabase } from "../backend/firebaseHandler";
import './RecordData.styles.css';

const RecordData=() => {
    const [studentData,setStudentData] = useState({
        name:"",
        usn:""
    })

    const handlechange =(event) => {
        const {name , value} = event.target;
        setStudentData({
            ...studentData,
            [name]:value
        })
    }

    const handleSave =async ()=> {
        const recordRef =ref(firebasedatabase,`STUDENTS_RECORD/${studentData.usn}`);
        await set(recordRef, studentData);
        alert("data recorded")
    }
    return (
        <div>
            <input className="inputs" onChange={handlechange} value={studentData.name} name="name" placeholder="Student Name"/>
            <input className="inputs" onChange={handlechange} value={studentData.usn} name="usn" placeholder="USN"/>
            <button className="save-button" onClick={handleSave}>Save</button>
        </div>
    )
}
export default RecordData;