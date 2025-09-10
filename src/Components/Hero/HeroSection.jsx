import React, { useState } from 'react'
import SampleData from '../../data/SampleData'
import './HeroSection.css'

const HeroSection = () => {
    const [rotatedCards, setRotatedCards] = useState({})
    
    const handleRotate = (cardId) => {
        setRotatedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }))
    } 
    
  return (
    <div className='flex items-center justify-center mt-16 gap-8'>
        {SampleData.map((item) => (
            <div key={item.id} className="card-container relative">
                <div className={`flex cursor-pointer transition-all duration-500 p-4 w-72 shadow-xl rounded-lg flex-col justify-center items-center text-center ${rotatedCards[item.id] ? 'rotate-3d' : ''}`} onClick={() => handleRotate(item.id)}>
                    <h1>{item.title}</h1>
                    {/* Spirit image - hidden initially */}
                    <img className={`spirit-image w-72 h-80 object-cover transition-all duration-700 ${rotatedCards[item.id] ? 'spirit-float' : ''}`} src={item.image} alt={item.title} />
                    {/* Main image */}
                    <img className={`w-72 h-80 object-cover transition-all duration-500 ${rotatedCards[item.id] ? 'rotate-3d-img' : ''}`} src={item.image} alt={item.title} />
                    <p className='w-full h-16 mt-4 text-ellipsis overflow-hidden'>{item.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default HeroSection