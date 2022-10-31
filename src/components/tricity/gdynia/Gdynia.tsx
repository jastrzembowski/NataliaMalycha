import React from "react";
import "../gdansk/gdansk.scss";
import dar from "../../../images/gdynia/dar.jpg";
import emig from "../../../images/gdynia/emig.jpg";
import kamien from "../../../images/gdynia/kamien.jpg";
import klif from "../../../images/gdynia/klif.jpg";
import molo from "../../../images/gdynia/molo.jpg";
import muz from "../../../images/gdynia/muz.jpg";
import orp from "../../../images/gdynia/orp.jpg";
import plaza from "../../../images/gdynia/plaza.jpg";
import skw from "../../../images/gdynia/skw.jpg";

import StayTuned from "../../utils/StayTuned";
import Footer from "../../footer/Footer";
const Fade = require("react-reveal/Fade");
const Gdynia = () => {
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
            <p>
              Gdynia nazywana miastem powstałym z morza i marzeń. Jeszcze 100
              lat temu znajdowała się tu niewielka wieś rybacka, a dziś to znany
              kurort i największe niewojewódzkie miasto. Ten nowoczesny ośrodek
              konkuruje o względy turystów z Sopotem i Gdańskiem, z którymi
              tworzy Trójmiasto.
            </p>
          </article>
        </Fade>{" "}
        <Fade bottom>
          <h1 className="gdy-intro">
            Co roku powstają nowe atrakcje dla dorosłych oraz dla dzieci, a
            modernistyczne zabytki odzyskują dawny blask. Gdynia to również
            wydarzenia kulturalne znane w Polsce oraz na świecie. Podczas
            Open’er Festival posłuchasz największych artystów światowej muzyki,
            a w czasie Festiwalu Polskich Filmów Fabularnych zobaczysz gwiazdy
            polskiego kina. Wydarzeń kulturalnych oraz atrakcji jest więcej.
          </h1>
        </Fade>{" "}
        <Fade bottom>
          <article className="gda-box">
            <img src={skw} alt="gdynia"></img>
            <aside>
              <h1>Skwer Kościuszki i Molo Południowe w Gdyni</h1>

              <p>
                Najbardziej znanym miejscem w Gdyni bez wątpienia jest Skwer
                Kościuszki. Większość turystów nie wyobraża sobie wizyty w
                mieście bez przechadzki nadmorskim deptakiem pełnym restauracji,
                kafejek i straganów. Na Skwerze oraz jego przedłużeniu – Molu
                Południowym – można miło spędzić czas, po prostu spacerując lub
                siedząc, sporo tu jednak atrakcji, które dodatkowo mogą
                uatrakcyjnić pobyt.
              </p>
            </aside>
          </article>
        </Fade>{" "}
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>Statek-muzeum „Dar Pomorza”</h1>
              <h3>
                Wybudowany w 1909 roku trzymasztowy żaglowiec szkolny dopiero od
                1929 roku należy do Polski. Od tego momentu przepłynął pół
                miliona mil morskich, co można porównać do 25 rejsów dookoła
                Ziemi. W tym też czasie wyszkolił ponad 13 tys. studentów.
              </h3>
              <p>
                W 1983 roku otwarto w nim muzeum, które jest jednym z symboli
                Gdyni. Przechadzając się po pokładzie oraz poszczególnych
                kajutach i maszynowni, poznaje się fascynującą historię żaglowca
                oraz ludzi, którzy spędzili na morzu kawał życia.
              </p>
            </aside>
            <img src={dar} alt="gdynia"></img>
          </article>{" "}
        </Fade>{" "}
        <Fade bottom>
          <article className="gda-box">
            <img src={orp} alt="gdynia"></img>
            <aside>
              <h1>Okręt-muzeum ORP „Błyskawica”</h1>
              <h3>
                Fantastyczny okręt o niesamowitej historii. ORP Błyskawica jest
                najstarszym na świecie unoszącym się na wodzie niszczycielem
                oraz jedynym bojowym okrętem alianckim, który aktywnie
                uczestniczył w działaniach przez cały okres II wojny światowej.
              </h3>
              <p>
                W 1976 roku okręt przekształcono w muzeum. Dziś wędrując po jego
                pokładach, można poznać historię Błyskawicy oraz jemu podobnych.
                Choć minęło wiele lat od czasu ostatniego rejsu, w maszynowni
                wciąż czuć zapach mazutu.{" "}
              </p>
            </aside>
          </article>{" "}
        </Fade>{" "}
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>Muzeum Marynarki Wojennej w Gdyni</h1>
              <h3>
                W muzeum poznaje się historię oręża polskiego na morzu oraz
                bogaty zbiór broni z czasów II wojny światowej i okresu
                powojennego.
              </h3>
              <p>
                Szczególnie część zewnętrzna ekspozycji jest bardzo bogata i
                zainteresuje nie tylko pasjonatów, ale całe rodziny. Wśród
                eksponatów jest sprzęt bojowy, będący w użyciu od XVII wieku po
                czasy współczesne.{" "}
              </p>
            </aside>
            <img src={muz} alt="gdynia"></img>
          </article>{" "}
        </Fade>{" "}
        <Fade bottom>
          <article className="gda-box">
            <img src={kamien} alt="gdynia"></img>
            <aside>
              <h1>Kamienna Góra</h1>

              <p>
                Kamienna Góra to usytuowane w centrum Gdyni wzgórze, z którego
                roztacza się malowniczy widok na port oraz Skwer Kościuszki.
                Piękna panorama nie jest jedyną atrakcją tego miejsca. Na szczyt
                wzgórza można dojść schodami lub wjechać wygodnie darmową
                8-osobową kolejką.{" "}
              </p>
            </aside>
          </article>{" "}
        </Fade>{" "}
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>Plaża w Gdyni</h1>
              <h3>
                Gdynia, ma wiele kilometrów piaszczystych plaż. Którą plażę
                szczególnie można polecić? Wiele osób uważa, że najlepsza
                gdyńska plaża znajduje się niedaleko Skweru Kościuszki, tuż za
                mariną. Nie należy ona może do największych, ale to nadaje jej
                kameralny urok.
              </h3>
              <p>
                Szeroka, czysta, piaszczysta plaża z łagodnym zejściem do morza
                oraz cieplejszą wodą niż w innych trójmiejskich kąpieliskach
                przyciąga sporo osób, lecz każdy znajdzie miejsce dla siebie.
                Plaża jest strzeżona, znajduje się na niej ogromny plac zabaw na
                piasku dla dzieci, boiska do siatkówki plażowej oraz zaplecze
                sanitarne{" "}
              </p>
            </aside>
            <img src={plaza} alt="gdynia"></img>
          </article>{" "}
        </Fade>{" "}
        <Fade bottom>
          <article className="gda-box">
            <img src={emig} alt="gdynia"></img>
            <aside>
              <h1>Muzeum Emigracji w Gdyni</h1>

              <p>
                Muzeum Emigracji w Gdyni to jedno z najciekawszych muzeów w
                Polsce. We wciągający sposób opowiada o historii polskich
                emigrantów. Pełna jest ona emocji i wzruszeń, potęgowanych przez
                nowoczesną multimedialną oprawę. Muzeum, jako pierwsze na
                terenie Polski, gromadzi i prezentuje zbiory dotyczące polskiej
                emigracji, a także osiągnięć naszych rodaków za granicą.{" "}
              </p>
            </aside>
          </article>{" "}
        </Fade>{" "}
        <Fade bottom>
          <article className="gda-box">
            <aside>
              <h1>Molo w Orłowie</h1>
              <p>
                Osoby szukające spokoju powinny udać się do graniczącej z
                Sopotem gdyńskiej dzielnicy Orłowo. Jedną z jej atrakcji jest
                piękne drewniane molo, którego historia sięga I wojny światowej.
                W ramach konkurowania z Sopotem drewniany pomost zaczęto
                rozbudowywać, by w latach 30. XX wieku molo osiągnęło długość
                430 m. Niestety, większość mola uległa zniszczeniu podczas
                sztormu w 1949 roku. Po tym wydarzeniu zdecydowano, że będzie
                miało długość 180 m.{" "}
              </p>
            </aside>
            <img src={molo} alt="gdynia"></img>
          </article>{" "}
        </Fade>{" "}
        <Fade bottom>
          <article className="gda-box">
            <img src={klif} alt="gdynia"></img>
            <aside>
              <h1>Klif Orłowski i Kępa Redłowska</h1>
              <p>
                Miejscem, które każdy turysta odwiedzający Gdynię powinien
                zobaczyć, jest Klif Orłowski. Stanowi on stromy brzeg morski
                Kępy Redłowskiej i rozciąga na długość 650 m. Szczególnie spacer
                od strony mola w Orłowie na długo pozostanie w pamięci. Klif
                prezentuje się wyjątkowo zarówno z poziomu morza, jak i z samego
                szczytu, a widok na Zatokę Gdańską jest jedyny w swoim rodzaju.{" "}
              </p>{" "}
            </aside>
          </article>{" "}
        </Fade>
      </article>{" "}
      <Fade bottom>
      <StayTuned name="" email="" id="" initialState=""
 />      </Fade>{" "}
      <Fade bottom>
        <Footer />{" "}
      </Fade>
    </>
  );
};

export default Gdynia;
