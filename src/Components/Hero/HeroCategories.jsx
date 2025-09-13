import React from 'react'
import './HeroCategorise.css'

const HeroCategories = () => {
  return (
    <div className='absolute top-14 right-20 w-full h-full z-40'>
        <div className='flex flex-col gap-4 md:flex-row justify-evenly items-center'>
            <div className='flex justify-center items-center text-center text-white bg-black/40 hover:rotate-1 hover:scale-105 hover:cursor-pointer  hover-img transition-all duration-200   sm:w-72 w-40 h-16 md:h-40 rounded-2xl shadow-md shadow-black/80'>مجلسی</div>
            <div className='flex justify-center items-center text-center text-white bg-black/40 hover:rotate-1 hover:scale-105 hover:cursor-pointer  hover-img2 transition-all duration-200   sm:w-72 w-40 h-16 md:h-40 rounded-2xl shadow-md shadow-black/80'>عبایی</div>
            <div className='flex justify-center items-center text-center text-white bg-black/40 hover:rotate-1 hover:scale-105 hover:cursor-pointer  hover-img3 transition-all duration-200   sm:w-72 w-40 h-16 md:h-40 rounded-2xl shadow-md shadow-black/80'>اسپرت</div>
        </div>
    </div>
  )}

export default HeroCategories