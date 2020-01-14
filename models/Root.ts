import { Instance, types } from 'mobx-state-tree'
import { Counter, initCounter } from './Counter'
import { Cart, initCart } from './Cart'

export const RootModel = types.model({
  counter: Counter,
  cart: Cart
});

export const initRoot = {
  counter: initCounter,
  cart: initCart
}

export type RootInstance = Instance<typeof RootModel>;
