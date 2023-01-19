import React, { useEffect, useRef, useState } from 'react'
import style from "./Styles/auth.module.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useAuth from '../../Zustandstore/authStore';

const Login = () => {
  let {loginapi , userdetail , isauthenticate} = useAuth() 
  
    const [passtype, setpasstype] = useState("password")
    let emailref = useRef()
    let passwordref = useRef()
  
    let emailregex = /@gmail.com/
    const handlesubmit = (e)=>{
        e.preventDefault()
        let email = emailref.current.value;
        let password = passwordref.current.value;
        let data = { email , password}

        //validaion function 
          if (emailregex.test(email) && password.length >= 5) {
                  loginapi(data)
                  // console.log(data)
                  emailref.current.value = "";
                  passwordref.current.value = "";
          }
          else{
            console.log("use erro msg that invalid error")
          }
    }

  return (
    // <form className={style.auth_form} onSubmit={handlesubmit}>
    <form className={style.auth_form} onSubmit={handlesubmit}>
        <div className={style.input_box}>
        <input type="text" ref={emailref} placeholder=' email'/>
        </div>
        <div className={style.input_box}>
        <input type={passtype} ref={passwordref} placeholder='password'/>
        <div onClick={()=>{passtype == "password" ? setpasstype("text"):setpasstype("password")}}>
            {passtype == "password"?<VisibilityIcon/>:<VisibilityOffIcon/>}
        </div>
        </div>
        <button>log in</button>
    </form>
  )
}

export default Login