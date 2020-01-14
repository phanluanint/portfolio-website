import { Instance, types } from 'mobx-state-tree'
import { RootModel } from './Root'

export const Counter = types
.model({
  count: types.number
})
.actions(self => ({
  increment() {
    self.count++;
  },
  decrement() {
    self.count--;
  }
}));

export const initCounter = {
  count: 1
}

export type CounterInstance = Instance<typeof Counter>;
