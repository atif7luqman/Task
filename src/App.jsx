import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        
        {/* <Route path={'/'} element={<><Header /> <Home /> </>} />
        <Route path={'/values'} element={<Values />} />
        <Route path={'/docotrs'} element={<Doctors />} />
        <Route path='/booking' element={<Booking />} /> */}
        
      </Routes>
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
