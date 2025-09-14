import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';

const RopeCategory = () => {
  return (
    <div>
        <div className="w-full h-[40rem] bg-transparent shadow-xl shadow-white/5 border-b-2 border-gray-100/20 rounded-b-full absolute md:-top-44 -top-52"></div>
        
        <AttachFileIcon className="absolute z-50 opacity-50 hover:cursor-pointer hover:opacity-80 hidden md:block md:top-72 md:left-48 rotate-12 text-white" />
        <AttachFileIcon className="absolute z-50 opacity-50 hover:cursor-pointer hover:opacity-80 hidden md:block md:top-[29rem] md:left-[42rem] text-white" />
        <AttachFileIcon className="absolute z-50 opacity-50 hover:cursor-pointer hover:opacity-80 hidden md:block md:top-72 md:right-48 -rotate-12 text-white" />
    </div>
  )
}

export default RopeCategory