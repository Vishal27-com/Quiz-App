import { Button, Heading } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../../api'
import { AuthContext } from '../../Context/AuthContext'
import style from "./Auth.module.css"
const init={
    email:"",
    password:""
}
const Login = ({setToggel}) => {
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
         const res=await loginApi(creds);
         setIsAuth({
           isAuth:true,
           user:res.data.message
          })
         if(res.data.message.isAdmin){
            alert(`Welcome Admin - ${res.data.message.name}`);
            navigate("/admin");
          }
          else{
            alert(`Welcome User - ${res.data.message.name}`);
            navigate("/dashboard");
          }
        } catch (error) {
            alert(error.response.data.message)
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
   <Button variant='solid' colorScheme='green' onClick={submitHandler}>Login</Button> 
   </form>
   <div class={style.formobile}>
    <p>Don't have an account?<span onClick={()=>setToggel(true)}>Signup</span></p>
   </div>
    </div>
  )
}

export default Login