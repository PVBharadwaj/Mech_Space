import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './CSS/Navbar.css'

const Navbar = () => {

    const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <nav>
        <Link to={'/'} className='title'>
            Mech space
        </Link>
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? 'open' : 'not'}>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={'/login'}>Login</NavLink>
            </li>
            <li>
                <NavLink to={'/signup'}>Sign up</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
