'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { iProduct } from '@/utils/interfaces/Product'

const Hero = ({ products }: { products: iProduct[] }) => {
  const heroProducts = products.slice(0, 3)

  return (
    <section className='relative  w-full overflow-hidden'>
      {/* Background Image */}
      <Image
        src='/sky_2.png'
        alt='Sky background'
        fill
        className='object-cover object-center'
        priority
      />

      <div className='relative max-w-7xl mx-auto flex items-center'>
        <Swiper
          modules={[Navigation]}
          className='w-full h-full flex items-center'>
          {heroProducts.map((product) => (
            <SwiperSlide key={product.id} className='flex items-center h-full'>
              {/* Desktop Layout */}
              <section className='hidden lg:flex h-full items-center px-20 py-10 w-full'>
                {/* Info */}
                <div className='flex-1 pr-8 space-y-8'>
                  <div className='space-y-4'>
                    <h1 className='text-[#7AA65A] text-[60px] font-light leading-tight'>
                      {product.title}
                    </h1>
                    <p className='text-[#7AA65A] text-[16px] font-light max-w-xl'>
                      {product.description}
                    </p>
                  </div>

                  <div className='flex  gap-4 max-w-md'>
                    <Link
                      href='/shop'
                      className='w-[226px] h-[57px] inline-flex items-center justify-center bg-[#7AA65A] text-white px-8 py-3 rounded-[10px] text-lg font-medium transition-transform hover:scale-105'>
                      SHOP NOW
                      <svg
                        className='ml-2 w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </Link>
                    <Link
                      href='/quiz'
                      className='w-[226px] h-[57px] inline-flex items-center justify-center border-2 border-[#7AA65A] text-[#7AA65A] px-8 py-3 rounded-[10px] text-lg font-medium transition-colors hover:bg-[#7AA65A] hover:text-white'>
                      TAKE THE QUIZ
                      <svg
                        className='ml-2 w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Hero Image */}
                <div className='flex-1 flex justify-end '>
                  <div className='w-[380px] h-[510px] relative rounded-2xl overflow-hidden'>
                    <Image
                      src={product.images.nodes[0]?.src || '/girl_1.png'}
                      alt={product.title}
                      fill
                      className='w-full h-auto rounded-2xl'
                      priority
                    />
                  </div>
                </div>
              </section>

              {/* Mobile Layout */}
              <section className='flex flex-col items-center px-4 py-8 lg:hidden w-full'>
                {/* Hero Image */}
                <div className='w-full max-w-96'>
                  <Image
                    src={product.images.nodes[0]?.src || '/girl_1.png'}
                    alt={product.title}
                    width={300}
                    height={300}
                    style={{ objectFit: 'contain' }}
                    className='w-full h-auto rounded-2xl'
                    priority
                  />
                </div>
                {/* Text */}
                <div className='text-center space-y-6 mb-8 mt-9'>
                  <h1 className='text-[#7AA65A] text-[34px] font-[400] '>
                    {product.title}
                  </h1>

                  <div className='flex flex-col items-center gap-4'>
                    <Link
                      href='/shop'
                      className='inline-flex items-center justify-between bg-[#7AA65A] text-white px-8 py-3 rounded-[10px] text-[13px] font-[400] transition-transform hover:scale-105 w-[184px] max-w-xs'>
                      SHOP NOW
                      <svg
                        className='ml-2 w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </Link>
                    <Link
                      href='/quiz'
                      className='hidden lg:inline-flex items-center justify-center border-2 border-[#7AA65A] text-[#7AA65A] px-8 py-3 rounded-lg text-lg font-medium transition-colors hover:bg-[#7AA65A] hover:text-white w-full max-w-xs'>
                      TAKE THE QUIZ
                      <svg
                        className='ml-2 w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </Link>
                    <p className='lg:hidden text-black text-[13px] font-[400]'>
                      TAKE THE QUIZ
                    </p>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
          {/* Navigation Arrows - Desktop */}
          <div className='hidden lg:block absolute bottom-8 left-20 z-10'>
            <NavArrows />
          </div>
          {/* Navigation Arrows - Mobile */}
          <div className='lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10'>
            <NavArrows />
          </div>
        </Swiper>
      </div>
    </section>
  )
}

const NavArrows = () => {
  const swiper = useSwiper()
  return (
    <div className='flex items-center space-x-1'>
      <button
        onClick={() => swiper.slidePrev()}
        className='w-[41px] h-[31px] rounded-[99px] border-2 border-[#7AA65A] flex items-center justify-center text-[#7AA65A] hover:bg-[#7AA65A] hover:text-white transition-colors'>
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
        className='w-[41px] h-[31px] rounded-[99px] bg-[#7AA65A] flex items-center justify-center text-white hover:opacity-90 transition-opacity'>
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

export default Hero
