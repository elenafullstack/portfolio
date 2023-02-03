import React, { useState} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Cv from './components/cv'
import Contact from './components/Contact'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



const App=() =>{



  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About  />} />
          <Route path='/projects' element={<Projects  />} /> 
          <Route path='/cv' element={<Cv  />} /> 
          <Route path='/contact' element={<Contact  />} /> 
      </Routes>
      <Footer></Footer>
    </Router>
    </>
  )
}

export default App;
