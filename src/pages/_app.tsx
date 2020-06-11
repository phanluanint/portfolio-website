import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import '../styles/app.css'

const lazyLoadStyles = (): void => {
  if (typeof window !== 'undefined') {
    import('webfontloader').then((WebFont) =>
      WebFont.load({
        google: {
          families: ['Nunito:400,600,700,900:vietnamese'],
        },
      }),
    )
    const sheet = document.createElement('link')
    sheet.rel = 'stylesheet'
    sheet.href = '/icons/style.css'
    sheet.type = 'text/css'
    document.head.appendChild(sheet)
  }
}

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  useEffect(lazyLoadStyles, [])
  return <Component {...pageProps} />
}

export default MyApp
