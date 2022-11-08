import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import sidepic from "../../images/sidepic.webp";
import nmlogo from "../../images/nmlogo.webp";
import nmlogowhite from "../../images/nmlogowhite.webp";
import "./nav.scss";
import StayTuned from "../utils/StayTuned";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Nav = () => {
  const { i18n, t } = useTranslation();

  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);
  const [service, setService] = useState(false);
  const [tricity, setTricity] = useState(false);
  const loc = localStorage.getItem("i18nextLng");

  useEffect(() => {
    if (loc && loc?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
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
          <img
            src={navbar ? nmlogo : nmlogowhite}
            alt="logo Natalia Małycha"
          ></img>
        </Link>
        <div className="media-box">
        <select
            className="lang-select"
            value={loc ? loc : ""}
            onChange={handleLanguageChange}
          >
            <option value="en" className="lang-option">
              🇬🇧
            </option>
            <option value="pl" className="lang-option">
              🇵🇱
            </option>
          </select>
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
        <Link to="/contact">
          <h3> {t("meet")}</h3>
        </Link>
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
            <li>
              <Link
                to="/about"
                onClick={
                  active ? () => setActive(false) : () => setActive(true)
                }
              >
                {t("about")}
              </Link>
            </li>
            <li
              onClick={
                service
                  ? () => setService(false)
                  : () => {
                      setService(true);
                      setTricity(false);
                    }
              }
            >
              {t("service")}
            </li>
            <ul className={!service ? "service-hidden" : "side-service"}>
              <li>
                <Link
                  to="/service"
                  onClick={
                    active ? () => setActive(false) : () => setActive(true)
                  }
                >
                  {t("abservice")}
                </Link>
              </li>
              <li>
                <Link
                  to="/service/sell"
                  onClick={
                    active ? () => setActive(false) : () => setActive(true)
                  }
                >
                  {t("sell")}
                </Link>
              </li>
              <li>
                <Link
                  to="/service/buy"
                  onClick={
                    active ? () => setActive(false) : () => setActive(true)
                  }
                >
                  {t("buy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/service/rent"
                  onClick={
                    active ? () => setActive(false) : () => setActive(true)
                  }
                >
                  {t("rent")}
                </Link>
              </li>
            </ul>
            <li
              onClick={
                tricity
                  ? () => setTricity(false)
                  : () => {
                      setTricity(true);
                      setService(false);
                    }
              }
            >
              {t("tricity")}
            </li>
            <ul className={!tricity ? "service-hidden" : "side-tricity"}>
              <li>
                <Link
                  to="/gdansk"
                  onClick={
                    active ? () => setActive(false) : () => setActive(true)
                  }
                >
                  Gdańsk
                </Link>
              </li>
              <li>
                <Link
                  to="/gdynia"
                  onClick={
                    active ? () => setActive(false) : () => setActive(true)
                  }
                >
                  Gdynia
                </Link>
              </li>
              <li>
                <Link
                  to="/sopot"
                  onClick={
                    active ? () => setActive(false) : () => setActive(true)
                  }
                >
                  Sopot
                </Link>
              </li>
            </ul>
            <li>
              <a href="https://invilla.pl/zespol/natalia-malycha/#properties">
                {t("offers")}
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={
                  active ? () => setActive(false) : () => setActive(true)
                }
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
          <div className="side-offer-box">
            <h3> {t("recommended")}</h3>
            <img src={sidepic} alt="sidepic"></img>
            <h4>
              {t("apartment")} <br /> {t("in-sop")}
            </h4>
            <button> {t("see-more")}</button>
          </div>
        </div>
        <StayTuned name="" email="" id="" initialState="" />
      </article>
    </>
  );
};

export default Nav;
