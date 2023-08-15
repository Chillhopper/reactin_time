import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Contact from './components/contact'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LGtheme} from './components/theme.js'
import { useState } from 'react';


function App() {
   const [theme, setTheme] = useState("dark");
   const toggleTheme = () => {
   setTheme((theme == "light")?"dark":"light");
   console.log(`theme changed: ${theme}`);
 }

  return (
    <LGtheme.Provider value={{theme, toggleTheme}}>
     <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </LGtheme.Provider >
  );
}

export default App;
