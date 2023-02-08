import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputForm from '../InputForm/InputForm'
import styles from "./Signup.module.css"
import {auth} from "../../Firebase"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
export default function Signup() {
    const [values,setValues] = useState({
        name:"",
        email:"",
        pass:""
    })
    const [submitBtnDisabled,setSubmitBtnDisabled] = useState(false)
    const navigate = useNavigate()
    const [errorMsg,seterrorMsg] = useState("")
    const handleSubmission=()=> {
        if(!values.name || !values.email || !values.pass) {
            seterrorMsg("**Fill All Fields")
            return;
        }
        seterrorMsg("")
        setSubmitBtnDisabled(true)
        createUserWithEmailAndPassword(auth,values.email,values.pass).then((res)=>{
            const user = res.user;
            console.log(user)
            updateProfile(user,{
              displayName:values.name
            })
            navigate("/Login")
        }).catch((err)=>{
          setSubmitBtnDisabled(false)
          seterrorMsg(err.message)
        })
        
    }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>SignUp</h1>
        <InputForm  label="Name :" type="text" placeholder="Enter Your Name" onChange={(event)=>(setValues((prev)=>({...prev,name:event.target.value})))}/>
        <InputForm label="Email :" type="email" placeholder="Enter Your Email" onChange={(event)=>(setValues((prev)=>({...prev,email:event.target.value})))}/>
        <InputForm label="Password :" type="password" placeholder="Enter Your Password" onChange={(event)=>(setValues((prev)=>({...prev,pass:event.target.value})))}/>
        <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission} disabled={submitBtnDisabled}>SignUp</button>
            <p>Already have an account ?</p>
            <span>
                <Link to="/Login">Login</Link>
            </span>
        </div>
      </div>
    </div>
  )
}
