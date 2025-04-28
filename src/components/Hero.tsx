import Image from 'next/image'
import Link from 'next/link'

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

      <div className='relative h-screen max-w-7xl mx-auto'>
        {/* Mobile Layout */}
        <section className='flex flex-col items-center justify-between h-full px-4 py-8 lg:hidden'>
          {/* Hero Image */}
          <div className='w-full max-w-96'>
            <Image
              src='/girl_1.png'
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
              Lorem ipsum
              <br />
              dolor sit amet
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
            <div className='flex justify-center items-center space-x-4 mt-8'>
              <button className='w-14 h-10 rounded-full border-2 border-[#7AA65A] flex items-center justify-center text-[#7AA65A] hover:bg-[#7AA65A] hover:text-white transition-colors'>
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
              <button className='w-14 h-10 rounded-full bg-[#7AA65A] flex items-center justify-center text-white hover:opacity-90 transition-opacity'>
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
          </div>
        </section>

        {/* Desktop Layout */}
        <section className='hidden lg:flex h-full items-center px-20'>
          {/* Info */}
          <div className='flex-1 pr-8 space-y-8'>
            <div className='space-y-4'>
              <h1 className='text-[#7AA65A] text-6xl font-light leading-tight'>
                Lorem ipsum
                <br />
                dolor sit amet
              </h1>
              <p className='text-[#7AA65A] text-xl font-light max-w-xl'>
                Nunc porttitor tortor metus, nec sagittis lectus accumsan quis.
                Aenean euismod mollis tempor.
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
            <div className='flex items-center space-x-4 pt-8'>
              <button className='w-14 h-10  rounded-full border-2 border-[#7AA65A] flex items-center justify-center text-[#7AA65A] hover:bg-[#7AA65A] hover:text-white transition-colors '>
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
              <button className='w-14 h-10 rounded-full bg-[#7AA65A] flex items-center justify-center text-white hover:opacity-90 transition-opacity'>
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
          </div>

          {/* Hero Image */}
          <div className='flex-1 flex justify-end'>
            <div className='w-[380px] h-[510px] relative rounded-2xl overflow-hidden'>
              <Image
                src='/girl_1.png'
                alt='Model'
                fill
                className='w-full h-auto rounded-2xl'
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Hero
