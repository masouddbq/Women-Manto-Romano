import React from 'react'

const SampleProds = () => {
  return (
    <div className='w-full bg-black py-4 px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* عنوان بخش */}
        <div className='text-center mb-16'>
          <h2 className='text-white text-4xl md:text-6xl font-light mb-4'>دسته‌بندی محصولات</h2>
          <p className='text-gray-400 text-lg md:text-xl font-light'>مجموعه‌ای لوکس و منحصر به فرد</p>
        </div>

        {/* شبکه محصولات */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          {/* کارت مجلسی */}
          <div className='group relative overflow-hidden bg-gray-900 hover:bg-gray-800 transition-all duration-700 cursor-pointer'>
            <div className='aspect-[4/5] relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10'></div>
              <img 
                src='/1.jpg' 
                alt='مانتو مجلسی' 
                className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105'
              />
              <div className='absolute bottom-6 left-6 right-6 z-20'>
                <h3 className='text-white text-2xl md:text-3xl font-light mb-2'>مجلسی</h3>
                <p className='text-gray-300 text-sm md:text-base mb-4'>طراحی‌های لوکس و شیک برای مجالس خاص</p>
                <div className='flex items-center text-white group-hover:translate-x-2 transition-transform duration-300'>
                  <span className='text-sm font-light'>مشاهده محصولات</span>
                  <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* کارت عبایی */}
          <div className='group relative overflow-hidden bg-white hover:bg-gray-50 transition-all duration-700 cursor-pointer'>
            <div className='aspect-[4/5] relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10'></div>
              <img 
                src='/2.jpg' 
                alt='مانتو عبایی' 
                className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105'
              />
              <div className='absolute bottom-6 left-6 right-6 z-20'>
                <h3 className='text-white text-2xl md:text-3xl font-light mb-2'>عبایی</h3>
                <p className='text-gray-200 text-sm md:text-base mb-4'>طراحی‌های مدرن و راحت برای استفاده روزمره</p>
                <div className='flex items-center text-white group-hover:translate-x-2 transition-transform duration-300'>
                  <span className='text-sm font-light'>مشاهده محصولات</span>
                  <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* کارت اسپرت */}
          <div className='group relative overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-700 cursor-pointer md:col-span-2 lg:col-span-1'>
            <div className='aspect-[4/5] relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10'></div>
              <img 
                src='/3.jpg' 
                alt='مانتو اسپرت' 
                className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105'
              />
              <div className='absolute bottom-6 left-6 right-6 z-20'>
                <h3 className='text-white text-2xl md:text-3xl font-light mb-2'>اسپرت</h3>
                <p className='text-gray-300 text-sm md:text-base mb-4'>طراحی‌های راحت و کاربردی برای فعالیت‌های روزانه</p>
                <div className='flex items-center text-white group-hover:translate-x-2 transition-transform duration-300'>
                  <span className='text-sm font-light'>مشاهده محصولات</span>
                  <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* دکمه مشاهده همه */}
        <div className='text-center mt-16'>
          <button className='bg-transparent border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-light text-sm tracking-wider'>
            مشاهده تمام محصولات
          </button>
        </div>
      </div>
    </div>
  )
}

export default SampleProds