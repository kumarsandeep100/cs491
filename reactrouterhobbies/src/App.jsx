import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Hobbies from './pages/Hobbies'
import HobbyDetail from './pages/HobbyDetail'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hobbies' element={<Hobbies />} />
          <Route path='/hobbies/:id' element={<HobbyDetail />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
