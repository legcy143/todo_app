import React, { useRef, useState } from 'react'
import style from "./Styles/auth.module.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useAuth from '../../Zustandstore/authStore';

const Signup = () => {
  const signupapi = useAuth((state)=>state.signupapi)

  const [passtype, setpasstype] = useState("password")
  let usernameref = useRef()
  let emailref = useRef()
  let passwordref = useRef()

  
  let emailregex = /@gmail.com/
  const handlesubmit = (e)=>{
      e.preventDefault()
      let username = usernameref.current.value;
      let email = emailref.current.value;
      let password = passwordref.current.value;
      let data = {username , email , password}

      // validation
      if (username.length >= 3 && email.length > 10 && password.length >= 5) {
        signupapi(data)
        // console.log(data)
        usernameref.current.value = "";
        emailref.current.value = "";
        passwordref.current.value = "";
      }
      else{
        signupapi()
        console.log("all filds are required")
      }

  }
  return (
    <form className={style.auth_form} onSubmit={handlesubmit}>
    <div className={style.input_box}>
    <input type="text" ref={usernameref} placeholder='username'/>
    </div>
    <div className={style.input_box}>
    <input type="text" ref={emailref} placeholder='gmail'/>
    </div>
    <div className={style.input_box}>
    <input type={passtype} ref={passwordref} placeholder='password'/>
    <div onClick={()=>{passtype == "password" ? setpasstype("text"):setpasstype("password")}}>
        {passtype == "password"?<VisibilityIcon/>:<VisibilityOffIcon/>}
    </div>
    </div>
    <button>sign up</button>
</form>
  )
}

export default Signup