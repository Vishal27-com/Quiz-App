import React, { useState } from 'react'
import { loginApi } from '../../api'
import style from "./Auth.module.css"
const init={
    email:"",
    password:""
}
const Login = () => {
    const [creds,setCreds]=useState(init)
    const changeHandler=(e)=>{
    const {name,value}=e.target;
    setCreds({
        ...creds,[name]:value
    })
    }
    const submitHandler=async (e)=>{
     e.preventDefault();
     try {
         const res=await loginApi(creds);
         alert(res.data.message)
        } catch (error) {
            alert(error.response.data.message)
     }

    }
  return (
    <div id={style.form}>
   <h1 className={style.formHeading}>Login</h1>
   <form onSubmit={submitHandler}>
   <label>Email</label>
   <input type="email" name='email' required onChange={changeHandler}/>    
   <label>Password</label>
   <input type="password" name='password' required onChange={changeHandler}/> 
   <input type="submit" value="Login" />   
   </form>
    </div>
  )
}

export default Login