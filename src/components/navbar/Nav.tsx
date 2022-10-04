import React, { useState } from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import sidepic from "../../images/sidepic.jpg";
import nmlogo from "../../images/nmlogo.png";
import nmlogowhite from "../../images/nmlogowhite.png";
import "./nav.scss";

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
        <label
          className="menu-icon"
          onClick={active ? () => setActive(false) : () => setActive(true)}
        >
          <span className="nav-icon"></span>
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
      <article className={!active ? "menu-hidden" : "side-menu"}>
        <label
          className="side-icon"
          onClick={active ? () => setActive(false) : () => setActive(true)}
        >
          <span className="side-nav-icon"></span>
        </label>
        <img src={nmlogo} alt="logo" className="side-logo" />
        <div className="side-box">
          <ul className="side-texts">
            <li>O mnie</li>
            <li><Link to="/service" onClick={() => setActive(false)}>Usługi</Link></li>
            <li>Trójmiasto</li>
            <li>Oferty</li>
            <li>Kontakt</li>
          </ul>
          <div className="side-offer-box">
            <h3>Polecana oferta</h3>
            <img src={sidepic} alt="sidepic"></img>
            <h4>Apartament <br/>w Sopocie</h4>
            <button>
              Zobacz więcej
            </button>
          </div>

        </div>
      </article>
    </>
  );
};

export default Nav;
