import React, { useState } from "react";
import { Link } from "react-scroll";
import "../Css/header.css";
import MenuIcon from "@material-ui/icons/Menu";
function Header() {
  const [isopen, SetIsopen] = useState(false);
  var handleClick = () => {
    SetIsopen(!isopen);
  };
  return (
    <div className="header">
      <div className={`header__navbar ${isopen && "header__navmenu "}`}>
        <div className="header__Nav">
          <Link to="home">HOME</Link>
        </div>
        <div className="header__Nav">
          <Link to="about" smooth={true}>
            ABOUT
          </Link>
        </div>
        <div className="header__Nav">
          <Link to="project" smooth={true}>
            PROJECTS
          </Link>
        </div>
        <div className="header__Nav">
          <Link to="skills" smooth={true}>
            SKILLS
          </Link>
        </div>
      </div>
      <div className="header__MenuBurger">
        <button onClick={handleClick}>
          <MenuIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default Header;
