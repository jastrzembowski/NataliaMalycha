import React from "react";
import "./buy.scss";
import Slider from "react-slick";
import kre from "../../../images/service/kre.webp";
import dok from "../../../images/service/dok.webp";
import spo from "../../../images/service/spo.webp";
import neg from "../../../images/service/neg.webp";
import nat15 from "../../../images/service/nat15.webp";
import ser1 from "../../../images/service/ser1.webp";
import ser2 from "../../../images/service/ser2.webp";
import ser3 from "../../../images/service/ser3.webp";
import ser4 from "../../../images/service/ser4.webp";
import Footer from "../../footer/Footer";
import StayTuned from "../../utils/StayTuned";
import { useTranslation } from "react-i18next";

const Fade = require("react-reveal/Fade");

const Buy = () => {
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
      <header className="service-header__container buy-header">
        <Slider {...settings2}>
          <div className="service-img-box">
            <h1>{t("buy-a-prop")}</h1>
            <img src={ser1} alt="slider-img1" />
          </div>
          <div className="service-img-box">
            <h1>{t("buy-a-prop")}</h1>
            <img src={ser2} alt="slider-img2" />
          </div>
          <div className="service-img-box">
            <h1>{t("buy-a-prop")}</h1>
            <img src={ser3} alt="slider-img3" />
          </div>
          <div className="service-img-box">
            <h1>{t("buy-a-prop")}</h1>
            <img src={ser4} alt="slider-img4" />
          </div>
        </Slider>
      </header>
      <div className="buy-text-box">
        <Fade bottom>
          <h2>{t("lets-meet")}</h2>
        </Fade>
        <Fade bottom>
          <div className="buy-text">
            <article>
              <h3>{t("present-prop")}</h3>
              <p>{t("it-all-starts")}</p>
            </article>
            <img src={spo} alt="buy1"></img>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buy-text-2">
            <img src={neg} alt="buy1"></img>
            <article>
              <h3> {t("buy-nego")}</h3>
              <p> {t("buy-nego-text")}</p>
            </article>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buy-text">
            <article>
              <h3> {t("buy-prep")}</h3>
              <p>{t("buy-prep-text")}</p>
            </article>
            <img src={dok} alt="buy1"></img>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buy-text-2">
            <img src={kre} alt="buy1"></img>
            <article>
              <h3> {t("buy-cred")}</h3>
              <p>{t("buy-cred-text")}</p>
            </article>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buy-text">
            <article>
              <h3> {t("buy-help")}</h3>
              <p>{t("buy-help-text")} </p>
            </article>
            <img src={nat15} alt="buy1"></img>
          </div>
        </Fade>
        <Fade bottom>
          <h1> {t("invitation")}</h1>
        </Fade>
      </div>
      <Fade bottom>
        <StayTuned name="" email="" id="" initialState="" />
      </Fade>
      <Fade bottom>
        <Footer />
      </Fade>
    </>
  );
};

export default Buy;
