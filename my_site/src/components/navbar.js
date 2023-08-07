import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <>
        <nav className='navBar'>
            <nav className='navMenu'>
                <ul className='navList'>
                    <li>
                      <Link to="/about">About</Link>
                      </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </nav>
      </>
    );
  }

export default Navbar