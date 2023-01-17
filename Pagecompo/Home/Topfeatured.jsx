import React, { useRef } from 'react'
import style from "./Styles/homeitem.module.scss"
import Studentcard from "../../Component/Utils/studentcard"
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';


const Topfeatured = () => {
  let scrollsection = useRef();
  const handlescroll = (x)=>{
    scrollsection.current.scrollLeft += x
  }
  return (
    <main className={style.top_featured_main}>
        <section className={style.top_featured_container} ref={scrollsection}>
        <button className={style.btn} onClick={()=>handlescroll(-300)}>
          <ArrowIcon/>
          </button>
          <Studentcard cardstyle={{flex: "0 0 14rem"}}/>
          <Studentcard cardstyle={{flex: "0 0 14rem"}}/>
          <Studentcard cardstyle={{flex: "0 0 14rem"}}/>
          <Studentcard cardstyle={{flex: "0 0 14rem"}}/>
          <Studentcard cardstyle={{flex: "0 0 14rem"}}/>
          <Studentcard cardstyle={{flex: "0 0 14rem"}}/>
          <Studentcard cardstyle={{flex: "0 0 14rem"}}/>
          <Studentcard cardstyle={{flex: "0 0 14rem"}}/>
          <Studentcard cardstyle={{flex: "0 0 14rem"}}/>
          <button className={style.btn} onClick={()=>handlescroll(300)}>
        <ArrowIcon/>
        </button>
        </section>
    </main>
  )
}

export default Topfeatured