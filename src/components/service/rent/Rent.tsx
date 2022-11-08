import React from "react";
import Slider from "react-slick";
import ser1 from "../../../images/service/ser1.webp";
import ser2 from "../../../images/service/ser2.webp";
import ser3 from "../../../images/service/ser3.webp";
import ser4 from "../../../images/service/ser4.webp";
import kaw from "../../../images/rem.webp";
import rem from "../../../images/kaw.webp";
import prof from "../../../images/prof.webp";
import met from "../../../images/service/met.webp";
import kan from "../../../images/service/kan.webp";
import nat10 from "../../../images/nat10.webp";
import nat8 from "../../../images/nat8.webp";
import Footer from "../../footer/Footer";
import StayTuned from "../../utils/StayTuned";
import { useTranslation } from "react-i18next";

const Fade = require("react-reveal/Fade");

const Rent = () => {
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
            <h1>{t("rent-a-prop")}</h1>
            <img src={ser1} alt="slider-img1" />
          </div>
          <div className="service-img-box">
            <h1>{t("rent-a-prop")}</h1>
            <img src={ser2} alt="slider-img2" />
          </div>
          <div className="service-img-box">
            <h1>{t("rent-a-prop")}</h1>
            <img src={ser3} alt="slider-img3" />
          </div>
          <div className="service-img-box">
            <h1>{t("rent-a-prop")}</h1>
            <img src={ser4} alt="slider-img4" />
          </div>
        </Slider>
      </header>
      <div className="buy-text-box">
        <Fade bottom>
          <h2>{t("talk-cofee")}</h2>
        </Fade>
        <Fade bottom>
          <div className="buy-text">
            <article>
              <h3>{t("rent-meet")}</h3>
              <p>{t("rent-meet-text")}</p>
            </article>
            <img src={rem} alt="buy1"></img>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buy-text-2">
            <img src={kaw} alt="buy1"></img>
            <article>
              <h3>{t("rent-prep")}</h3>
              <p>{t("rent-prep-text")}</p>
            </article>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buy-text">
            <article>
              <h3>{t("rent-choose")}</h3>
              <p>{t("rent-choose-text")}</p>
            </article>
            <img src={met} alt="buy1"></img>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buy-text-2">
            <img src={kan} alt="buy1"></img>
            <article>
              <h3>{t("rent-canal")}</h3>
              <p>{t("rent-canal-text")}</p>
            </article>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buy-text">
            <article>
              <h3>{t("rent-prof")}</h3>
              <p>{t("rent-prof-text")}</p>
            </article>
            <img src={prof} alt="buy1"></img>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buy-text-2">
            <img src={nat8} alt="buy1"></img>
            <article>
              <h3>{t("rent-name")}</h3>
              <p>{t("rent-name-text")}</p>
            </article>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buy-text">
            <article>
              <h3>{t("rent-final")}</h3>
              <p>{t("rent-final-text")}</p>
            </article>
            <img src={nat10} alt="buy1"></img>
          </div>
        </Fade>
        <Fade bottom>
          <h1 className="rent-foot">{t("rent-foot")}</h1>
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

export default Rent;
