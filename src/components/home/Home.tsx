import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import servmain2 from "../../images/servmain2.webp";
import natmain from "../../images/natmain.webp";
import natmain2 from "../../images/natmain2.webp";
import Footer from "../footer/Footer";
import OfferSlider from "./offerslider/OfferSlider";
import StayTuned from "../utils/StayTuned";
import { useTranslation } from "react-i18next";

const Fade = require("react-reveal/Fade");

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <article className="main-container">
        <div className="video-box">
          <iframe
            title="natalia małycha"
            src="https://player.vimeo.com/video/755044026?autoplay=1&loop=1&muted=1"
            frameBorder={0}
            allow="autoplay"
            className="main-video"
          ></iframe>
        </div>
      </article>
      <article className="header-about">
        <Fade bottom>
          <div className="header-about__title">
            <h3>
              {t("main-tit1")}
              <br />
              {t("main-tit2")}
            </h3>
            <p>
              {t("main-hen1")} <br /> {t("main-hen2")}
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="header-about__text">
            <img src={natmain} alt="natmain" />
            <div className="about-text__container">
              <h3> {t("about-head")}</h3>
              <h4>{t("main-about-text1")}</h4>
              <p>{t("main-about-text2")}</p>

              <Link to="/about">
                <button> {t("read-more")}</button>
              </Link>
            </div>
          </div>
        </Fade>
      </article>
      <article className="main-service">
        <Fade bottom>
          <div className="header-service__title">
            <p>
              {t("main-coop1")}
              <br />
              {t("main-coop2")}{" "}
            </p>
            <h3>
              {t("main-coop-head1")}
              <br /> {t("main-coop-head2")}
            </h3>
          </div>
        </Fade>{" "}
        <Fade bottom>
          <div className="header-service__text">
            <div className="service-text__container">
              <h3> {t("main-serv-head")}</h3>
              <h4>{t("main-serv-text1")}</h4>
              <p>{t("main-serv-text2")}</p>
              <Link to="/service">
                <button> {t("read-more")}</button>
              </Link>
            </div>
            <img src={servmain2} alt="services img" />
          </div>
        </Fade>
      </article>
      <article className="main-tricity">
        <Fade bottom>
          <div className="header-tricity__title">
            <h3>{t("main-tri-tit")}</h3>
            <p>{t("main-tri-tit2")}</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="header-tricity__text">
            <img src={natmain2} alt="natmain" />
            <div className="tricity-text__container">
              <h3>TRÓJMIASTO</h3>
              <h4>
              {t("main-tri-text1")}
              </h4>
              <p>
              {t("main-tri-text2")} </p>
              <Link to="/tricity">
                <button>{t("read-more")}</button>
              </Link>
            </div>
          </div>
        </Fade>
      </article>
      <Fade bottom>
        <OfferSlider />
      </Fade>{" "}
      <Fade bottom>
        <StayTuned name="" email="" id="" initialState="" />{" "}
      </Fade>{" "}
      <Fade bottom>
        <Footer />
      </Fade>
    </>
  );
};

export default Home;
