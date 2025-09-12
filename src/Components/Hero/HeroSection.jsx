import React, { useState } from "react";
import "./HeroSection.css";
import heroImage from "/1.jpg";
import Navbar from "../Navbar/Navbar";
import SideTapes from "./SideTapes";


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
    </div>
  );
};

export default HeroSection;
