import { Button, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { signupApi } from '../../api'
import style from "./Auth.module.css"
const init={
    name:"",
    email:"",
    password:""
}
const Signup = ({setToggel}) => {
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
         setToggel(false);
        } catch (error) {
          alert(error.response.data.message) 
     }

    }
  return (
    <div id={style.form}>
   <Heading>Signup</Heading>
   <form>
   <label>Name</label>
   <input type="text" name='name' required onChange={changeHandler}/>    
   <label>Email</label>
   <input type="email" name='email' required onChange={changeHandler}/>    
   <label>Password</label>
   <input type="password" name='password' required onChange={changeHandler}/> 
   <Button variant='solid' colorScheme='green' onClick={submitHandler}>Login</Button> 
   </form>
   <div class={style.formobile}>
    <p>Have an account?<span onClick={()=>setToggel(false)}>Login</span></p>
   </div>
    </div>
  )
}

export default Signup