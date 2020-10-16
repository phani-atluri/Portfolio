import React from "react";
import Header from "./Header";
import "../Css/home.css";
import { Link } from "react-scroll";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Home() {
  return (
    <div className="home">
      <Header />

      <div className="home__desc">
        <h1>Hello,</h1>
        <p>
          I am phani, Cambridge based React Developer. Passionate about coding
          and learning.
        </p>
      </div>
      <div className="home__more">
        <Link to="about" smooth={true}>
          <ExpandMoreIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
