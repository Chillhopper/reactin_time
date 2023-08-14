import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'



function Navbar() {
  const [activeState, setState] = useState("about");

  function signalState(tab){
    console.log(`hello ${tab}`);
    setState(tab);
  }     
    return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center justify-content-md-center" style={{height:"70px"}}>
        <ul className="nav nav-pills" style={{gap:"10px"}}>
        <li className="nav-item">
        <Link to="/" className={`nav-link ${(activeState == "about")?"active":''}`} onClick={() => signalState("about")}>About</Link>
        </li>
        <li className="nav-item">
        <Link to="/projects" className={`nav-link ${(activeState == "projects")?"active":''}`} onClick={() => signalState("projects")}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className={`nav-link ${(activeState == "contact")?"active":''}`} onClick={() => signalState("contact")}>Contact</Link>
        </li>
        </ul>
      </nav>

    </>
    );
  }

export default Navbar