import React from "react";
import "./home.scss";
import natmain from "../../images/natmain.png";

const Home = () => {
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
        </div>{" "}
      </article>
      <article className="header-about">
        <div className="header-about__title">
          <h3>
            {" "}
            Pierwszy krok <br />
            do realizacji Twoich marzeń
          </h3>
          <p>
            „Połączenie sił to początek, pozostanie razem to postęp,
            <br /> wspólna praca to sukces” - Henry Ford
          </p>
        </div>
        <div className="header-about__text">
          <img src={natmain} alt="natmain" />
          <div className="about-text__container">
            <h3>O MNIE</h3>
            <h4>
              Property Advisor & Branch Manager in Gdynia w firmie InVilla
              Nieruchomości.
            </h4>
            <p>
              Specjalizuje się w sprzedaży oraz najmie mieszkań i apartamentów
              Premium w całym Trójmieście (Gdańsk, Sopot, Gdynia), oraz domów
              segmentu Premium.
            </p>
        
            <button>Czytaj dalej</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;
