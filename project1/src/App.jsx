import React from 'react'
import Header from './components/Header'
import Overview from './components/Overview'
import Test from './Test'
import Tools from './Tools'
import Course from './Course'
import Class from './Class'
import Key from './Key'
import Faq from './Faq'
import Slide from './Slide'
import Contact from './Contact'
import Footer from './components/Footer'
import Appl from './Appl'
import Offer from './components/Offer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Header />}/> 
        <Route path='/appl' element={<Appl />}/> 
        <Route path='/offer' element={<Offer />}/> 
      </Routes>
      <Overview />
      <Test />
      <Tools />
      <Course />
      <Slide />
      <Class />
      <Faq />
      <Key />
      <Contact />
      <Footer />
      
      
      </BrowserRouter>
     
      
      

    

    </div>
  )
}

export default App