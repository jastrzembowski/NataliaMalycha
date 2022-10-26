import React from "react";
import "./buy.scss";
import Slider from "react-slick";
import kre from "../../../images/service/kre.jpg";
import dok from "../../../images/service/dok.jpg";
import spo from "../../../images/service/spo.jpg";
import neg from "../../../images/service/neg.jpg";
import nat15 from "../../../images/service/nat15.jpg";

import ser1 from "../../../images/service/ser1.jpg";
import ser2 from "../../../images/service/ser2.jpg";
import ser3 from "../../../images/service/ser3.jpg";
import ser4 from "../../../images/service/ser4.jpg";
import Footer from "../../footer/Footer";
import StayTuned from "../../utils/StayTuned";

const Buy = () => {
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
      <header className="service-header__container buy-header">
        <Slider {...settings2}>
          <div className="service-img-box">
            <h1>ZAKUP NIERUCHOMOŚCI</h1>
            <img src={ser1} alt="slider-img1" />
          </div>{" "}
          <div className="service-img-box">
            <h1>ZAKUP NIERUCHOMOŚCI</h1>
            <img src={ser2} alt="slider-img2" />
          </div>{" "}
          <div className="service-img-box">
            <h1>ZAKUP NIERUCHOMOŚCI</h1>
            <img src={ser3} alt="slider-img3" />
          </div>{" "}
          <div className="service-img-box">
            <h1>ZAKUP NIERUCHOMOŚCI</h1>
            <img src={ser4} alt="slider-img4" />
          </div>
        </Slider>
      </header>
      <div className="buy-text-box">
        <h2>Spotkajmy się, napijmy się wyśmienitej kawy..</h2>
        <div className="buy-text">
          <article>
            <h3>Przedstawienie ofert i prezentacja nieruchomości</h3>
            <p>
              Wszystko zaczyna się od spotkania i szczegółowego omówienia Twoich
              potrzeb oraz marzeń. Zakup nieruchomości to poważna decyzja,
              dlatego tak ważne jest aby zaufać ekspertom, którzy doskonale
              znają rynek, podczas spotkania omówimy sobie co jest dla Ciebie
              ważne, co najważniejsze, a co będzie miłym dodatkiem. Dzięki
              wielkości i zróżnicowaniu oferowanych przez biuro Invilla
              Nieruchomości, z którym współpracuję ofert (na wyłączność)
              mieszkań, apartamentów i domów, ale także dlatego, że
              współpracujemy z zaufanymi przedstawicielami. Dzięki pracy ze mną
              podczas poszukiwań nieruchomości przede wszystkim zaoszczędzisz
              czas. Prezentacje wybrane przez Ciebie nieruchomości przygotuję w
              wybranych przez Ciebie terminach i zaprezentuje Ci wyłącznie
              rzetelne oraz sprawdzone oferty.
            </p>
          </article>
          <img src={spo} alt="buy1"></img>
        </div>
        <div className="buy-text-2">
          <img src={neg} alt="buy1"></img>
          <article>
            <h3>Proces negocjacji</h3>
            <p>
              Pracując ze mną jestem do Twojej dyspozycji – będę z Tobą podczas
              negocjacji ceny, szczegółów dotyczących przekazania nieruchomości,
              sposobów i terminów płatności oraz wyposażenia. Znamy się na
              kwestiach związanych z kupnem nieruchomości w Trójmieście, pomogę
              podjąć decyzję, sprawdzę ewentualną stopę zwrotu z danej
              inwestycji, zadbam o to, aby ustalone warunki były dla Ciebie jak
              najbardziej korzystne.
            </p>
          </article>
        </div>
        <div className="buy-text">
          <article>
            <h3>Przygotowanie dokumentów i formalności</h3>
            <p>
              Sprawdzę nieruchomość od strony prawnej, tak aby zakup był
              bezpieczny. Pomogę Ci również po tym, gdy podejmiesz już decyzję
              zakupową – zbiorę wszystkie niezbędne dokumenty i odciążę Cię z
              formalności, które jak zapewne wiesz, bywają uciążliwe. Odwiedzę
              za Ciebie spółdzielnię, wspólnotę, urząd miasta, urząd gminy,
              starostwo, ZUS, urząd skarbowy oraz notariusza. Będę z Tobą u
              notariusza w celu podpisania aktu, w banku, czy w dniu przekazania
              nieruchomości. Wiem, na jakie szczegóły warto zwrócić w takich
              sytuacjach uwagę i sprawię, że będziesz czuć się bezpiecznie. Cały
              proces kupna mieszkań z rynku wtórnego w Trójmieście nie ma dla
              mnie tajemnic – możesz więc zaufać mi w tej kwestii.
            </p>
          </article>
          <img src={dok} alt="buy1"></img>
        </div>
        <div className="buy-text-2">
          <img src={kre} alt="buy1"></img>
          <article>
            <h3>Kredyt na zakup i ubezpieczenie nieruchomości</h3>
            <p>
              Współpracuję z niezależnymi i zaufanymi doradcami finansowymi,
              którzy znajdą dla Ciebie kredyt na najlepszych warunkach, a Ty
              oszczędzisz czas i wybierzesz najkorzystniejsze warunki. Pomogę Ci
              w ubezpieczeniu Twojego nowego mieszkania, apartamentu czy domu,
              ponieważ wiem, jak ważne jest bezpieczeństwo. Znam świetnego
              brokera.
            </p>
          </article>
        </div>
        <div className="buy-text">
          <article>
            <h3>Pomoc po finalizacji transakcji</h3>
            <p>
              W Twoim imieniu podpiszę umowę na dostarczanie mediów do
              nieruchomości (gazu, prądu, wody, Internetu i telewizji kablowej
              bądź satelitarnej), pomogę złożyć wnioski w sądzie
              wieczystoksięgowym celem wykreślenia hipoteki, jeśli taka ciążyła
              na nieruchomości wcześniej, oraz zgłoszę Cię jako nowego nabywcę w
              spółdzielni lub wspólnocie oraz w urzędzie miasta, lub urzędzie
              gminy w celu ustalenia podatku od nieruchomości.
            </p>
          </article>
          <img src={nat15} alt="buy1"></img>
        </div>
        <h1>Zapraszam do współpracy</h1>
      </div>
                <StayTuned/>
      <Footer />
    </>
  );
};

export default Buy;
