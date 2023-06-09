import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import { Toaster } from 'react-hot-toast'
import Cart from './components/Cart'
import Footer from './components/Footer'
import './styles/app.scss'
import './styles/loader.css'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Toaster/>
        <Footer />
      </Router>
    </>
  )
}

export default App
