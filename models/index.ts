import { applySnapshot } from 'mobx-state-tree'
import { RootModel, initRoot, RootInstance } from './Root'
import { createContext, useContext } from 'react'

let rootStore: RootInstance | null = null

export const createStore = (isServer: boolean, pageProps: Object = {}, snapshot: RootInstance | null = null) => {
  const rootWithPageProps = {...initRoot, ...pageProps}
  if (isServer) {
    rootStore = RootModel.create(rootWithPageProps)
  }
  if (rootStore === null) {
    rootStore = RootModel.create(rootWithPageProps)
  }

  if (snapshot) {
    applySnapshot(rootStore, snapshot)
  }

  return rootStore as RootInstance;
}

const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store as RootInstance;
}
