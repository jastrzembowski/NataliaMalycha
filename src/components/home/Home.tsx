import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import servmain2 from "../../images/servmain2.png";
import natmain from "../../images/natmain.png";
import natmain2 from "../../images/natmain2.png";
import Footer from "../footer/Footer";
import OfferSlider from "./offerslider/OfferSlider";
import StayTuned from "../utils/StayTuned";

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

            <Link to="/about">
              {" "}
              <button>Czytaj dalej</button>
            </Link>
          </div>
        </div>
      </article>
      <article className="main-service">
        <div className="header-service__title">
          <p>
            Doświadczenie w branży umożliwia mi precyzyjnie dopasować strategię
            działań do oczekiwań Klientów i sytuacji na rynku nieruchomości.
            <br />
            Do każdej transakcji podchodzę indywidualnie – wiem że w każdej z
            nich kryje się inna historia, za którą stoją konkretni ludzie.
          </p>
          <h3>
            Dlaczego warto <br /> ze mną współpracować?
          </h3>
        </div>
        <div className="header-service__text">
          <div className="service-text__container">
            <h3>O USŁUGACH</h3>
            <h4>
              W mojej pracy stawiam przede wszystkim na relacje z Klientami i
              partnerstwo w biznesie. Nieruchomości to dla mnie przede wszystkim
              ludzie i ich potrzeby.
            </h4>
            <p>
              Większość moich Klientów trafia do mnie z polecenia. W życiu jak i
              w pracy stawiam na jakość, nigdy na ilość. Specjalizuję się w
              najmie oraz sprzedaży mieszkań i domów na terenie całego
              Trójmiasta.
            </p>

            <Link to="/service">
              {" "}
              <button>Czytaj dalej</button>
            </Link>
          </div>
          <img src={servmain2} alt="services img" />
        </div>
      </article>
      <article className="main-tricity">
        <div className="header-tricity__title">
          <h3>Idealne miejsce do życia...</h3>
          <p>... a Ty już wybrałeś?</p>
        </div>

        <div className="header-tricity__text">
          <img src={natmain2} alt="natmain" />
          <div className="tricity-text__container">
            <h3>TRÓJMIASTO</h3>
            <h4>
              Trzy miasta położone wzdłuż polskiego wybrzeża Morza Bałtyckiego
              tworzą obszar znany jako Trójmiasto:
            </h4>
            <p>
              nowoczesny port Gdynia, nadmorski kurort Sopot i historyczne
              miasto Gdańsk, punkt zwrotny w historii świata.
            </p>
<Link to ="/tricity">
            <button>Czytaj dalej</button></Link>
          </div>
        </div>
      </article>
      <OfferSlider />
      <StayTuned />
      <Footer />
    </>
  );
};

export default Home;
