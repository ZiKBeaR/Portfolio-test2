import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contacts/contacts';
import Homepage from './components/HomePage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
 

const Routesportfolio = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='home' element={<Homepage/>} />
          <Route path='about' element={<About/>} />
          <Route path='portfolio' element={<Portfolio/>} />
          <Route path='testimonial' element={<Testimonial/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routesportfolio