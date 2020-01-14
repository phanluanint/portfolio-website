import React from 'react'
import { Provider, createStore } from '../models'
import { getSnapshot } from 'mobx-state-tree'
import App, { AppContext, AppProps } from 'next/app'
import { RootInstance } from '../models/Root'

interface IOwnProps {
  isServer: boolean
  initialState: RootInstance
}

export default class MyApp extends App {
  private store: RootInstance

  static async getInitialProps ({
    Component, ctx }: AppContext) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //
    const isServer = typeof window === 'undefined'
    //
    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    //
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const rootStore = createStore(isServer, null, pageProps)

    console.log('rootStore', JSON.stringify(rootStore))

    return {
      initialState: getSnapshot(rootStore),
      isServer,
      pageProps,
    }
  }

  constructor (props: AppProps & IOwnProps) {
    super(props)
    this.store = createStore(props.isServer, props.initialState) as RootInstance
  }

  render () {
    const { Component, pageProps } = this.props
    console.log(JSON.stringify(this.store))
    return (
      <Provider value={this.store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}