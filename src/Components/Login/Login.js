import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase'
import InputForm from '../InputForm/InputForm'
import styles from "./Login.module.css"
export default function Login() {
  const [values, setValues] = useState({
    name: "",
    pass: ""
  })
  const navigate = useNavigate()
  const [errorMsg, seterrorMsg] = useState("")
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false)
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      seterrorMsg("**All Fields are Mandatary")
      return
    }
    seterrorMsg("")
    setSubmitBtnDisabled(true)
    signInWithEmailAndPassword(auth, values.email, values.pass).then((res) => {
      navigate("/todo")
    }).catch((err) => {
      setSubmitBtnDisabled(false)
      seterrorMsg(err.message)
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputForm label="Email :" type="email" placeholder="Enter Your Email" onChange={(event) => (setValues((prev) => ({ ...prev, email: event.target.value })))} />
        <InputForm label="Password :" type="password" placeholder="Enter Your Password" onChange={(event) => (setValues((prev) => ({ ...prev, pass: event.target.value })))} />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitBtnDisabled}>Login</button>
          <p>Already have an account ?</p>
          <span>
            <Link to="/Signup">Signup</Link>
          </span>
        </div>
      </div>
    </div>
  )

}
