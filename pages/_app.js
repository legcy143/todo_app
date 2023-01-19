import { Fragment, useEffect } from 'react'
import '../styles/globals.scss'
import '../styles/app.scss'
import useAuth from '../Zustandstore/authStore'

export default function App({ Component, pageProps }) {
  
  let fetchuser = useAuth((state)=>state?.fetchuser)
  useEffect(()=>{
    fetchuser()
  } , [])
  
  
  return(
  <Fragment>
  <Component {...pageProps} />
  </Fragment>
  )
}
