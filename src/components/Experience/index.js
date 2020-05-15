import React from "react";
import experienceImg from "../../assets/experience.svg";
import "./styles.css";

export default function Experience() {
  return (
    <div className="container-experience">
      <div className="experience">
        <h1>Experience</h1>
        <small>JOBS</small>
        <ul>
          <li>
            <p>
              <a>Co-Founder of e-Infintiy ( 2 years )</a>
            </p>
          </li>
          <li>
            <p>
              <a>Systems Development Analyst of Grupo Gazin ( 3 years ) </a>
            </p>
          </li>
        </ul>
      </div>
      <img
        src={experienceImg}
        width={500}
        height={500}
        alt="Ilustração imagem"
      />
    </div>
  );
}
