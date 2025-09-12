import React from 'react'
import './HeroCategorise.css'

const HeroCategories = () => {
  return (
    <div className='absolute top-14 right-20 w-full h-full'>
        <div className='flex flex-col gap-4 md:flex-row justify-evenly items-center'>
            <div className='flex justify-center items-center text-center text-white bg-black/40 hover:rotate-1 hover:scale-105 hover:cursor-pointer  hover-img transition-all duration-200 sm:w-72 w-60 h-16 rounded-2xl shadow-sm shadow-black/70'>مجلسی</div>
            <div className='flex justify-center items-center text-center text-white bg-black/40 hover:rotate-1 hover:scale-105 hover:cursor-pointer  hover-img2 transition-all duration-200 sm:w-72 w-60 h-16 rounded-2xl shadow-sm shadow-black/70'>عبایی</div>
            <div className='flex justify-center items-center text-center text-white bg-black/40 hover:rotate-1 hover:scale-105 hover:cursor-pointer  hover-img3 transition-all duration-200 sm:w-72 w-60 h-16 rounded-2xl shadow-sm shadow-black/70'>اسپرت</div>
        </div>
    </div>
  )}

export default HeroCategories