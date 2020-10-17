import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../Css/footer.css"
function Footer() {
  return (
    <div className="footer">
      <div className="footer__social">
        <a
          href="https://github.com/phani-atluri"
          style={{ textDecoration: "none", color: "black" }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/phaniatluri"
          style={{ textDecoration: "none", color: "black" }}
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
