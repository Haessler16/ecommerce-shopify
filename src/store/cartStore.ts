import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: number
  price: number
  image: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  clearCart: () => void
  getTotalItems: () => number
}

type CartState = StateCreator<CartStore>

export const useCartStore = create<CartStore>()(
  persist(
    ((set, get) => ({
      items: [],
      addItem: (item: CartItem) => {
        set((state: CartStore) => {
          const existingItem = state.items.find(
            (i: CartItem) => i.id === item.id,
          )
          if (existingItem) {
            return {
              items: state.items.map((i: CartItem) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            }
          }
          return { items: [...state.items, item] }
        })
      },
      removeItem: (id: number) => {
        set((state: CartStore) => ({
          items: state.items.filter((item: CartItem) => item.id !== id),
        }))
      },
      clearCart: () => {
        set({ items: [] })
      },
      getTotalItems: () => {
        return get().items.reduce(
          (total: number, item: CartItem) => total + item.quantity,
          0,
        )
      },
    })) as CartState,
    {
      name: 'cart-storage',
    },
  ),
)
