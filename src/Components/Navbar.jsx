import React, { useRef } from 'react'
import "./nav.css"
import { FaTimes, FaBars } from "react-icons/fa";

export const Navbar = () => {

    const navRef = useRef();
    
    const showNav = () => {
      navRef.current.classList.toggle("responsive-nav");
    };

  return (
    <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href='/#'>Home</a>
                <a href='/#'>Api</a>
                <a href='/#'>Slider</a>
                <a href='/#'>About me</a>
                <button className="nav-btn nav-close" onClick={showNav}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNav}>
                <FaBars/>
            </button>
    </header>
  )
}
