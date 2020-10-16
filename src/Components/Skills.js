import React from "react";

import "../Css/skills.css";
function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>SKILLS</h2>
      <div className="skills__main">
        <p>HTML</p>
        <div class="container">
          <div class="skill html"></div>
        </div>

        <p>CSS</p>
        <div class="container">
          <div class="skill css"></div>
        </div>

        <p>JavaScript</p>
        <div class="container">
          <div class="skill js"></div>
        </div>

        <p>React</p>
        <div class="container">
          <div class="skill React"></div>
        </div>
        <p>NodeJS</p>
        <div class="container">
          <div class="skill node"></div>
        </div>
        <p>MongoDB</p>
        <div class="container">
          <div class="skill mDB"></div>
        </div>
        <p>Python</p>
        <div class="container">
          <div class="skill python"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
