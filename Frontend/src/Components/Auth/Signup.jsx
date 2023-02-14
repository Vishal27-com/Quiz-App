import React, { useState } from 'react'
import { signupApi } from '../../api'
import style from "./Auth.module.css"
const init={
    name:"",
    email:"",
    password:""
}
const Signup = () => {
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
         const res=await signupApi(creds);
         alert(res.data.message)
        } catch (error) {
            
        //  alert(res.data.message)
     }

    }
  return (
    <div id={style.form}>
    <h1 className={style.formHeading}>Signup</h1> 
   <form onSubmit={submitHandler}>
   <label>Name</label>
   <input type="text" name='name' required onChange={changeHandler}/>    
   <label>Email</label>
   <input type="email" name='email' required onChange={changeHandler}/>    
   <label>Password</label>
   <input type="password" name='password' required onChange={changeHandler}/> 
   <input type="submit" value="Signup" />   
   </form>
    </div>
  )
}

export default Signup