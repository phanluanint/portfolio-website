import { applySnapshot } from 'mobx-state-tree'
import { createContext, useContext } from 'react'
import { RootModel, initRoot, RootInstance } from './Root'

let rootStore: RootInstance | null = null

export const createStore = (
  isServer: boolean,
  pageProps: object = {},
  snapshot: RootInstance | null = null,
): RootInstance => {
  const rootWithPageProps = { ...initRoot, ...pageProps }
  if (isServer) {
    rootStore = RootModel.create(rootWithPageProps)
  }
  if (rootStore === null) {
    rootStore = RootModel.create(rootWithPageProps)
  }

  if (snapshot) {
    applySnapshot(rootStore, snapshot)
  }

  return rootStore
}

const RootStoreContext = createContext<null | RootInstance>(null)

export const { Provider } = RootStoreContext

export function useMst(): RootInstance {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store
}
