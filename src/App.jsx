import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import About from './Components/about'
import Home from './Components/Home'
import Services from './Components/Services'
import Product from './Components/product'

const App = () => {
  return (
    <div className='p-10'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Product />} />
        </Routes>
    </div>
  )
}

export default App