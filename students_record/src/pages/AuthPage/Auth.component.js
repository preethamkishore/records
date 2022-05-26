import react from "react";
import './auth.styles.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import { firebaseAuth } from "../../backend/firebaseHandler";


const AuthPage=()=> {
    const[userInput, setUserInput]=useState({
        emailId:"",
        password:""
    })

    const handlechange =(event) =>{
      const {name ,value} = event.target;
      setUserInput({
        ...userInput,
        [name]:value
      })
    }
  
    const handleClick= async() => {
      try{
        await createUserWithEmailAndPassword (firebaseAuth,userInput.emailId,userInput.password)
        alert("Account created!")
  
      }catch(err){
        alert(err);
      }
    }
  
    return (
      <div className="auth-page-container">
        <div className="input-container">
          <input name="emailId" onChange={handlechange} className="inputs" placeholder="Email ID" />
          <input name="password" onChange={handlechange} className="input" type="password" placeholder="Password"/>
            <button onClick={handleClick} className="create-account-button">Create Account</button>
        </div>
      </div>
    );
  }
  export default AuthPage;