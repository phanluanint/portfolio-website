import { applySnapshot, onSnapshot } from 'mobx-state-tree'
import { RootModel, initRoot, RootInstance } from './Root'
import { createContext, useContext } from 'react'

let rootStore: RootInstance | null = null

export const createStore = (isServer: boolean, snapshot: RootInstance | null = null, pageProps: Object  | null = null) => {
  if (isServer) {
    rootStore = RootModel.create(initRoot)
  }
  if (rootStore === null) {
    rootStore = RootModel.create(initRoot)
  }

  if (pageProps) {
    applySnapshot(rootStore, {...initRoot, ...pageProps})
  }

  if (snapshot) {
    applySnapshot(rootStore, snapshot)
  }

  onSnapshot(rootStore, snapshot => console.log("Snapshot: ", snapshot));
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
