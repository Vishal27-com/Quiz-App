import { Button, Heading, Text, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../../api'
import { AuthContext } from '../../Context/AuthContext'
import MyAlert  from '../MyAlert/MyAlert'
import style from "./Auth.module.css"
const init={
    email:"",
    password:""
}
const Login = ({setToggel}) => {
  const [loading,setLoading]=useState(false)
  const toast = useToast()

    const [creds,setCreds]=useState(init)
    const {setIsAuth}=useContext(AuthContext);
    const changeHandler=(e)=>{
    const {name,value}=e.target;
    setCreds({
        ...creds,[name]:value
    })
    }
    const navigate=useNavigate();
    const submitHandler=async ()=>{
     try {
         setLoading(true)
         const res=await loginApi(creds);
         setLoading(false)
         setIsAuth({
           isAuth:true,
           user:res.data.message
          })
         if(res.data.message.isAdmin){
          MyAlert('Welcome Admin','success',toast)
            navigate("/admin");
          }
          else{
          MyAlert(`Welcome ${res.data.message.name}`,'success',toast)
          navigate("/dashboard");
        }
      } catch (error) {
        setLoading(false)
        MyAlert(error.response.data.message,'error',toast)
     }

    }
  return (
    <div id={style.form}>
   <Heading>Login</Heading>
   <form>
   <label>Email</label>
   <input type="email" name='email' required onChange={changeHandler}/>    
   <label>Password</label>
   <input type="password" name='password' required onChange={changeHandler}/> 
   <Button isLoading={loading} variant='solid' colorScheme='green' onClick={submitHandler}>Login</Button> 
   </form>
   <div className={style.formobile}>
    <Text mt='20px'>Don't have an account?<span onClick={()=>setToggel(true)}>Signup</span></Text>
   </div>
    </div>
  )
}

export default Login