import React from 'react'
import heroCircle from '/1.jpg'
import heroCircle2 from '/4.jpg'
import heroCircle3 from '/3.jpg'
import "./HeroSection.css"

const HeroCircles = () => {
  return (
    <div>
        <div className='flex flex-row w-full h-12 absolute top-40 right-0 justify-center items-center'>
            <div className='flex flex-row justify-evenly w-full px-1 md:mt-32 items-center'>
                {/* Mobile: Original design with just white lines and circles */}
                <div className='flex md:hidden flex-row justify-evenly w-full items-center'>
                    <span className='text-white'>________________</span>
                    <img className="rounded-full border-gray-200/50 border-2 w-36 h-36 object-cover rotate-y" src={heroCircle} alt="" />
                    <img className="rounded-full border-gray-200/50 border-2 absolute w-36 h-36 object-cover rotate-y" src={heroCircle2} alt="" />
                    <img className="rounded-full border-gray-200/50 border-2 w-36 h-36 object-cover rotate-y" src={heroCircle3} alt="" />
                    <span className='text-white'>________________</span>
                </div>

                {/* Desktop: New design with navigation menu */}
                <div className='hidden md:flex flex-row justify-evenly w-full items-center'>
                    {/* Left side menu - Desktop only */}
                    <div className='flex flex-col items-center space-y-6 text-white'>
                        <div className='flex flex-col space-y-4 text-right mb-4'>
                            <a href="#" className='nav-menu-item text-white hover:text-yellow-300 transition-all duration-300 text-sm font-medium tracking-wide'>درباره ما</a>
                            <a href="#" className='nav-menu-item text-white hover:text-yellow-300 transition-all duration-300 text-sm font-medium tracking-wide'>تماس با ما</a>
                            <a href="#" className='nav-menu-item text-white hover:text-yellow-300 transition-all duration-300 text-sm font-medium tracking-wide'>سبد خرید</a>
                            <a href="#" className='nav-menu-item text-white hover:text-yellow-300 transition-all duration-300 text-sm font-medium tracking-wide'>ثبت نام</a>
                        </div>
                        <span className='text-white text-lg font-light tracking-wider'>________________</span>
                    </div>

                    {/* Center circles */}
                    <div className='flex items-center space-x-72'>
                        <img className="rounded-full border-gray-200/50 border-2 w-36 h-36 md:w-72 md:h-72 object-cover rotate-y" src={heroCircle} alt="" />
                        <img className="rounded-full border-gray-200/50 border-2 absolute w-36 h-36 md:w-72 md:h-72 object-cover rotate-y" src={heroCircle2} alt="" />
                        <img className="rounded-full border-gray-200/50 border-2 w-36 h-36 md:w-72 md:h-72 object-cover rotate-y" src={heroCircle3} alt="" />
                    </div>

                    {/* Right side menu - Desktop only */}
                    <div className='flex flex-col items-center space-y-6 text-white'>
                        <div className='flex flex-col space-y-4 text-right mb-4'>
                            <a href="#" className='nav-menu-item text-white hover:text-yellow-300 transition-all duration-300 text-sm font-medium tracking-wide'>خانه</a>
                            <a href="#" className='nav-menu-item text-white hover:text-yellow-300 transition-all duration-300 text-sm font-medium tracking-wide'>محصولات</a>
                            <a href="#" className='nav-menu-item text-white hover:text-yellow-300 transition-all duration-300 text-sm font-medium tracking-wide'>گالری</a>
                            <a href="#" className='nav-menu-item text-white hover:text-yellow-300 transition-all duration-300 text-sm font-medium tracking-wide'>نظرات</a>
                        </div>
                        <span className='text-white text-lg font-light tracking-wider'>________________</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroCircles