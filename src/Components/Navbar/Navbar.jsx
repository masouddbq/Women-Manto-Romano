import React, { useState, useEffect } from "react";
import "./Navbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      
      <div className="flex flex-col h-0 translate-y-10 z-50 justify-center items-center">
        <h3
          className="text-white/80 text-2xl font-bold"
          style={{ fontFamily: "Calibri" }}
        >
          -Romano-
        </h3>
        <h3 className="text-white/90 text-xl underline-offset-4 underline font-bold">
          رومانو
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
