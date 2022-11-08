import React from "react";
import "../gdansk/gdansk.scss";
import dar from "../../../images/gdynia/dar.webp";
import emig from "../../../images/gdynia/emig.webp";
import kamien from "../../../images/gdynia/kamien.webp";
import klif from "../../../images/gdynia/klif.jpg";
import molo from "../../../images/gdynia/molo.webp";
import muz from "../../../images/gdynia/muz.webp";
import orp from "../../../images/gdynia/orp.webp";
import plaza from "../../../images/gdynia/plaza.webp";
import skw from "../../../images/gdynia/skw.webp";

import StayTuned from "../../utils/StayTuned";
import Footer from "../../footer/Footer";
import { useTranslation } from "react-i18next";

const Fade = require("react-reveal/Fade");
const Gdynia = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="gdy-bg">
        <header className="gdy-header">
          <h1>Gdynia</h1>
        </header>
      </header>
      <article className="gda-about">
        <Fade bottom>
          <article className="gdy-about__head">
            <h1>Gdynia</h1>
            <p>{t("gdy-title")}</p>
          </article>
        </Fade>
        <Fade bottom>
          <h1 className="gdy-intro">{t("gdy-intro")}</h1>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <img src={skw} alt="gdynia"></img>
            <aside>
              <h1> {t("gdy-skw")}</h1>

              <p>{t("gdy-skw-text")}</p>
            </aside>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1> {t("gdy-dar")}</h1>
              <h3>{t("gdy-dar-text1")} </h3>
              <p>{t("gdy-dar-text2")} </p>
            </aside>
            <img src={dar} alt="gdynia"></img>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <img src={orp} alt="gdynia"></img>
            <aside>
              <h1>{t("gdy-orp")}</h1>
              <h3>{t("gdy-orp-text1")} </h3>
              <p>{t("gdy-orp-text2")}</p>
            </aside>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>{t("gdy-mar")}</h1>
              <h3>{t("gdy-mar-text1")}</h3>
              <p>{t("gdy-mar-text2")}</p>
            </aside>
            <img src={muz} alt="gdynia"></img>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <img src={kamien} alt="gdynia"></img>
            <aside>
              <h1>Kamienna Góra</h1>

              <p>{t("gdy-kam-text")}</p>
            </aside>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>{t("gdy-pla")}</h1>
              <h3>{t("gdy-pla-text1")}</h3>
              <p>{t("gdy-pla-text2")}</p>
            </aside>
            <img src={plaza} alt="gdynia"></img>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <img src={emig} alt="gdynia"></img>
            <aside>
              <h1>{t("gdy-emig")}</h1>
              <p>{t("gdy-emig-text")} </p>
            </aside>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>{t("gdy-mol")}</h1>
              <p>{t("gdy-mol-text")}</p>
            </aside>
            <img src={molo} alt="gdynia"></img>
          </article>
        </Fade>
        <Fade bottom>
          <article className="gda-box">
            <img src={klif} alt="gdynia"></img>
            <aside>
              <h1>{t("gdy-kli")}</h1>
              <p>{t("gdy-kli-text")} </p>
            </aside>
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

export default Gdynia;
