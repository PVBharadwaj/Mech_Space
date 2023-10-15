import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './signup'
import Login from './login'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/signup' element={<Signup />}></Route>  
        <Route path='/login' element={<Login />}></Route>
      </Routes> 
    <Footer />
    </div>

  )
}

export default App
