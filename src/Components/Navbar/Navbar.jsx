import React, { useState, useEffect } from "react";
import "./Navbar.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




const Navbar = () => {

  const rectangleTexts = [
    {id :1 , text : "تخفیف ها"},
    {id :2 , text : "کدهای رهگیری"},
    {id :3 , text : "محصولات جدید"},
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setRotationAngle(prev => prev - 120);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rectangleTexts.length);
      setIsAnimating(false);
    }, 800);
  }

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setRotationAngle(prev => prev + 120);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + rectangleTexts.length) % rectangleTexts.length);
      setIsAnimating(false);
    }, 800);
  }

  return (
    <div className="navbar">
        <div className="flex w-full py-6 h-6 justify-evenly bg-black items-center">
          <div className="social-networks hidden sm:flex">
            <div className="social-network-icon hidden text-white">
              <InstagramIcon className="social-icon" />
              <WhatsAppIcon className="social-icon" />
              <TelegramIcon className="social-icon" />
            </div>
          </div>
          <div className="flex justify-center bg-slate-200 bg-opacity-20 rounded-lg p-2 text-white items-center text-2xl gap-8">
            <ArrowBackIcon className="z-10 scale-75 hover:text-gray-200 hover:cursor-pointer" onClick={prevSlide} />
              
              <div className="cube-container">
                <div 
                  className="cube" 
                  style={{ 
                    transform: `rotateY(${rotationAngle}deg)`,
                    transition: isAnimating ? 'transform 0.8s ease-in-out' : 'none'
                  }}
                >
                  {rectangleTexts.map((item, index) => (
                    <div key={item.id} className="cube-face">
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              
            <ArrowForwardIcon className="z-10 scale-75 hover:text-gray-200 hover:cursor-pointer" onClick={nextSlide} />
          </div>
        </div>
    </div>
  );
};

export default Navbar;
