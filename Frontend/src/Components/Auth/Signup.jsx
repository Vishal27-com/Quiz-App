import { Button, Heading, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { signupApi } from '../../api'
import MyAlert from '../MyAlert/MyAlert'
import style from "./Auth.module.css"
const init={
    name:"",
    email:"",
    password:""
}
const Signup = ({setToggel}) => {
  const toast = useToast()
    const [loading,setLoading]=useState(false);
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
         setLoading(true);
         const res=await signupApi(creds);
         setLoading(false);
         MyAlert(res.data.message,'success',toast)
         setToggel(false);
        } catch (error) {
          MyAlert(error.response.data.message,'success',toast)
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
   <Button isLoading={loading} variant='solid' colorScheme='green' onClick={submitHandler}>Signup</Button> 
   </form>
   <div className={style.formobile}>
    <Text mt='20px'>Have an account?<span onClick={()=>setToggel(false)}>Login</span></Text>
   </div>
    </div>
  )
}

export default Signup