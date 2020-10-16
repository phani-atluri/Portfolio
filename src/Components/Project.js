import React from "react";
import ProjectCard from "./ProjectCard";
import "../Css/project.css";
function Project() {
  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <span>
        <h3>My Awesome Work</h3>
      </span>
      <div className="project__main">
        <div className="project__cards">
          <ProjectCard
            title="Invoice App"
            description="Simple Invoice application created using html css Javascript"
            link="https://github.com/phani-atluri/InvoiceApp"
          />
          <ProjectCard
            title="Twitter clone"
            description="A web Application which resembles Twitter UI, with minimal user interactions. Developed using React"
            link="https://github.com/phani-atluri/twitter-ui-clone"
          />
          <ProjectCard
            title="Snake Game"
            description="Snake game developed using Html Canvas and Vanilla Javascript"
            link="https://github.com/phani-atluri/snakeGame"
          />
          <ProjectCard
            title="WebScraping Corona Data"
            description="Developed a script that scraps corona virus data from Corona stats Website."
            link="https://github.com/phani-atluri/WebScraping-Corona-Data"
          />
        </div>
      </div>
    </section>
  );
}

export default Project;
