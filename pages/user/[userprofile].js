import React from 'react'
import style from "./userprofile.module.scss"
import FacebookIcon from '@mui/icons-material/Facebook';

const Userprofile = () => {
  return (
    <main className={style.main_profile_container}>
      <header className={style.header}>
        {/* for bg  */}
        <h1>name is also here</h1>
      </header>
      <section className={style.profile_info_container}>
        <section className={style.user_info}>
        <img src="/nobita.png" alt="" />
        <div>
        <h1>name is gone here</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora beatae fugiat ex eaque autem veniam iste soluta laboriosam distinctio, inventore expedita atque placeat</p>
        </div>
        </section>
        <section className={style.user_links}>
          <h2>connect + </h2>
          <div>
<FacebookIcon/>
<FacebookIcon/>
<FacebookIcon/>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Userprofile