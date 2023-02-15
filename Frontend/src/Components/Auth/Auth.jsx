import React, { useRef, useState } from 'react'
import style from "./Auth.module.css"
import Login from './Login';
import Signup from './Signup';
const Auth = () => {
    const [toggel,setToggel]=useState(false);
    
  return (
    <div id={style.authcont}>
    <div id={style.auth}>
    <div id={style.left}>
      <p>Don't have an account?</p>
       <button className={style.authbtn} onClick={()=>setToggel(!toggel)}>Signup</button>
    </div>    
    <div id={style.right}>
    <p>Have an account?</p>
    <button className={style.authbtn} onClick={()=>setToggel(!toggel)}>Login</button>  
    </div>    
    </div>
    <div id={toggel?style.signup:style.login}> 
    {
        toggel?<Signup setToggel={setToggel} />:<Login setToggel={setToggel} />
    }  
    </div>
   

    </div>
  )
}

export default Auth