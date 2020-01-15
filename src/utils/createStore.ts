import { applySnapshot } from 'mobx-state-tree'
import { initRoot, RootInstance, RootModel } from '../models'

let rootStore: RootInstance | null = null
const createStore = (isServer: boolean, pageProps: object = {}, snapshot: RootInstance | null = null): RootInstance => {
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

export default createStore
