import { Box, Button, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { signupApi } from '../../api'
import MyAlert from '../../Components/MyAlert/MyAlert'
import style from "../../Components/Auth/Auth.module.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
const init={
    name:"",
    email:"",
    password:"",
    isAdmin:true
}
const Signup = () => {
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
        } catch (error) {
          MyAlert(error.response.data.message,'success',toast)
     }

    }
  return (
    <Box>
    <Sidebar />
    <Flex justify='center' align='center' h='90vh'>
    <div id={style.form}>
   <form>
   <label>Name</label>
   <input type="text" name='name' required onChange={changeHandler}/>    
   <label>Email</label>
   <input type="email" name='email' required onChange={changeHandler}/>    
   <label>Password</label>
   <input type="password" name='password' required onChange={changeHandler}/> 
   <Button isLoading={loading} variant='solid' colorScheme='green' onClick={submitHandler}>Register</Button> 
   </form>
    </div>
    </Flex>
    </Box>
  )
}

export default Signup