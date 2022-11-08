import React from "react";
import Slider from "react-slick";
import fin from "../../../images/service/fin.webp";
import kan from "../../../images/service/kan.webp";
import met from "../../../images/service/met.webp";
import nat1 from "../../../images/service/nat1.webp";
import nat8 from "../../../images/service/nat8.webp";
import prep from "../../../images/service/prep.webp";
import spot from "../../../images/service/spot.webp";
import ser1 from "../../../images/service/ser1.webp";
import ser2 from "../../../images/service/ser2.webp";
import ser3 from "../../../images/service/ser3.webp";
import ser4 from "../../../images/service/ser4.webp";
import Footer from "../../footer/Footer";
import StayTuned from "../../utils/StayTuned";
import { useTranslation } from "react-i18next";

const Fade = require("react-reveal/Fade");

const Sell = () => {
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
            <h1>{t("sell-a-prop")}</h1>
            <img src={ser1} alt="slider-img1" />
          </div> 
          <div className="service-img-box">
            <h1>{t("sell-a-prop")}</h1>
            <img src={ser2} alt="slider-img2" />
          </div> 
          <div className="service-img-box">
            <h1>{t("sell-a-prop")}</h1>
            <img src={ser3} alt="slider-img3" />
          </div> 
          <div className="service-img-box">
            <h1>{t("sell-a-prop")}</h1>
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
              <h3>{t("sell-meet")}</h3>
              <p>{t("sell-meet-text")} </p>
            </article>
            <img src={spot} alt="buy1"></img>
          </div>
        </Fade> 
        <Fade bottom>
          <div className="buy-text-2">
            <img src={prep} alt="buy1"></img>
            <article>
              <h3>{t("sell-prep")}</h3>
              <p>{t("sell-prep-text")}</p>
            </article>
          </div>
        </Fade> 
        <Fade bottom>
          <div className="buy-text">
            <article>
              <h3>{t("sell-met")}</h3>
              <p>{t("sell-met-text")} </p>
            </article>
            <img src={met} alt="buy1"></img>
          </div>
        </Fade> 
        <Fade bottom>
          <div className="buy-text-2">
            <img src={kan} alt="buy1"></img>
            <article>
              <h3>{t("sell-can")}</h3>
              <p>{t("sell-can-text")}</p>
            </article>
          </div>
        </Fade> 
        <Fade bottom>
          <div className="buy-text">
            <article>
              <h3>{t("sell-prof")}</h3>
              <p>{t("sell-prof-text")} </p>
            </article>
            <img src={nat8} alt="buy1"></img>
          </div>
        </Fade> 
        <Fade bottom>
          <div className="buy-text-2">
            <img src={nat1} alt="buy1"></img>
            <article>
              <h3>{t("sell-name")}</h3>
              <p>{t("sell-name-text")} </p>
            </article>
          </div>
        </Fade> 
        <Fade bottom>
          <div className="buy-text">
            <article>
              <h3>{t("sell-final")}</h3>
              <p>{t("sell-final-text")}</p>
            </article>
            <img src={fin} alt="buy1"></img>
          </div>
        </Fade> 
        <Fade bottom>
          <h1 className="sell-bottom__text">
            {t("sell-foot1")} <br />
            {t("sell-foot2")}
          </h1>
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

export default Sell;
