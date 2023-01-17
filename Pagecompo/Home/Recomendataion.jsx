import React from 'react'
import style from "./Styles/homeitem.module.scss"
import Studentcard from "../../Component/Utils/studentcard"

const Recomendataion = () => {
  return (
    <main className={style.recomendation_container}>
         <Studentcard />
          <Studentcard />
         <Studentcard />
          <Studentcard />
         <Studentcard />
          <Studentcard />
          
    </main>
  )
}

export default Recomendataion