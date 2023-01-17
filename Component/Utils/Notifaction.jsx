import React from 'react'
import style from "./Styles/Notification.module.scss"
import CloseIcon from '@mui/icons-material/Close';

const Notifaction = ({handleClose}) => {
  return (
    <section className={style.notify_container}>
        <nav>
            <h1>
            notification
            </h1>
            <CloseIcon onClick={handleClose}/>
        </nav>
        <section className={style.message_box}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus provident commodi porro. Quos blanditiis quas minus natus veniam id impedit atque nesciunt vel iste modi nulla, maxime exercitationem consequuntur.</p>
        </section>
        <section className={style.message_box}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus provident commodi porro. Quos blanditiis quas minus natus veniam id impedit atque nesciunt vel iste modi nulla, maxime exercitationem consequuntur.</p>
        </section>
        <section className={style.message_box}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ducimus provident commodi porro. Quos blanditiis quas minus natus veniam id impedit atque nesciunt vel iste modi nulla, maxime exercitationem consequuntur.</p>
        </section>
</section>
  )
}

export default Notifaction