import { Fragment, useEffect } from 'react'
import '../styles/globals.scss'
import '../styles/app.scss'
import useAuth from '../Zustandstore/authStore'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  
  let {fetchuser , isauthenticate} = useAuth()
  let router = useRouter()

  useEffect(()=>{
    fetchuser()
    if(!isauthenticate){
      router.push("/user/auth")
    }
  } , [])
  
  
  return(
  <Fragment>
  <Component {...pageProps} />
  </Fragment>
  )
}
