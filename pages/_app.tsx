import React from 'react'
import { Provider, createStore } from '../models'
import { getSnapshot } from 'mobx-state-tree'
import App, { AppContext, AppProps } from 'next/app'
import { RootInstance } from '../models/Root'

interface IOwnProps {
  isServer: boolean
  state: RootInstance
}

export default class MyApp extends App {
  private store: RootInstance

  static async getInitialProps ({ Component, ctx }: AppContext) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const isServer = typeof window === 'undefined'
    const rootStore = createStore(isServer, pageProps)

    return {
      state: getSnapshot(rootStore),
      isServer,
      pageProps,
    }
  }

  constructor (props: AppProps & IOwnProps) {
    super(props)
    this.store = createStore(props.isServer, props.state) as RootInstance
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider value={this.store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}