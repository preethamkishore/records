import { DataSnapshot, onValue } from "firebase/database";
import { ref } from "firebase/database";
import react,{useState,useEffect} from "react";
import { firebasedatabase } from "../backend/firebaseHandler";
import './RecordsList.styles.css';


const RecordList = () =>{

    const [studentList , setStudentList] = useState([])
    
    useEffect(( )=> {
        const fetchData=async() =>{
            const studentRef= ref(firebasedatabase,'STUDENTS_RECORD')
            onValue(studentRef,(dataSnapshot) =>{
                if (dataSnapshot.exists()){
                    const tempVal =dataSnapshot.val();
                    console.log(Object.values(tempVal))

                    const temp=[];
                    for (const usn in dataSnapshot.val()){
                        const student = dataSnapshot.child(usn).val();
                        temp.push(student);
                    }
                    setStudentList(temp);
                }else{
                    alert("No records found!")
                }
            })
        }
        fetchData()

    },[]);

    return(
        <div>
            <h1>List of students</h1>
            <div className="grid-list">
            {
                studentList.map((item) => {
                    return(
                        <div className="grid-content">
                            <h3>{item.name}</h3>
                            <p>{item.usn}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default RecordList;
