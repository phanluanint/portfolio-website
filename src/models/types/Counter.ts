import { Instance, types } from 'mobx-state-tree'

export const Counter = types
  .model({
    count: types.number,
  })
  .actions(self => ({
    increment(): void {
      self.count++
    },
    decrement(): void {
      self.count--
    },
  }))

export const initCounter = {
  count: 1,
}

export type CounterInstance = Instance<typeof Counter>
