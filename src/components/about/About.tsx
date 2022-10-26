import React from "react";
import "./about.scss";
import nat7 from "../../images/nat7.jpg";
import nat10 from "../../images/nat17.jpg";
import nat6 from "../../images/nat6.jpg";
import StayTuned from "../utils/StayTuned";
import Footer from "../footer/Footer";
const Fade = require("react-reveal/Fade");

const About = () => {
  return (
    <>
      {" "}
      <header className="about-head">
        <h1> Natalia Małycha</h1>
        <p>Kilka słów o mnie...</p>
      </header>
      <article className="about-top">
        <Fade bottom>
          <h3>
            Property Advisor & Branch Manager in Gdynia
            <br /> w firmie InVilla Nieruchomości.
          </h3>
        </Fade>{" "}
        <Fade bottom>
          <div className="about-text">
            <article>
              <p>
                Specjalizuje się w sprzedaży oraz najmie mieszkań i apartamentów
                Premium w całym Trójmieście (Gdańsk, Sopot, Gdynia), oraz domów
                segmentu Premium.
              </p>
              <p>
                Jestem osobą komunikatywną, zawsze wzorowo zorganizowaną,
                punktualną oraz świetnie przygotowaną do spotkań.
              </p>
            </article>
            <img src={nat7} alt="buy1"></img>
          </div>
        </Fade>{" "}
        <Fade bottom>
          <div className="about-text">
            <img src={nat10} alt="buy1"></img>

            <article>
              <p>
                Wybierając studia wiedziałam że chce połączyć pasje do
                podróżowania, architektury oraz poznawania różnych kultur z
                pracą z Klientem.
              </p>
              <p>
                Pracując przez ponad 12 lat w najlepszych, 5 gwiazdkowych
                obiektach hotelarskich w Polsce i za granicą zdobywałam
                doświadczenie w obsłudze Klienta indywidualnego jak biznesowego,
                dzięki czemu doskonale wiem, jak zadbać i wyjść ponad jego
                oczekiwania.{" "}
              </p>
            </article>
          </div>
        </Fade>{" "}
        <Fade bottom>
          <div className="about-text">
            <article>
              <p>
                Pasję do ludzi, gościnności, architektury kilka lat temu
                przeniosłam do branży nieruchomości Premium, gdzie na co dzień
                pomagam ludziom spełniać ich marzenia przy wyborze nowego
                miejsca do zamieszkania.{" "}
              </p>
              <p>
                To właśnie w Trójmieście odnalazłam swoje miejsce do życia.
                <br />
                Ciebie również zapraszam i ostrzegam!
                <br />
                Zakochasz się i zagościsz tutaj na dłużej..
              </p>
            </article>
            <img src={nat6} alt="buy1"></img>
          </div>
        </Fade>{" "}
        <Fade bottom>
          <article className="about-bot">
            <h4>Natalia to 100% profesjonalizmu. </h4>
            <h4>Wysoka skuteczność.</h4>
            <h2>Natalia Małycha </h2>
          </article>{" "}
        </Fade>
      </article>
      <Fade bottom>
        {" "}
        <StayTuned />
      </Fade>{" "}
      <Fade bottom>
        <Footer />
      </Fade>
    </>
  );
};

export default About;
