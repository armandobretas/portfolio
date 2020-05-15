import React from "react";
import Sidebar from "./components/Sidebar";
import "./global.css";

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <div id="about" className="content about">
          <h1>
            <span className="defaultColor">ARMANDO</span> BRETAS
          </h1>
          <small>PARANÁ, BRAZIL</small>
          <ul>
            <li>
              <p>
                <a>Full Stack Developer</a>
              </p>
            </li>
            <li>
              <p>
                <a>Co-Founder of e-Infintiy</a>
              </p>
              <p>
                <small>software and apps development company</small>
              </p>
            </li>
            <li>
              <p>
                <a>Systems Development Analyst in Grupo Gazin</a>
              </p>
              <p>
                <small>one of the largest retail companies in Brazil.</small>
              </p>
            </li>
          </ul>
        </div>
        <div id="experience" className="content">
          <h1>Experience</h1>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
        </div>
        <div id="education" className="content">
          <h1>Education</h1>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
        </div>
        <div id="skills" className="content">
          <h1>Skills</h1>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
          <p>Tal tal tal</p>
        </div>
      </div>
    </div>
  );
}

export default App;
