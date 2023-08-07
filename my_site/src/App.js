import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import Projects from './components/projects.js'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">wassup
      <Router>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
