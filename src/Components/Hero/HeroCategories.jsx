import React from 'react'
import './HeroCategorise.css'
import Face4Icon from '@mui/icons-material/Face4';
import Face2Icon from '@mui/icons-material/Face2';

const HeroCategories = () => {
  return (
    <div className='absolute top-2 right-20 w-full h-full z-40'>
        <div className='flex flex-col gap-4 md:flex-row justify-center items-center'>
            <div className='relative sm:flex justify-center items-center text-center text-white bg-black/50  hover:rotate-1 hover:scale-105 hover:cursor-pointer transition-all duration-200 hidden md:block  sm:w-80 w-40 h-16 md:h-40 rounded-2xl'>
                <Face4Icon className="absolute top-16 right-8 opacity-5 scale-[4]" />
                <h3 className="absolute text-3xl opacity-80 top-16 left-20">دخترانه</h3>

            </div>

            <div className='flex justify-center items-center text-center text-white bg-black/40 hover:rotate-1 hover:scale-105 hover:cursor-pointer  hover-img transition-all duration-200   sm:w-20 w-40 h-16 md:h-40 rounded-lg shadow-md shadow-black/80'>مجلسی</div>
            <div className='flex justify-center items-center text-center text-white bg-black/40 hover:rotate-1 hover:scale-105 hover:cursor-pointer  hover-img2 transition-all duration-200   sm:w-20 w-40 h-16 md:h-40 rounded-lg shadow-md shadow-black/80'>عبایی</div>
            <div className='flex justify-center items-center text-center text-white bg-black/40 hover:rotate-1 hover:scale-105 hover:cursor-pointer  hover-img3 transition-all duration-200   sm:w-20 w-40 h-16 md:h-40 rounded-lg shadow-md shadow-black/80'>اسپرت</div>
            <div className='relative sm:flex justify-center items-center text-center text-white bg-black/50  hover:rotate-1 hover:scale-105 hover:cursor-pointer transition-all duration-200  hidden md:block  sm:w-80 w-40 h-16 md:h-40 rounded-2xl'>
                <Face2Icon className="absolute top-14 left-10 opacity-5 scale-[4]" />
                <h3 className="absolute text-3xl opacity-80 top-16 right-20">زنانه</h3>
            </div>
        </div>
    </div>
  )}

export default HeroCategories