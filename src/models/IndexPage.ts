import { Instance, types } from 'mobx-state-tree'
import { Counter, initCounter } from './types/Counter'
import { Cart, initCart } from './types/Cart'

export const IndexPage = types.model({
  counter: Counter,
  cart: Cart,
})

export const initIndexPage = {
  counter: initCounter,
  cart: initCart,
}

export type IndexPageInstance = Instance<typeof IndexPage>
