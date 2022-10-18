import React from "react";
import "./gdansk.scss";
import gda1 from "../../../images/gdansk/gda1.jpg";
import gda2 from "../../../images/gdansk/gda2.jpg";
import gda3 from "../../../images/gdansk/gda3.jpg";
import gda4 from "../../../images/gdansk/gda4.jpg";
import gda5 from "../../../images/gdansk/gda5.jpg";
import gda6 from "../../../images/gdansk/gda6.jpg";
import StayTuned from "../../utils/StayTuned";
import Footer from "../../footer/Footer";

const Gdansk = () => {
  return (
    <>
      <header className="gda-header">
        <h1>Gdańsk</h1>
        <h3>Miasto wolności i Solidarności</h3>
      </header>
      <article className="gda-about">
        <article className="gda-about__head">
          <h1>Najpopularniejsze atrakcje Gdańska</h1>
          <p>
            Przedstawię Ci kilka pomysłów na spędzenie czasu w Gdańsku. Oto te
            które moim zdaniem zasługują na uwagę...
          </p>
        </article>

        <article className="gda-box">
          <img src={gda3} alt="gdansk"></img>
          <aside>
            <h1>Długi Targ i Ulica Długa</h1>
            <h3>
              Rozpoczynająca się przy Złotej Bramie ulica Długa, wraz z Długim
              Targiem tworzą tak zwaną Drogę Królewską, która stanowi główną
              trasę turystyczną Gdańska.
            </h3>
            <p>
              Długi Targ to zdecydowanie najpopularniejsze miejsce spotkań
              mieszkańców i turystów oraz serce miasta. Plac położony w gdańskim
              Śródmieściu, dawniej był po prostu traktem kupieckim. To tutaj
              znajduje się m.in. Ratusz Miasta, Fontanna Neptuna i Brama
              Zielona, zza której możemy podziwiać Motławę
            </p>
          </aside>
        </article>
        <article className="gda-box">
          <aside>
            <h1>Fontanna Neptuna w Gdańsku</h1>
            <p>
              Zabytkowa fontanna w sercu Długiego Targu, usytuowana tuż przed
              wejściem do Dworu Artusa, to prawdziwa wizytówka miasta. Powstała
              ona z inicjatywy burmistrza Bartłomieja Schachmanna i rady
              miejskiej, a w 1615 r. zaprojektował ją Abraham van den Blocke,
              który był również projektantem gdańskiej Złotej Bramy. Fontanna
              uruchomiona została w 1633 r., a rok później dodano do niej
              ozdobną kratę, na której umieszczono herby Gdańska i polskie orły.
            </p>
          </aside>
          <img src={gda4} alt="gdansk"></img>
        </article>
        <article className="gda-box">
          <img src={gda5} alt="gdansk"></img>
          <aside>
            <h1>
              Bazylika konkatedralna Wniebowzięcia Najświętszej Maryi Panny
            </h1>
            <p>
              Konkatedralna Bazylika Mariacka – historyczna fara Głównego
              Miasta, nazywana jest często “koroną Gdańska””. Szczyci się
              tytułem największej europejskiej świątyni wybudowanej z cegły.
              Kamień węgielny (czyli ten, który rozpoczyna budowlę) pod obecną
              świątynię został położony w uroczystość Zwiastowania Pańskiego w
              1343 roku. Co ciekawe, świątynia budowana była etapami aż przez
              159 lat! Dopiero w lipcu 1502 roku, mistrz Henryk Hetzel położył
              ostatnią cegłę. Bazylika Mariacka rozciąga się na długość aż 105,2
              m., a na 26 wolno-stojących filarach wspiera się jej wspaniałe
              sklepienie gwiaździste i kryształowe.
            </p>
          </aside>
        </article>
        <article className="gda-box">
          <aside>
            <h1>Muzeum II Wojny Światowej</h1>
            <h3>
              Jeśli jeszcze zastanawiasz się co zobaczyć w Gdańsku, odpowiedź
              jest prosta. Odwiedź muzeum! Zależnie od tego co Cię interesuje:
              może być to Muzeum Narodowe, Muzeum Bursztynu czy II Wojny
              Światowej. Te ostatnie wzbudza wiele emocji i moim zdaniem jest
              szczególnie warte odwiedzenia.
            </h3>
            <p>
              Jest to interaktywne muzeum historyczne, otwarte na początku 2017
              roku. Gdańskie muzeum należy do grona najbardziej nowoczesnych, a
              jednocześnie najbardziej poruszających muzeów w Polsce. Znajdziemy
              tam liczne eksponaty i interesujące rekonstrukcje przedwojennych
              ulic największych polskich miast.{" "}
            </p>
          </aside>
          <img src={gda6} alt="gdansk"></img>
        </article>
        <article className="gda-box">
          <img src={gda3} alt="gdansk"></img>
          <aside>
            <h1>Ulica Mariacka – Bursztynowa Uliczka</h1>
            <p>
              Ulica Mariacka to niewątpliwie jedna z najbardziej zachwycających
              uliczek Głównego Miasta, z kompletnie zrekonstruowanymi
              przedprożami, znakomicie oddająca niepowtarzalny klimat dawnej
              zabudowy Gdańska. Charakteru ulicy dodają z pewnością również tak
              zwane Rzygacze, czy też Gargulce, służyły one odprowadzaniu
              deszczówki i przybrały formy głów zwierząt lub fantastycznych
              stworzeń. Liczne sklepy, warsztaty i stoiska oferują bursztyny w
              najróżniejszych formach, najczęściej biżuteryjnych, co stanowi
              niezwykłą atrakcję dla odwiedzających Gdańsk turystów.{" "}
            </p>
          </aside>
        </article>
        <article className="gda-box">
          <aside>
            <h1>Europejskie Centrum Solidarności</h1>
            <h3>
              Jest to nowoczesna instytucja kulturowa, która za cel postawiła
              sobie upamiętnienie jednych z najważniejszych wydarzeń w polskiej
              historii – zwycięstwa Solidarności i upadku komunizmu. Co ciekawe,
              stała wystawa przedstawia nie tylko historię Solidarności, ale
              również innych ruchów opozycyjnych Europy Środkowo-Wschodniej.
              Możemy tam znaleźć multimedialne atrakcje, materiały archiwalne, a
              także oryginalne elementy wyposażenia Stoczni Gdańskiej.{" "}
            </h3>
          </aside>
          <img src={gda4} alt="gdansk"></img>
        </article>
        <article className="gda-box">
          <img src={gda5} alt="gdansk"></img>
          <aside>
            <h1>Morze Bałtyckie</h1>
            <p>
              Być w Gdańsku i nie zobaczyć morza to jak odwiedzić Zakopane i nie
              widzieć gór. Nie zostawaj w mieście, jedź na plażę! Moja uwaga-
              najlepiej pojedź czymkolwiek, choćby autobusem. Kilka lat temu
              próbowałam dojść pieszo, bez wody, w sierpniowym upale.{" "}
            </p>{" "}
          </aside>
        </article>
        <article className="gda-box">
          <aside>
            <h1>Motława</h1>
            <h3>
              Malownicza rzeka na Starym Mieście, w której tafli odbija się
              wspaniała architektura Gdańska z niezwykłym Żurawiem na czele. To
              sprawia, że Motława z pewnością należy do czołówki najbardziej
              urokliwych polskich rzek.{" "}
            </h3>{" "}
          </aside>
          <img src={gda6} alt="gdansk"></img>
        </article>
        <article className="gda-box">
          <img src={gda5} alt="gdansk"></img>
          <aside>
            <h1>Brama Żuraw</h1>
            <p>
              Brama Żuraw jest jednocześnie dźwigiem portowym, dawniej służącym
              do przeładunku statków. Jest to jeden z najbardziej
              rozpoznawalnych i spektakularnych symboli Gdańska. Stanowi on
              atrakcję na skalę europejską.
            </p>{" "}
          </aside>
        </article>
        <article className="gda-box">
          <aside>
            <h1>Westerplatte</h1>
            <h3>
              Westerplatte - półwysep, symbol polskiej, bohaterskiej obrony we
              wrześniu 1939 roku
            </h3>{" "}
          </aside>
          <img src={gda4} alt="gdansk"></img>
        </article>
      </article>
      <StayTuned/>
      <Footer/>
    </>
  );
};

export default Gdansk;
