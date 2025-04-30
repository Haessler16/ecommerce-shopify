'use client'

import { CartProduct } from '@/store/cartStore'

interface ShoppingCartModalProps {
  isOpen: boolean
  onClose: () => void
  cartItems: CartProduct[]
  onRemoveItem: (id: number) => void
  onAddToCart: () => void
}

const ShoppingCartModal = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onAddToCart,
}: ShoppingCartModalProps) => {
  if (!isOpen) return null

  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0)

  return (
    <div className='fixed inset-0 bg-[#0000008a] flex items-center justify-center z-50'>
      <div className='bg-white rounded-2xl p-6 max-w-md w-full mx-4'>
        <h2 className='text-2xl font-light text-[#7AA65A] mb-4'>
          Shopping Cart
        </h2>

        <div className='space-y-4 max-h-96 overflow-y-auto mb-6'>
          {cartItems.length === 0 ? (
            <p className='text-gray-500 text-center'>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className='flex items-center justify-between p-3 bg-gray-50 rounded-xl'>
                <div className='flex items-center space-x-3'>
                  <div className='relative w-16 h-16 rounded-lg overflow-hidden'>
                    <img
                      src={item.image || '/girl_1.png'}
                      alt='Product'
                      className='object-cover w-full h-full'
                    />
                  </div>
                  <div>
                    <p className='text-gray-900 font-medium'>
                      Product #{item.id}
                    </p>
                    <p className='text-gray-500'>Quantity: {item.quantity}</p>
                    <p className='text-[#7AA65A]'>
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className='text-red-500 hover:text-red-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'>
                    <path
                      fillRule='evenodd'
                      d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className='border-t pt-4 mb-6'>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-gray-600'>Total:</span>
              <span className='text-[#7AA65A] font-medium text-xl'>
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        )}

        <div className='flex justify-end space-x-4'>
          <button
            onClick={onClose}
            className='px-6 py-2 border-2 border-[#a65a5a] text-[#a65a5a] rounded-full hover:bg-[#a65a5a] hover:text-white transition-colors'>
            Cancel
          </button>
          <button
            onClick={onAddToCart}
            className='px-6 py-2 bg-[#7AA65A] text-white rounded-full hover:opacity-90 transition-opacity'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartModal
