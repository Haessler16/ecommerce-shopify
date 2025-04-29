'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const slides = [
  {
    image: '/girl_1.png',
    title: 'Lorem ipsum dolor sit amet',
    subtitle:
      'Nunc porttitor tortor metus, nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.',
  },
  {
    image: '/girl_2.png',
    title: 'Consectetur adipiscing elit',
    subtitle:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },
  {
    image: '/girl_3.png',
    title: 'Sed do eiusmod tempor',
    subtitle:
      'Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus.',
  },
  {
    image: '/girl_4.png',
    title: 'Ut enim ad minim veniam',
    subtitle:
      'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
  },
]

const Hero = () => {
  return (
    <section className='relative min-h-screen w-full overflow-hidden'>
      {/* Background Image */}
      <Image
        src='/sky_2.png'
        alt='Sky background'
        fill
        className='object-cover object-center'
        priority
      />

      <div className='relative h-screen max-w-7xl mx-auto flex items-center'>
        <Swiper
          modules={[Navigation]}
          className='w-full h-full flex items-center'>
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className='flex items-center h-full'>
              {/* Desktop Layout */}
              <section className='hidden lg:flex h-full items-center px-20 w-full'>
                {/* Info */}
                <div className='flex-1 pr-8 space-y-8'>
                  <div className='space-y-4'>
                    <h1 className='text-[#7AA65A] text-6xl font-light leading-tight'>
                      {slide.title}
                    </h1>
                    <p className='text-[#7AA65A] text-xl font-light max-w-xl'>
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className='flex flex-col gap-4 max-w-md'>
                    <Link
                      href='/shop'
                      className='inline-flex items-center justify-center bg-[#7AA65A] text-white px-8 py-3 rounded-full text-lg font-medium transition-transform hover:scale-105'>
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
                      className='inline-flex items-center justify-center border-2 border-[#7AA65A] text-[#7AA65A] px-8 py-3 rounded-full text-lg font-medium transition-colors hover:bg-[#7AA65A] hover:text-white'>
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
                  {/* Nav Arrows */}
                  <NavArrows />
                </div>

                {/* Hero Image */}
                <div className='flex-1 flex justify-end'>
                  <div className='w-[380px] h-[510px] relative rounded-2xl overflow-hidden'>
                    <Image
                      src={slide.image}
                      alt='Model'
                      fill
                      className='w-full h-auto rounded-2xl'
                      priority
                    />
                  </div>
                </div>
              </section>

              {/* Mobile Layout */}
              <section className='flex flex-col items-center justify-between h-full px-4 py-8 lg:hidden w-full'>
                {/* Hero Image */}
                <div className='w-full max-w-96'>
                  <Image
                    src={slide.image}
                    alt='Model'
                    width={300}
                    height={300}
                    style={{ objectFit: 'contain' }}
                    className='w-full h-auto rounded-2xl'
                    priority
                  />
                </div>
                {/* Text */}
                <div className='text-center space-y-6 mb-8'>
                  <h1 className='text-[#7AA65A] text-4xl font-normal'>
                    {slide.title}
                  </h1>

                  <div className='flex flex-col items-center gap-4'>
                    <Link
                      href='/shop'
                      className='inline-flex items-center justify-between bg-[#7AA65A] text-white px-8 py-3 rounded-lg text-lg font-medium transition-transform hover:scale-105 w-full max-w-xs'>
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
                    <p className='lg:hidden text-black text-lg font-medium'>
                      TAKE THE QUIZ
                    </p>
                  </div>

                  {/* Nav Arrows */}
                  <div className='flex justify-center items-center'>
                    <NavArrows />
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

const NavArrows = () => {
  const swiper = useSwiper()
  return (
    <div className='flex items-center space-x-4 pt-8'>
      <button
        onClick={() => swiper.slidePrev()}
        className='w-14 h-10 rounded-full border-2 border-[#7AA65A] flex items-center justify-center text-[#7AA65A] hover:bg-[#7AA65A] hover:text-white transition-colors'>
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
        className='w-14 h-10 rounded-full bg-[#7AA65A] flex items-center justify-center text-white hover:opacity-90 transition-opacity'>
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
