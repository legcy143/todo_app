import { Fragment, useEffect } from 'react'
import '../styles/globals.scss'
import '../styles/app.scss'


export default function App({ Component, pageProps }) {

  
  return(
  <Fragment>
  <Component {...pageProps} />
  </Fragment>
  )
}
