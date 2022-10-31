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
  return (
    <>
      <header className="service-header__container">
        <Slider {...settings2}>
          <div className="service-img-box">
            <h1>
              DLACZEGO <br />
              WARTO ZE MNĄ WSPÓŁPRACOWAĆ
            </h1>
            <h3>Doświadczenie</h3>
            <img src={ser1} alt="slider-img1" />
          </div>{" "}
          <div className="service-img-box">
            <h1>
              DLACZEGO <br />
              WARTO ZE MNĄ WSPÓŁPRACOWAĆ
            </h1>
            <h3>Jakość</h3>
            <img src={ser2} alt="slider-img2" />
          </div>{" "}
          <div className="service-img-box">
            <h1>
              DLACZEGO <br />
              WARTO ZE MNĄ WSPÓŁPRACOWAĆ
            </h1>
            <h3>Dokładność</h3>
            <img src={ser3} alt="slider-img3" />
          </div>{" "}
          <div className="service-img-box">
            <h1>
              DLACZEGO <br />
              WARTO ZE MNĄ WSPÓŁPRACOWAĆ
            </h1>
            <h3>Szczerość</h3>
            <img src={ser4} alt="slider-img4" />
          </div>
        </Slider>
      </header>
      <article className="service-about">
        <Fade bottom>
          <div className="serv-title">
            <h3>
              Doświadczenie w branży umożliwia mi precyzyjnie dopasować
              strategię działań do oczekiwań Klientów i sytuacji na rynku
              nieruchomości.
            </h3>
            <h4>
              "Do każdej transakcji podchodzę indywidualnie – wiem że w każdej z
              nich kryje się inna historia, za którą stoją konkretni ludzie."
            </h4>
          </div>
        </Fade>{" "}
        <Fade bottom>
          <div className="header-service__text">
            <div className="service-text__container">
              <h3>O USŁUGACH</h3>
              <h4>
                W mojej pracy stawiam przede wszystkim na relacje z Klientami i
                partnerstwo w biznesie. Nieruchomości to dla mnie przede
                wszystkim ludzie i ich potrzeby.
              </h4>
              <p>
                Większość moich Klientów trafia do mnie z polecenia. W życiu jak
                i w pracy stawiam na jakość, nigdy na ilość. Specjalizuję się w
                najmie oraz sprzedaży mieszkań i domów na terenie całego
                Trójmiasta.
              </p>
            </div>
            <img src={servmain} alt="services img" />
          </div>
        </Fade>
        <div className="serv-text-box">
          {" "}
          <Fade bottom>
            <div className="bg-holder">
              <div className="img-holder">
                <h3>
                  {" "}
                  "Bardzo dobrze odnajduję
                  <br /> się w negocjacjach"
                </h3>
                <img src={natserv2} alt="services img nat" />
              </div>
              <div className="service-text__container">
                <h4>
                  Posiadam duże doświadczenie w negocjowaniu umów i prowadzeniu
                  złożonych projektów, posiadam również umiejętności mediacyjne,
                  zapewniając tym samym moim Klientom spokój i bezpieczeństwo,
                  także w nieprzewidzianych sytuacjach.
                </h4>
                <h3>
                  Bardzo dobrze odnajduje się w negocjacjach handlowych, pracy
                  pod presją czasu, oraz środowisku sprzedaży produktów
                  luksusowych.
                </h3>
                <p>
                  W pracy stawiam na najwyższą jakość obsługi Klienta,
                  profesjonalizm oraz długofalowe relacje, wyróżniam się
                  skutecznością w działaniach
                </p>
                <p>
                  W pracy wykorzystuje filmy wideo, wirtualne spacery,
                  profesjonale sesje zdjęciowe, perswazyjne opisy tekstowe i
                  wiele więcej, czyli wszystko, co sprawia, że prezentowane
                  oferty wyróżniają się na tle konkurencji i umożliwiają
                  dotarcie do znacznie szerszej grupy osób potencjalnie
                  zainteresowanych zakupem.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </article>
      <article className="service-link_box">
        <Fade bottom>
          <div className="bg-box">
            <h1>Moje usługi</h1>
            <div className="serv-windows">
              <div className="wind-box">
                <img src={ser1} alt="box" />
                <h3>Sprzedaż</h3>
                <Link to="/service/sell">
                  {" "}
                  <button>Zobacz więcej</button>
                </Link>
              </div>

              <div className="wind-box">
                <img src={ser2} alt="box" />
                <h3>Wynajem</h3>
                <Link to="/service/rent">
                  {" "}
                  <button>Zobacz więcej</button>
                </Link>
              </div>

              <div className="wind-box">
                <img src={ser3} alt="box" />
                <h3>Kupno</h3>
                <Link to="/service/buy">
                  {" "}
                  <button>Zobacz więcej</button>
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </article>
      <Fade bottom>
        <StayTuned name="" email="" id="" initialState="" />{" "}
      </Fade>{" "}
      <Fade bottom>
        <Footer />
      </Fade>
    </>
  );
};

export default Service;
