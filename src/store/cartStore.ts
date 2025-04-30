import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartProduct {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

interface CartStore {
  items: CartProduct[]
  addItem: (item: CartProduct) => void
  removeItem: (id: number) => void
  clearCart: () => void
  getTotalItems: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item: CartProduct) => {
        set((state: CartStore) => {
          const existingItem = state.items.find(
            (i: CartProduct) => i.id === item.id,
          )
          if (existingItem) {
            return {
              items: state.items.map((i: CartProduct) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            }
          }
          return { items: [...state.items, item] }
        })
      },
      removeItem: (id: number) => {
        set((state: CartStore) => ({
          items: state.items.filter((item: CartProduct) => item.id !== id),
        }))
      },
      clearCart: () => {
        set({ items: [] })
      },
      getTotalItems: () => {
        return get().items.reduce(
          (total: number, item: CartProduct) => total + item.quantity,
          0,
        )
      },
    }),
    {
      name: 'cart-storage',
    },
  ),
)
