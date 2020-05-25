import React, { useEffect } from 'react'
import { getSnapshot } from 'mobx-state-tree'
import App, { AppContext, AppProps, AppInitialProps } from 'next/app'
import { Provider } from '../utils/useStore'
import createStore from '../utils/createStore'
import { RootInstance } from '../models'
import '../styles/app.css'

interface MSTProps {
  isServer: boolean
  proxyState: RootInstance
}

export default class MyApp extends App {
  protected store: RootInstance

  static getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps & MSTProps> => {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const isServer = typeof window === 'undefined'
    const rootStore = createStore(isServer, pageProps)

    return {
      proxyState: getSnapshot<RootInstance>(rootStore),
      isServer,
      pageProps,
    }
  }

  constructor(props: AppProps & MSTProps) {
    super(props)
    this.store = createStore(props.isServer, props.proxyState)
  }

  loadFontStyles = (): void => {
    const sheet = document.createElement('link')
    sheet.rel = 'stylesheet'
    sheet.href = '/icons/style.css'
    sheet.type = 'text/css'
    document.head.appendChild(sheet)
  }

  componentDidMount(): void {
    if (typeof window !== 'undefined') {
      import('webfontloader').then(WebFont =>
        WebFont.load({
          google: {
            families: ['Nunito:400,600,700,900:vietnamese'],
          },
        }),
      )
      this.loadFontStyles()
    }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <Provider value={this.store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}
