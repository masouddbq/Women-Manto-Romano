import { useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {  


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  ) 
}

export default App
