import React from 'react'
import style from "./Styles/studentcard.module.scss"
import { useRouter } from "next/router"

const studentcard = (props) => {
  let router = useRouter()
  return (
    <main className={style.main_card} style={props.cardstyle}>
        <img src="/nobita.png" alt="" />
        <section>
            <h1>name is name</h1>
            <p>bio  me kya he likh skte hai Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur deserunt ea aliquid molestias laboriosam nisi saepe possimus, magnam reiciendis, minus,</p>
             <button onClick={()=>{router.push("user/userprofile")}}>view profile</button>
        </section>
    </main>
  )
}

export default studentcard