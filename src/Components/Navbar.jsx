import React, { useRef } from 'react'
import "./nav.css"
import { FaTimes, FaBars } from "react-icons/fa";

export const Navbar = () => {

    const navRef = useRef();
    

  return (
    <header>
            <h3>Logo</h3>
            <nav>
                <a href='/#'>Home</a>
                <a href='/#'>Api</a>
                <a href='/#'>Slider</a>
                <a href='/#'>About me</a>
                <button className="nav-btn nav-close">
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn">
                <FaBars/>
            </button>
    </header>
  )
}
