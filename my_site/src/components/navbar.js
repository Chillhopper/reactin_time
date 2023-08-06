import React from 'react'
import './navbar.css'

function Navbar() {
    return (
      <>
        <nav className='navBar'>
            <nav className='navMenu'>
                <ul className='navList'>
                    <li>About</li>
                    <li>My Work</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </nav>
      </>
    );
  }

export default Navbar