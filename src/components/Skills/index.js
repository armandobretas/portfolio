import React from "react";
import "./styles.css";

import skillsImg from "../../assets/skills.svg";
import javascriptImg from "../../assets/javascript.png";
import reactImg from "../../assets/react.png";
import nodejsImg from "../../assets/nodejs.png";
import phpImg from "../../assets/php.png";
import postgresqlImg from "../../assets/postgresql.png";
import qliksenseImg from "../../assets/qliksense.png";
import gitImg from "../../assets/git.png";
import githubImg from "../../assets/github.png";
import gitlabImg from "../../assets/gitlab.png";

export default function Skills() {
  return (
    <div className="container-skills">
      <div className="skills">
        <h1>Skills</h1>
        <small>TECHNOLOGIES</small>
        <div className="tecnologies">
          <img src={javascriptImg} alt="Javascript" width={70} heigth={70} />
          <img
            src={reactImg}
            alt="ReactJS e React-Native"
            width={50}
            heigth={50}
          />
          <img src={nodejsImg} alt="Node JS" width={70} heigth={70} />
          <img src={phpImg} alt="PHP" width={70} heigth={70} />
          <img src={gitImg} alt="Git" width={70} heigth={70} />
          <img src={gitlabImg} alt="Gitlab" width={70} heigth={70} />
          <img src={githubImg} alt="Github" width={70} heigth={70} />
          <img src={postgresqlImg} alt="PostgreSQL" width={70} heigth={70} />
          <img src={qliksenseImg} alt="Qlik Sense" width={70} heigth={70} />
        </div>
      </div>
      <img src={skillsImg} width={500} heigth={500} alt="Ilustração imagem" />
    </div>
  );
}
