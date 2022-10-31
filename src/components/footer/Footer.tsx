import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import nmlogo from "../../images/nmlogo.webp";
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
        <Link to="/">
          {" "}
          <img src={nmlogo} alt="nm logo"></img>
        </Link>
      </div>
      <ul className="footer-links">
        <li>
          <Link to="/rodo"> RODO </Link>
        </li>
        <li>
          <Link to="/nota-prawna"> Nota Prawna</Link>
        </li>
        <li>
          <Link to="/regulamin-serwisu"> Regulamin Serwisu </Link>
        </li>
        <li>
          <Link to="/polityka-prywatnosci"> Polityka prywatności </Link>
        </li>
      </ul>
      <div className="footer-address">
        <p>ul. Węglowa 22 U 6</p>
        <p>81-341 Gdynia</p>
        <p>Tel. +47 787 665 881</p>
        <div className="media-box">
          <a href="mailto:n.malycha@invilla.pl">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100076578124773">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/natalia-małycha-58097883/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/nataliamalycha_nm/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
