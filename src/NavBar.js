import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css';
import Contact from './Contact';


const NavBar = () => {
  return (
    <div>
        <nav>
            <NavLink to="/home" className="na" style={{padding:"10px",color:"white"}}>Home</NavLink>
            <NavLink to="/about" className="na" style={{padding:"10px",color:"white"}}>About</NavLink>
            <NavLink to="/tracker" className="na" style={{padding:"10px",color:"white"}}>Tracker</NavLink>
            <NavLink to="/contact" className="na" style={{padding:"10px",color:"white"}}>Contact</NavLink>
        </nav>
    </div>
  )
}

export default NavBar