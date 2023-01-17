import { Fragment, useEffect } from 'react'
import '../styles/globals.scss'
import '../styles/app.scss'

import { store } from '../store/store'
import { Provider } from 'react-redux'


export default function App({ Component, pageProps }) {

  
  return(
  <Fragment>
   <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  </Fragment>
  )
}
