import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Bio from "./components/bio";
import Projects from "./components/projects"
import Skills from './components/skills';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="upper-section">
        <Bio />
        <Projects />
      </div>
      <Skills />
    </div>
  );
}

export default App;
