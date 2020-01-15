import React from 'react'
import { getSnapshot } from 'mobx-state-tree'
import App, { AppContext, AppProps, AppInitialProps } from 'next/app'
import { Provider, createStore } from '../models'
import { RootInstance } from '../models/Root'

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

  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <Provider value={this.store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}
