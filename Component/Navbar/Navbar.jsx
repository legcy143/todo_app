import React, { useEffect, useState , useRef} from 'react';
import style from "./Nav.module.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Notifaction from '../Utils/Notifaction';
import {useRouter} from "next/router"
import useAuth from '../../Zustandstore/authStore';

const Navbar = () => {
  let router = useRouter()
  let {userdetail , isauthenticate , logout} = useAuth()
    const [ismodal, setismodal] = useState(true)
    useEffect(() => {
      {ismodal == true ? document.body.style.overflow = 'hidden': document.body.style.overflow = 'unset' }
    }, [ismodal]);
    function closemodal(){setismodal(false)}
    
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
            <Badge color="secondary" badgeContent={5} max={9}>
        <NotificationsIcon/>
      </Badge>
      <button onClick={()=>{logout()}} >logout</button>
{
  isauthenticate == true ?<h1 style={{background:""}} onClick={()=>{setismodal(true)}}>{isauthenticate == true && userdetail.username[0]}</h1>:<button onClick={()=>{router.push("/user/auth")}}>login</button>
}
{/* <img src="/nobita.png" alt="" onClick={()=>{setismodal(true)}}/> */}

            </section>
        </nav>
        <section className={`${ismodal == true ? style.nav_modal : style.close_modal}`}  onClick={(e)=>{
          {
            e.target.parentElement.className == style.main_nav_bar && closemodal()
          }
        }}>

          <div className={style.modal_child}>
            {/* child of modal .. */}
            <Profile/>
          </div>

        </section>
    </main>
  )
}

const Notification = ()=>{
  return (
    <>
    hello notification
    </>
  )
}
const Profile = ()=>{
  return (
    <main className={style.profile_card}>
    <div className={style.header_profile}>
      <ul>
      <ArrowBackIcon/>
        <li>account</li>
      </ul>
    </div>
    <section className={style.acc_info}>
      <button>log out</button>
      <button>deactive account</button>
<a href="#">need help ? </a>
    </section>
    </main>
  )
}

export default Navbar