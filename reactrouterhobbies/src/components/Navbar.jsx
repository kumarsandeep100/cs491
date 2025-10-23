import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' aria-label="Go home">
        <img src={logo} alt="logo" style={{width:"100px",height:"auto"}} />
      </Link>
      <ul>
        <li><NavLink to='/' end>Home</NavLink></li>
        <li><NavLink to='/hobbies'>Hobbies</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
      <Link to='/hobbies'>
        <button aria-label="Explore hobbies">Get Started</button>
      </Link>
    </div>
  )
}

export default Navbar
