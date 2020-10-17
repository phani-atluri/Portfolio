import React from "react";

import "../Css/skills.css";
function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>SKILLS</h2>
      <div className="skills__main">
        <p>HTML</p>
        <div className="container">
          <div className="skill html"></div>
        </div>

        <p>CSS</p>
        <div className="container">
          <div className="skill css"></div>
        </div>

        <p>JavaScript</p>
        <div className="container">
          <div className="skill js"></div>
        </div>

        <p>React</p>
        <div className="container">
          <div className="skill React"></div>
        </div>
        <p>NodeJS</p>
        <div className="container">
          <div className="skill node"></div>
        </div>
        <p>MongoDB</p>
        <div className="container">
          <div className="skill mDB"></div>
        </div>
        <p>Python</p>
        <div className="container">
          <div className="skill python"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
