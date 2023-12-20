import React from 'react'
import Header from './components/Header'
import Welcome from './components/Welcom'
// import Hero from './components/Hero'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import './App.css'



function App() {
  return (
    <div className='SFPRO'>
      <Routes>
        
        {/* <Route path={'/'} element={<><Header /> <Home /> </>} />
        <Route path={'/values'} element={<Values />} />
        <Route path={'/docotrs'} element={<Doctors />} />
        <Route path='/booking' element={<Booking />} /> */}
        
      </Routes>
      <Header />
      <Welcome />
      {/* <Hero /> */}
      <Footer />
    </div>
  )
}

export default App
