import { Instance, types } from 'mobx-state-tree'
import { IndexPage, initIndexPage } from './IndexPage'

export const RootModel = types.model({
  IndexPage,
})

export const initRoot = {
  IndexPage: initIndexPage,
}

export type RootInstance = Instance<typeof RootModel>
