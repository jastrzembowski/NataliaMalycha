import React from "react";
import "../gdansk/gdansk.scss";
import gdy3 from "../../../images/sopot/sop1.webp";
import ergo from "../../../images/sopot/ergo.webp";
import hipo from "../../../images/sopot/hipo.webp";
import lysa from "../../../images/sopot/lysa.webp";
import mon from "../../../images/sopot/mon.webp";
import oper from "../../../images/sopot/oper.webp";
import pla from "../../../images/sopot/pla.webp";
import { useTranslation } from "react-i18next";

import StayTuned from "../../utils/StayTuned";
import Footer from "../../footer/Footer";
const Fade = require("react-reveal/Fade");

const Gdynia = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="sop-bg">
        <header className="sop-header">
          <h1>SOPOT</h1>
        </header>
      </header>
      <article className="gda-about">
        <Fade bottom>
          <article className="sop-about__head">
            <h1>Sopot</h1>
            <p>{t("sop-title")}</p>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <img src={mon} alt="gdynia"></img>
            <aside>
              <h1>{t("sop-mon")} </h1>

              <p>{t("sop-mon-text1")}</p>

              <p>{t("sop-mon-text2")} </p>
            </aside>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>{t("sop-op")} </h1>
              <h3>{t("sop-op-text1")}</h3>
              <p>{t("sop-op-text2")}</p>
            </aside>
            <img src={oper} alt="gdynia"></img>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <img src={ergo} alt="gdynia"></img>

            <aside>
              <h3>{t("sop-ergo")}</h3>
              <p>{t("sop-ergo2")} </p>
            </aside>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>{t("sop-hipo")}</h1>

              <p>{t("sop-hipo-text")} </p>
            </aside>
            <img src={hipo} alt="gdynia"></img>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <img src={pla} alt="gdynia"></img>

            <aside>
              <h3>{t("sop-pla")}</h3>
              <p>{t("sop-pla-text1")}</p>
            </aside>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <p>{t("sop-pla-text2")} </p>
            </aside>
            <img src={gdy3} alt="gdynia"></img>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <img src={lysa} alt="gdynia"></img>
            <aside>
              <h1>{t("sop-zim")}</h1>
              <p>{t("sop-zim-text")} </p>
            </aside>
          </article>
        </Fade>
        <Fade bottom>
          <h1 className="sop-intro">{t("sop-foot")} </h1>
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

export default Gdynia;
