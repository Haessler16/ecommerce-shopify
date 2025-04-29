'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Grid } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/grid'

const products = [
  { id: 1, image: '/girl_1.png', price: 176.98 },
  { id: 2, image: '/girl_2.png', price: 156.98 },
  { id: 3, image: '/girl_3.png', price: 176.98 },
  { id: 4, image: '/girl_4.png', price: 164.98 },
  { id: 5, image: '/girl_1.png', price: 156.98 },
  { id: 6, image: '/girl_2.png', price: 146.98 },
  { id: 7, image: '/girl_3.png', price: 176.98 },
  { id: 8, image: '/girl_4.png', price: 165.98 },
  // Duplicated items for more slides
  { id: 9, image: '/girl_1.png', price: 176.98 },
  { id: 10, image: '/girl_2.png', price: 156.98 },
  { id: 11, image: '/girl_3.png', price: 176.98 },
  { id: 12, image: '/girl_4.png', price: 164.98 },
  { id: 13, image: '/girl_1.png', price: 156.98 },
  { id: 14, image: '/girl_2.png', price: 146.98 },
  { id: 15, image: '/girl_3.png', price: 176.98 },
  { id: 16, image: '/girl_4.png', price: 165.98 },
]

const FeaturedCollection = () => {
  return (
    <section className='py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white'>
      <h2 className='text-[#7AA65A] text-2xl md:text-3xl font-light mb-8 text-center'>
        Featured Collection
      </h2>

      <div className='relative'>
        <Swiper
          modules={[Navigation, Grid]}
          grid={{
            rows: 4,
            fill: 'row',
          }}
          slidesPerView={2}
          slidesPerGroup={4}
          spaceBetween={16}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              grid: {
                rows: 2,
                fill: 'row',
              },
              spaceBetween: 24,
            },
          }}
          style={
            {
              '--swiper-navigation-size': '24px',
            } as React.CSSProperties
          }>
          {products.map((product) => (
            <SwiperSlide key={product.id} className='!h-auto'>
              <div className='flex flex-col p-3 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full'>
                <div className='relative aspect-[3/4] overflow-hidden mb-3'>
                  <Image
                    src={product.image}
                    alt='Product'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 50vw, 25vw'
                    priority={product.id <= 8}
                  />
                </div>

                {/* Info */}
                <div className='flex items-center justify-between gap-2 px-1'>
                  <div className='flex items-center gap-2'>
                    <span className='text-gray-900 font-medium'>
                      ${product.price}
                    </span>
                  </div>
                  <Link
                    href={`/product/${product.id}`}
                    className='bg-[#7AA65A] text-white text-sm px-3 py-1 rounded-full hover:bg-[#698f4d] transition-colors'>
                    BUY NOW
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <NavigationButtons />
        </Swiper>
      </div>
    </section>
  )
}

const NavigationButtons = () => {
  const swiper = useSwiper()
  return (
    <div className='flex justify-center items-center space-x-2 mt-8'>
      <button
        onClick={() => swiper.slidePrev()}
        className='w-14 h-10 rounded-full border-2 border-[#7AA65A] flex items-center justify-center text-[#7AA65A] hover:bg-[#7AA65A] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='size-6'>
          <path
            fillRule='evenodd'
            d='M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className='w-14 h-10 rounded-full bg-[#7AA65A] flex items-center justify-center text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='size-6'>
          <path
            fillRule='evenodd'
            d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  )
}

export default FeaturedCollection
