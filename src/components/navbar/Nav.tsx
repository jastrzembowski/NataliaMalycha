import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import StayTuned from "../utils/StayTuned";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);
  const [service, setService] = useState(false);

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
        <Link to="/">
          {" "}
          <img
            src={navbar ? nmlogo : nmlogowhite}
            alt="logo Natalia Małycha"
          ></img>
        </Link>
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
        <Link to="/" onClick={() => setActive(false)} className="side-logo">
          <img src={nmlogo} alt="logo" className="side-logo" />
        </Link>
        <div className="side-box">
          <ul className="side-texts">
            <li>O mnie</li>
            <li
              onClick={
                service ? () => setService(false) : () => setService(true)
              }
            >
              Usługi
            </li>
            <ul className={!service ? "service-hidden" : "side-service"}>
              <li><Link to ="/service"  onClick={active ? () => setActive(false) : () => setActive(true)}>o usługach </Link></li>
              <li><Link to ="/service/sell" onClick={active ? () => setActive(false) : () => setActive(true)}>Sprzedaż </Link></li>
              <li><Link to ="/service/buy" onClick={active ? () => setActive(false) : () => setActive(true)}>Kupno </Link></li>
              <li><Link to ="/service/rent" onClick={active ? () => setActive(false) : () => setActive(true)}>Wynajem </Link></li>
            </ul>
            <li>Trójmiasto</li>
            <li>Oferty</li>
            <li>Kontakt</li>
          </ul>
          <div className="side-offer-box">
            <h3>Polecana oferta</h3>
            <img src={sidepic} alt="sidepic"></img>
            <h4>
              Apartament <br />w Sopocie
            </h4>
            <button>Zobacz więcej</button>
          </div>
        </div>
        <StayTuned />
      </article>
    </>
  );
};

export default Nav;
