import React, { useState } from 'react'
import Signup from '../../Pagecompo/Account/Signup'
import Login from '../../Pagecompo/Account/Login'
import style from "./account.module.scss"
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/router"

const auth = () => {
  let router = useRouter()
  const [page, setpage] = useState(0)
  return (
    <main className={style.auth_profile_main}>
      <section className={style.auth_profile_card}>
        <div className={style.backbtn} onClick={()=>{router.push("/")}}>
          <CloseIcon/>
        </div>
        <div className={style.logo}>
          <h1>tit lab</h1>
          <p>welcome to tit lab</p>
        </div>
        {
          page == 0 ?
        <Login/>:
        <Signup/>
        }

        {
          page == 0 ?
        <div onClick={()=>{setpage(1)}} className={style.link_tag}>
          new user ? <b>create account</b>
        </div>
        :
        <div onClick={()=>{setpage(0)}} className={style.link_tag}>
          already an account <b>log in</b>
        </div>
        }
      </section>
    </main>
  )
}

export default auth