import React from "react";
import "./gdansk.scss";
import baz from "../../../images/gdansk/baz.webp";
import dlu from "../../../images/gdansk/dlu.webp";
import ecs from "../../../images/gdansk/ecs.webp";
import mar from "../../../images/gdansk/mar.webp";
import mot from "../../../images/gdansk/mot.webp";
import nep from "../../../images/gdansk/nep.webp";
import wes from "../../../images/gdansk/wes.webp";
import woj from "../../../images/gdansk/woj.webp";
import gda4 from "../../../images/gdansk/gda4.webp";
import gda6 from "../../../images/gdansk/gda6.webp";
import StayTuned from "../../utils/StayTuned";
import Footer from "../../footer/Footer";
import { useTranslation } from "react-i18next";

const Fade = require("react-reveal/Fade");

const Gdansk = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="gda-header">
        <h1>Gdańsk</h1>
        <h3>{t("gda-title")}</h3>
      </header>
      <article className="gda-about">
        <article className="gda-about__head">
          <Fade bottom>
            <h1>{t("gda-att")}</h1>
            <p>{t("gda-att-text")}</p>
          </Fade>
        </article>
        <Fade bottom>
          <article className="gda-box">
            <img src={dlu} alt="gdansk"></img>

            <aside>
              <h1>{t("gda-dlu")}</h1>
              <h3>{t("gda-dlu-text1")}</h3>
              <p>{t("gda-dlu-text2")}</p>
            </aside>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>{t("gda-nep")}</h1>
              <p>{t("gda-nep-text")} </p>
            </aside>
            <img src={nep} alt="gdansk"></img>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <img src={baz} alt="gdansk"></img>
            <aside>
              <h1>{t("gda-baz")} </h1>
              <p>{t("gda-baz-text")}</p>
            </aside>
          </article>
        </Fade> 
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>{t("gda-muz")}</h1>
              <h3>{t("gda-muz-text1")}</h3>
              <p>{t("gda-muz-text2")}</p>
            </aside>
            <img src={woj} alt="gdansk"></img>
          </article>
        </Fade> 
        <Fade bottom>
          <article className="gda-box">
            <img src={mar} alt="gdansk"></img>
            <aside>
              <h1>{t("gda-mar")}</h1>
              <p>{t("gda-mar-text")} </p>
            </aside>
          </article>
        </Fade> 
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>{t("gda-ecs")}</h1>
              <h3>{t("gda-ecs-text")}</h3>
            </aside>
            <img src={ecs} alt="gdansk"></img>
          </article>
        </Fade> 
        <Fade bottom>
          <article className="gda-box">
            <img src={gda6} alt="gdansk"></img>
            <aside>
              <h1>{t("gda-morze")}</h1>
              <p>{t("gda-morze-text")} </p>
            </aside>
          </article>
        </Fade> 
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>{t("gda-mot")}</h1>
              <h3>{t("gda-mot-text")}</h3>
            </aside>
            <img src={mot} alt="gdansk"></img>
          </article>
        </Fade> 
        <Fade bottom>
          <article className="gda-box">
            <img src={gda4} alt="gdansk"></img>
            <aside>
              <h1>{t("gda-zur")}</h1>
              <p>{t("gda-zur-text")}</p>
            </aside>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>Westerplatte</h1>
              <h3>{t("gda-wes-text")}</h3>
            </aside>
            <img src={wes} alt="gdansk"></img>
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

export default Gdansk;
