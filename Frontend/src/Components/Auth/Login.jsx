import { Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../../api'
import style from "./Auth.module.css"
const init={
    email:"",
    password:""
}
const Login = ({setToggel}) => {
    const [creds,setCreds]=useState(init)
    const changeHandler=(e)=>{
    const {name,value}=e.target;
    setCreds({
        ...creds,[name]:value
    })
    }
    const navigate=useNavigate();
    const submitHandler=async (e)=>{
     e.preventDefault();
     try {
         const res=await loginApi(creds);
         alert(res.data.message)
         navigate("/dashboard");
        } catch (error) {
            alert(error.response.data.message)
     }

    }
  return (
    <div id={style.form}>
   <Heading>Login</Heading>
   <form onSubmit={submitHandler}>
   <label>Email</label>
   <input type="email" name='email' required onChange={changeHandler}/>    
   <label>Password</label>
   <input type="password" name='password' required onChange={changeHandler}/> 
   <input type="submit" value="Login" />   
   </form>
   <div class={style.formobile}>
    <p>Don't have an account?<span onClick={()=>setToggel(true)}>Signup</span></p>
   </div>
    </div>
  )
}

export default Login