import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../Css/ProjectCard.css";
function ProjectCard({ title, description, link }) {
  return (
    <div className="projectCard">
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

export default ProjectCard;
