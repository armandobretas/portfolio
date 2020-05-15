import React from "react";
import educationImg from "../../assets/education.svg";
import "./styles.css";

export default function Education() {
  return (
    <div className="container-education">
      <div className="education">
        <h1>Education</h1>
        <small>FORMATION, COURSES, EVENTS</small>
        <ul>
          <li>
            <p>
              <a>
                Technologist in internet systems by Faculdade Alfa Umuarama (
                2017 - 2019 )
              </a>
            </p>
          </li>
          <li>
            <p>
              <a>
                ReactJS, React-Native, NodeJS by Rocketseat ( online course )
              </a>
            </p>
          </li>
          <li>
            <p>
              <a>
                PostgreSQL Conference Brazil by brazilian postgresql community
              </a>
            </p>
          </li>
          <li>
            <p>
              <a>Hackaton AgroTech 2019 by Sebrae</a>
            </p>
          </li>
          <li>
            <p>
              <a>
                SAS Forum Brazil 2019 by SAS ( event of machine learning, iot,
                ia ... )
              </a>
            </p>
          </li>
          <li>
            <p>
              <a>
                Fórum e-commerce brasil 2019 ( event of ecommerce, marketplace,
                logistics )
              </a>
            </p>
          </li>
          <li>
            <p>
              <a>
                Geo Analysis and Maps Qlik Sense 2019 ( course of Qlik Sense )
              </a>
            </p>
          </li>
          <li>
            <p>
              <a>
                Convenção Nacional Gazin 2019 ( event of retail, marketplace, inovation,
                business ) 
              </a>
            </p>
          </li>
          <li>
            <p>
              <a>
                Convenção Nacional Gazin 2018 ( event of retail, marketplace, inovation,
                business ) 
              </a>
            </p>
          </li>
        </ul>
      </div>
      <img
        src={educationImg}
        width={500}
        height={500}
        alt="Ilustração imagem"
      />
    </div>
  );
}
