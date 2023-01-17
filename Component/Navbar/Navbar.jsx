import React, { useEffect, useState , useRef} from 'react';
import style from "./Nav.module.scss";

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Notifaction from '../Utils/Notifaction';
import {useRouter} from "next/router"

const Navbar = () => {
  let router = useRouter()
    const [ismodal, setismodal] = useState(false)
    useEffect(() => {
      {ismodal == true ? document.body.style.overflow = 'hidden': document.body.style.overflow = 'unset' }
      // document.body.style.overflow = 'hidden';
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
<button onClick={()=>{router.push("/user/auth")}}>login</button>
      <img src="/nobita.png" alt="" onClick={()=>{setismodal(true)}}/>
            </section>
        </nav>
        <section className={`${ismodal == true ? style.nav_modal : style.close_modal}`}  onClick={(e)=>{
          {
            e.target.parentElement.className == style.main_nav_bar && closemodal()
          }
        }}>
          <div className={style.modal_child}>
          hello modal
        
          <button onClick={()=>{
          //  closemodal()
          }}>close</button>
          </div>
        </section>
    </main>
  )
}

export default Navbar