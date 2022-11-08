import React from "react";
import Slider from "react-slick";
import ser1 from "../../images/service/ser1.webp";
import ser2 from "../../images/service/ser2.webp";
import ser3 from "../../images/service/ser3.webp";
import ser4 from "../../images/service/ser4.webp";
import { Link } from "react-router-dom";
import servmain from "../../images/service/servmain.webp";
import natserv2 from "../../images/service/natserv2.webp";
import "./service.scss";
import Footer from "../footer/Footer";
import StayTuned from "../utils/StayTuned";
import { useTranslation } from "react-i18next";

const Fade = require("react-reveal/Fade");

const Service = () => {
  const settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    fade: true,
    arrows: false,
    autoplayspeed: 1000,
    infinite: true,
  };
  const { t } = useTranslation();

  return (
    <>
      <header className="service-header__container">
        <Slider {...settings2}>
          <div className="service-img-box">
            <h1>
              {t("why-coop1")}
              <br />
              {t("why-coop2")}
            </h1>
            <h3> {t("exp")}</h3>
            <img src={ser1} alt="slider-img1" />
          </div>
          <div className="service-img-box">
            <h1>
              {t("why-coop1")}
              <br />
              {t("why-coop2")}
            </h1>
            <h3> {t("quality")}</h3>
            <img src={ser2} alt="slider-img2" />
          </div>
          <div className="service-img-box">
            <h1>
              {t("why-coop1")}
              <br />
              {t("why-coop2")}
            </h1>
            <h3> {t("prec")}</h3>
            <img src={ser3} alt="slider-img3" />
          </div>
          <div className="service-img-box">
            <h1>
              {t("why-coop1")}
              <br />
              {t("why-coop2")}
            </h1>
            <h3> {t("honest")}</h3>
            <img src={ser4} alt="slider-img4" />
          </div>
        </Slider>
      </header>
      <article className="service-about">
        <Fade bottom>
          <div className="serv-title">
            <h3>{t("serv-exp1")}</h3>
            <h4>{t("serv-exp2")} </h4>
          </div>
        </Fade>
        <Fade bottom>
          <div className="header-service__text">
            <div className="service-text__container">
              <h3> {t("serv-about")}</h3>
              <h4>{t("serv-about-text1")}</h4>
              <p>{t("serv-about-text2")}</p>
            </div>
            <img src={servmain} alt="services img" />
          </div>
        </Fade>
        <div className="serv-text-box">
          <Fade bottom>
            <div className="bg-holder">
              <div className="img-holder">
                <h3>
                  {t("serv-nego1")}
                  <br /> {t("serv-nego2")}
                </h3>
                <img src={natserv2} alt="services img nat" />
              </div>
              <div className="service-text__container">
                <h4>{t("serv-nego-text1")}</h4>
                <h3>{t("serv-nego-text2")}</h3>
                <p>{t("serv-nego-text3")}</p>
                <p>{t("serv-nego-text4")}</p>
              </div>
            </div>
          </Fade>
        </div>
      </article>
      <article className="service-link_box">
        <Fade bottom>
          <div className="bg-box">
            <h1> {t("my-serv")}</h1>
            <div className="serv-windows">
              <div className="wind-box">
                <img src={ser1} alt="box" />
                <h3> {t("sell")}</h3>
                <Link to="/service/sell">
                  <button> {t("see-more")}</button>
                </Link>
              </div>
              <div className="wind-box">
                <img src={ser2} alt="box" />
                <h3> {t("rent")}</h3>
                <Link to="/service/rent">
                  <button> {t("see-more")}</button>
                </Link>
              </div>
              <div className="wind-box">
                <img src={ser3} alt="box" />
                <h3> {t("buy")}</h3>
                <Link to="/service/buy">
                  <button> {t("see-more")}</button>
                </Link>
              </div>
            </div>
          </div>
        </Fade>
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

export default Service;
