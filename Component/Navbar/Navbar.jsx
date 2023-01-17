import React, { useState } from 'react';
import style from "./Nav.module.scss";

import {useDispatch} from "react-redux"
import {theme} from '../../store/theme';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Modal from '@mui/material/Modal';
import Badge from '@mui/material/Badge';
import Notifaction from '../Utils/Notifaction';
import {useRouter} from "next/router"

const Navbar = () => {
  let router = useRouter()
    const dispatch = useDispatch();
  return (
    <main className={style.main_nav_bar}>
        <nav className={style.nav}>
            <section className={style.logo_side}>
                <h1>tit lab</h1>
            </section>
            <section className={style.middle_part}>
                <input type="text" placeholder='search student .. '/>
                <SearchIcon />
            </section>
            <section className={style.auth_part}>
            <Badge color="secondary" badgeContent={5} max={9}>
        <NotificationsIcon/>
      </Badge>

<h1 onClick={()=>{router.push("/user/auth")}}>login</h1>
      <img src="/nobita.png" alt="" />
            </section>
        </nav>
    </main>
  )
}

export default Navbar