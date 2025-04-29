'use client'

import Link from 'next/link'
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useCartStore } from '@/store/cartStore'

const Navigation = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const totalItems = useCartStore((state) => state.getTotalItems())

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { href: '/', label: 'HOME' },
    { href: '/item1', label: 'ITEM 1' },
    { href: '/item2', label: 'ITEM 2' },
    { href: '/item3', label: 'ITEM 3' },
    { href: '/item4', label: 'ITEM 4' },
    { href: '/item5', label: 'ITEM 5' },
  ]

  return (
    <nav className='bg-white border-b relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Mobile menu button */}
          <div className='flex items-center lg:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-600 hover:text-[#7AA65A] focus:outline-none'>
              {isMenuOpen ? (
                <XMarkIcon className='h-6 w-6' />
              ) : (
                <Bars3Icon className='h-6 w-6' />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className='hidden lg:flex flex-1 justify-center'>
            <div className='flex space-x-12'>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-4 text-base font-medium lg:text-sm transition-colors
                    ${
                      pathname === item.href
                        ? 'text-[#7AA65A]'
                        : 'text-gray-600 hover:text-[#7AA65A]'
                    }
                    ${
                      pathname === item.href &&
                      'after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#7AA65A]'
                    }
                  `}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className='flex items-center'>
            <Link
              href='/cart'
              className='text-gray-600 hover:text-[#7AA65A] relative'>
              <ShoppingCartIcon className='h-6 w-6' />
              {mounted && totalItems > 0 && (
                <span className='absolute -top-2 -right-2 bg-[#7AA65A] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className='absolute top-16 left-0 w-full bg-white border-b shadow-lg z-50'>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 text-base font-medium transition-colors border-l-4
                ${
                  pathname === item.href
                    ? 'text-[#7AA65A] border-[#7AA65A] bg-green-50'
                    : 'text-gray-600 hover:text-[#7AA65A] border-transparent hover:bg-gray-50'
                }
              `}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
