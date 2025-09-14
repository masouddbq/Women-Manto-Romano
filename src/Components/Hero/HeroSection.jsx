import React, { useState } from "react";
import "./HeroSection.css";
import heroImage from "/1.jpg";
import Navbar from "../Navbar/Navbar";
import SideTapes from "./SideTapes";
import BlurText from "./BlurText";
import SampleProds from "./SampleProds";
import RopeCategory from "./RopeCategory";


const HeroSection = () => {

  

  return (
    <div >
      <Navbar className="absolute top-20 left-0" />
      <div className="w-full h-full">
        <img
          className="w-full brightness-[0.2] h-[40rem] object-cover"
          src={heroImage}
          alt=""
        />
      </div>
      <SideTapes />
       {/* اضافه کردن BlurText */}
       <div className="absolute inset-0 flex items-center justify-center">
          <BlurText 
            text="چه استایلی میخوای؟" 
            className="text-white text-4xl md:mt-8 mt-80 font-bold text-center"
            direction="top"
            delay={850}
            animateBy="words"
          />
        </div>
        <RopeCategory />
        <SampleProds />
    </div>
  );
};

export default HeroSection;
