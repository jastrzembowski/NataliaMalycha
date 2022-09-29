import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import nmlogo from "../../images/nmlogo.png";
import nmlogowhite from "../../images/nmlogowhite.png";
import "./nav.scss";
import "./nav.css";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <>
      <nav
        className={
          navbar ? "navbar navbar-white" : " navbar navbar-transparent"
        }
      >
        <label className="menu-icon" onClick={()=>setActive(true)}>
          <span className="nav-icon" ></span>
        </label>
        <img
          src={navbar ? nmlogo : nmlogowhite}
          alt="logo Natalia Małycha"
        ></img>
        <div className="media-box">
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <h3>MEET ME</h3>
      </nav>
      <article className={!active ? "menu-hidden" : "side-menu"}></article>
    </>
  );
};

export default Nav;
