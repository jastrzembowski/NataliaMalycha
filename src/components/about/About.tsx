import React from "react";
import "./about.scss";
import nat7 from "../../images/nat7.webp";
import nat10 from "../../images/nat17.webp";
import nat6 from "../../images/nat6.webp";
import StayTuned from "../utils/StayTuned";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";

const Fade = require("react-reveal/Fade");
const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="about-head">
        <h1> Natalia Małycha</h1>
        <p>{t("few")}</p>
      </header>
      <article className="about-top">
        <Fade bottom>
          <h3>
            Property Advisor & Branch Manager in Gdynia
            <br />
            {t("inv")}
          </h3>
        </Fade>
        <Fade bottom>
          <div className="about-text">
            <article>
              <p>{t("spec")}</p>
              <p>{t("imcommun")}</p>
            </article>
            <img src={nat7} alt="buy1"></img>
          </div>
        </Fade>
        <Fade bottom>
          <div className="about-text">
            <img src={nat10} alt="buy1"></img>

            <article>
              <p>{t("choose")}</p>
              <p>{t("workin")}</p>
            </article>
          </div>
        </Fade>
        <Fade bottom>
          <div className="about-text">
            <article>
              <p>{t("passion")} </p>
              <p>
                {t("place")} <br />
                {t("warn")} <br />
                {t("settle")}
              </p>
            </article>
            <img src={nat6} alt="buy1"></img>
          </div>
        </Fade>
        <Fade bottom>
          <article className="about-bot">
            <h4>{t("prof")} </h4>
            <h4>{t("effic")}</h4>
            <h2>Natalia Małycha </h2>
          </article>
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

export default About;
