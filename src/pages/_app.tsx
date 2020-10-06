import React from 'react'
import { AppProps } from 'next/app'
import '../styles/app.css'
// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  // useEffect(lazyLoadStyles, [])
  return <Component {...pageProps} />
}

export default MyApp
