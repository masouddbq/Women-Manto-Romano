import React from "react";
import { Link } from "react-router-dom";
import HeroCategories from "./HeroCategories";

const SideTapes = () => {
  return (
    <div className="absolute top-10 left-20 w-full h-full">
      <div className="flex relative flex-row justify-between items-center">
        <div className="flex z-50 absolute top-10 -left-24 flex-col justify-center items-center">
          <Link to="/">
            <h3 className="w-20 pt-1 h-8 hover:scale-95 hover:bg-white/5 transition-all duration-300 rounded-e-xl  text-center m-2 text-white cursor-pointer bg-white/10">خانه</h3>
          </Link>
          <Link to="/">
            <h3 className="w-20 pt-1 h-8 hover:scale-95 hover:bg-white/5 transition-all duration-300 rounded-e-xl text-center m-2 text-white cursor-pointer bg-white/10">محصولات</h3>
          </Link>
        </div>
        <HeroCategories />
        <div className="flex z-50 absolute top-10 right-16 flex-col justify-center items-center">
          <Link to="/">
            <h3 className="w-20 pt-1 h-8 hover:scale-95 hover:bg-white/5 transition-all duration-300 rounded-s-xl text-center m-2 text-white cursor-pointer bg-white/10">گالری</h3>
          </Link>
          <Link to="/">
            <h3 className="w-20 pt-1 h-8 hover:scale-95 hover:bg-white/5 transition-all duration-300 rounded-s-xl text-center m-2 text-white cursor-pointer bg-white/10">سبد خرید</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideTapes;
