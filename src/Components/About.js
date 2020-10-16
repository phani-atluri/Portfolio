import React from "react";
import "../Css/about.css";
function About() {
  return (
    <div className="about">
      <h2>ABOUT</h2>
      <div className="about__main">
        <div className="about__edu">
          <div className="edu__title">
            <h3>Education</h3>
          </div>
          <ul className="edu__details">
            <li>
              <strong>Conestoga College</strong>
            </li>
            <li>
              <p>
                Computer Applications Development <span>2018</span>
              </p>
            </li>
            <li>
              <p>
                Mobile Applications Development <span>2019</span>
              </p>
            </li>
            <li>
              <strong>JN University</strong>
            </li>
            <li>
              <p>
                Bachelors of Tecnology (Electronics and Computer Engineering)
              </p>
            </li>
          </ul>
        </div>

        <div className="about__work">
          <div className="work__title">
            <h3>Work Experience</h3>
          </div>
          <ul className="work__details">
            <li>
              <strong>Ediscovery Analyst</strong>
            </li>
            <li>
              <p>
                Job functions included the documentation and loading of client
                media to the network, Data analysis, extraction, QC, Data
                Processing and exporting.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
