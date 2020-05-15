import React from "react";
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";
import profileImg from "../../assets/profile.svg";
import "./styles.css";
export default function About() {
  return (
    <div className="container-about">
      <div className="about">
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
              <a>Systems Development Analyst of Grupo Gazin</a>
            </p>
            <p>
              <small>one of the largest retail companies in Brazil.</small>
            </p>
          </li>
        </ul>
        <div className="social">
          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/armandobretas/", "_blank")
            }
          >
            <FiGithub size={20} color="#fff" />
          </button>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/armando-bretas-78a107116/",
                "_blank"
              )
            }
          >
            <FiLinkedin size={20} color="#fff" />
          </button>
          <button
            type="button"
            onClick={() =>
              window.open("https://www.facebook.com/armando.neto17", "_blank")
            }
          >
            <FiFacebook size={20} color="#fff" />
          </button>
        </div>
      </div>
      <img
        src={profileImg}
        width={500}
        height={500}
        alt="Ilustração imagem de perfil"
      />
    </div>
  );
}
