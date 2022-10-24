import React from "react";
import "./footer.scss";
import {Link} from "react-router-dom";
import nmlogo from "../../images/nmlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo__holder">
       <Link to="/"> <img src={nmlogo} alt="nm logo"></img></Link>
      </div>
      <ul className="footer-links">
        <li>RODO</li>
        <li>Nota Prawna</li>
        <li>Regulamin Serwisu</li>
        <li>Polityka prywatności</li>
      </ul>
      <div className="footer-address">
        <p>ul. Strzelców 18/8</p>
        <p>80-586 Gdynia</p>
        <h6>Tel. +47 787 665 881</h6>
        <div className="media-box">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="https://www.facebook.com/InVilla">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/natalia-ma%C5%82ycha-58097883/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/invilla_nieruchomosci/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
