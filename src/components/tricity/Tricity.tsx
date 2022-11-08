import React from "react";
import { Link } from "react-router-dom";
import "./tricity.scss";
import StayTuned from "../utils/StayTuned";
import Footer from "../footer/Footer";
import gda4 from "../../images/gdansk/gda4.webp";
import gdy2 from "../../images/gdynia/gdy2.webp";
import sop1 from "../../images/sopot/sop1.webp";
import { useTranslation } from "react-i18next";

const Fade = require("react-reveal/Fade");

const Tricity = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="tri-header">
        <h1>Trójmiasto</h1>
      </header>
      <article className="service-link_box">
        <div className="bg-box">
          <Fade bottom>
            <h1>{t("find-dream")}</h1>
          </Fade>
          <Fade bottom>
            <div className="serv-windows">
              <div className="wind-box">
                <img src={gda4} alt="box" />
                <h3>Gdańsk</h3>
                <Link to="/gdansk">
                  <button> {t("see-more")}</button>
                </Link>
              </div>
              <div className="wind-box">
                <img src={gdy2} alt="box" />
                <h3>Gdynia</h3>
                <Link to="/gdynia">
                  <button> {t("see-more")}</button>
                </Link>
              </div>
              <div className="wind-box">
                <img src={sop1} alt="box" />
                <h3>Sopot</h3>
                <Link to="/sopot">
                  <button> {t("see-more")}</button>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </article>
      <Fade bottom>
        <StayTuned name="" email="" id="" initialState="" />
      </Fade>
      <Fade bottom>
        <Footer />
      </Fade>
    </>
  );
};

export default Tricity;
