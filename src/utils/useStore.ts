import { createContext, useContext } from 'react'
import { RootInstance } from '../models'

const RootStoreContext = createContext<null | RootInstance>(null)

export const { Provider } = RootStoreContext

const useStore = (): RootInstance => {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store
}

export default useStore
