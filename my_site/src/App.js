import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Contact from './components/contact'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
