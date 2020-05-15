import React from "react";
import Sidebar from "./components/Sidebar";
import "./global.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <div id="about" className="content">
          <About />
        </div>
        <div id="experience" className="content">
          <Experience />
        </div>
        <div id="education" className="content">
          <Education />
        </div>
        <div id="skills" className="content">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
