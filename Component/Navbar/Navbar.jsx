import React, { useEffect, useState, useRef } from 'react';
import style from "./Nav.module.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Notifaction from '../Utils/Notifaction';
import { useRouter } from "next/router"
import useAuth from '../../Zustandstore/authStore';
import LogoutIcon from '@mui/icons-material/Logout';
import WarningIcon from '@mui/icons-material/Warning';
import useNotification from "../../Zustandstore/notification";

const Navbar = () => {
  let { userdetail, isauthenticate, logout } = useAuth()
  let router = useRouter()
  const [ismodal, setismodal] = useState(false)
  const [ismodalcompo, setismodalcompo] = useState(<>loading ..</>)
  let {notificationdata} = useNotification()
  console.log("notificationdata => " , notificationdata.length)
  useEffect(() => {
    { ismodal == true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset' }
  }, [ismodal]);
  function closemodal() { setismodal(false) }

  return (
    <main className={style.main_nav_bar}>
      <nav className={style.nav}>
        <section className={style.logo_side}>
          <div>
            <h1>legcy todo</h1>
            <small>save your work on cloud</small>
          </div>
        </section>
        <section className={style.middle_part}>
          {/* <input type="text" placeholder='search student .. '/>
                <SearchIcon /> */}
        </section>
        <section className={style.auth_part}>
          <Badge color="secondary" badgeContent={notificationdata.length} max={9} onClick={() => {setismodal(true);setismodalcompo(< Notification data={notificationdata} closemodal={closemodal}/>)}}>
            <NotificationsIcon />
          </Badge>
          {/* <button onClick={() => { logout() }} >logout</button> */}
          {
            isauthenticate == true ? <h1 style={{ background: "" }} onClick={() => { setismodal(true);setismodalcompo(<Profile closemodal={closemodal} />) }}>{isauthenticate == true && userdetail.username[0]}</h1> : <button onClick={() => { router.push("/user/auth") }}>login</button>
          }
          {/* <img src="/nobita.png" alt="" onClick={()=>{setismodal(true)}}/> */}

        </section>
      </nav>
      <section className={`${ismodal == true ? style.nav_modal : style.close_modal}`} onClick={(e) => {
        {
          e.target.parentElement.className == style.main_nav_bar && closemodal()
        }
      }}>

        <div className={style.modal_child}>
          {/* child of modal .. */}
          {ismodalcompo}
        </div>

      </section>
    </main>
  )
}

const Notification = ({closemodal , data}) => {
  console.log("data === >>> " , data)
  return (
    <main className={style.profile_card}>
    <div className={style.header_profile}>
      <ul onClick={() => { closemodal() }} >
        <ArrowBackIcon />
        <li>Notification</li>
      </ul>
    </div>

    <ul className={style.notification_ul}>
      {
        data.map((e)=>{
          return (
            <li>
              {e.message}
            </li>
          )
        })
      }
    </ul>
   
  </main>
  )
}

const Profile = ({closemodal}) => {
  let { userdetail, isauthenticate, logout } = useAuth()
  const [pagecompo, setpagecompo] = useState(0)
  return (
    <main className={style.profile_card}>
      <div className={style.header_profile}>
        <ul onClick={() => { closemodal() }} >
          <ArrowBackIcon />
          <li>account</li>
        </ul>
        <ul style={{ width: "3rem" }}>
          <LogoutIcon onClick={() => { logout() }} />
        </ul>
      </div>
      {
        pagecompo == 1 ? <section className={style.sure_deactive}>
          <h1>are you sure to deactive account</h1>
          <p>by deleting account , all data erase permanently</p>
          <div>
            <button onClick={() => { setpagecompo(0) }}>No , keep</button>
            <button>yes , delete</button>
          </div>
        </section>
          : <section className={style.acc_info}>
            {
              isauthenticate == false ? <div>loading ..</div> :
                <div>
                  <h1>
                    {userdetail.username[0]}
                  </h1>
                  <ul>
                    <li>{userdetail.email}</li>
                    <small>{userdetail.username}</small>
                  </ul>
                </div>
            }
            <button onClick={()=>{setpagecompo(1)}}><WarningIcon /> deactive account</button>
            <a  href = "mailto: legcy143@gmail.com">need help ? </a>
            <a  href = "mailto: legcy143@gmail.com">legcy143@gmail.com</a>
          </section>
      }
    </main>
  )
}

export default Navbar