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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer-logo__holder">
        <Link to="/">
          <img src={nmlogo} alt="nm logo"></img>
        </Link>
      </div>
      <ul className="footer-links">
        <li>
          <Link to="/rodo"> RODO </Link>
        </li>
        <li>
          <Link to="/nota-prawna"> {t("notice")}</Link>
        </li>
        <li>
          <Link to="/regulamin-serwisu">{t("terms")} </Link>
        </li>
        <li>
          <Link to="/polityka-prywatnosci"> {t("privacy")}</Link>
        </li>
      </ul>
      <div className="footer-address">
        <p>{t("office")}</p>
        <p>{t("off-address")}</p>
        <p>81-341 Gdynia</p>
        <p>+47 787 665 881</p>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
