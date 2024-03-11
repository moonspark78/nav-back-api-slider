import React from 'react'
import "./nav.css"
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

export const Navbar = () => {
  return (
    <header>
            <h3>Logo</h3>
            <nav>
                <a href='/#'>Home</a>
                <a href='/#'>Api</a>
                <a href='/#'>Slider</a>
                <a href='/#'>About me</a>
                <button>
                    <FaTimes/>
                </button>
            </nav>
            <button>
                <HiMenu/>
            </button>
    </header>
  )
}
