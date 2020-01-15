import { types, Instance, SnapshotIn, getParent, destroy } from 'mobx-state-tree'

export const Tag = types.model({
  name: types.string,
})

export const CartItem = types
  .model({
    name: types.string,
    price: types.number,
    tags: types.optional(types.array(Tag), []),
  })
  .actions(self => ({
    changeName(newName: string): void {
      self.name = newName
    },
    changePrice(newPrice: number): void {
      self.price = newPrice
    },
    remove(): void {
      getParent<CartInstance>(self, 2).remove(self)
    },
  }))

export const Cart = types
  .model({
    items: types.optional(types.array(CartItem), []),
  })
  .actions(self => ({
    addCartItem(cartItem: SnapshotIn<typeof CartItem> | Instance<typeof CartItem>): void {
      self.items.push(cartItem)
    },
    remove(item: SnapshotIn<typeof CartItem>): void {
      destroy(item)
    },
  }))
  .views(self => ({
    get totalItems(): number {
      return self.items.length
    },
    get totalPrice(): number {
      return self.items.reduce((sum, entry) => sum + entry.price, 0)
    },
  }))

export type CartInstance = Instance<typeof Cart>

export const initCart = { items: [] }
