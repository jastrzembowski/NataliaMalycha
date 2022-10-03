import React from "react";
import "./footer.scss";
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
        <img src={nmlogo} alt="nm logo"></img>
      </div>
      <ul className="footer-links">
        <li>RODO</li>
        <li>Nota Prawna</li>
        <li>Regulamin Serwisu</li>

        <li>Polityka prywatności</li>
      </ul>
      <div className="footer-address">
        <p>ul. Lęborska 6B</p>
        <p>Gdańsk</p>
        <h6>Tel. 0 500 500 500</h6>
        <div className="media-box">
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
