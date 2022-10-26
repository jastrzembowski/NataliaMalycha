import React from "react";
import Slider from "react-slick";
import fin from "../../../images/service/fin.jpg";
import kan from "../../../images/service/kan.jpg";
import met from "../../../images/service/met.jpg";
import nat1 from "../../../images/service/nat1.jpg";
import nat8 from "../../../images/service/nat8.jpg";

import prep from "../../../images/service/prep.jpg";
import spot from "../../../images/service/spot.jpg";
import ser1 from "../../../images/service/ser1.jpg";
import ser2 from "../../../images/service/ser2.jpg";
import ser3 from "../../../images/service/ser3.jpg";
import ser4 from "../../../images/service/ser4.jpg";
import Footer from "../../footer/Footer";
import StayTuned from "../../utils/StayTuned";

const Sell = () => {
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
            <h1>SPRZEDAŻ NIERUCHOMOŚCI</h1>
            <img src={ser1} alt="slider-img1" />
          </div>{" "}
          <div className="service-img-box">
            <h1>SPRZEDAŻ NIERUCHOMOŚCI</h1>
            <img src={ser2} alt="slider-img2" />
          </div>{" "}
          <div className="service-img-box">
            <h1>SPRZEDAŻ NIERUCHOMOŚCI</h1>
            <img src={ser3} alt="slider-img3" />
          </div>{" "}
          <div className="service-img-box">
            <h1>SPRZEDAŻ NIERUCHOMOŚCI</h1>
            <img src={ser4} alt="slider-img4" />
          </div>
        </Slider>
      </header>
      <div className="buy-text-box">
        <h2>Spotkajmy się, napijmy się wyśmienitej kawy..</h2>
        <div className="buy-text">
          <article>
            <h3>Spotkanie</h3>
            <p>
              Spotkajmy się, omówimy szczegóły współpracy i indywidualnie
              ustalimy warunki umowy. Porozmawiamy o Twoich potrzebach i
              oczekiwaniach, dlatego tak ważne jest, aby przed rozpoczęciem
              procesu sprzedaży spotkać się i porozmawiać. Na sukcesy przekłada
              się wiele czynników, a w tym znajomość oczekiwań moich Klientów.
              Na spotkaniu porozmawiamy o kluczowym czynniku jaki ma wpływ na
              sprawną sprzedaż mianowicie skupimy się na właściwym przygotowaniu
              wyceny nieruchomości, pomogę Ci w tym!
            </p>
          </article>
          <img src={spot} alt="buy1"></img>
        </div>
        <div className="buy-text-2">
          <img src={prep} alt="buy1"></img>
          <article>
            <h3>Przygotowanie nieruchomości</h3>
            <p>
              Wiem jak działa rynek i na co należy zwrócić uwagę, by sprzedać
              Twoją nieruchomości. Właśnie dlatego w pierwszej kolejności
              przygotuję Twoją nieruchomość w taki sposób, by prezentowała się
              ona atrakcyjnie z jak najlepszej strony. Potwierdzeniem tego są
              aktualne oferty, które warto obejrzeć. Proces rozpocznę od
              obejrzenia i ewentualnego odświeżenia Twojej nieruchomości, a
              następnie przejdziemy do etapu „Home Stagingu” – czyli upiększenia
              wystroju wnętrz za pomocą odpowiednio dobranych dodatków.
              Następnie nasz profesjonalny fotograf wykona zdjęcia, zadba między
              innymi o odpowiednie oświetlenie, zaakcentuje przestronność Twojej
              nieruchomości (która, jak wiemy z naszego doświadczenia, jest
              bardzo ważna dla potencjalnych nabywców) i sprawi, że Twoja oferta
              wyróżni się na tle ogłoszeń konkurencji. Dzięki temu sprzedaż
              Twojego mieszkania przebiegnie bardzo szybko i zakończy się
              sukcesem.
            </p>
          </article>
        </div>
        <div className="buy-text">
          <article>
            <h3>Wybór metod prezentacji</h3>
            <p>
              Przedstawię Ci najskuteczniejsze metody prezentacji Twojej
              nieruchomości, a nawet więcej! Profesjonalna sesja zdjęciowa i
              nietuzinkowy opis oferty to dopiero początek powiązanych ze sobą
              działań marketingowych. Co mogę Ci zaproponować? Spacery 3D,
              dzięki którym potencjalny nabywca może lepiej poznać nieruchomość
              i poczuć się jak u siebie. W przypadku domów czy działek proponuję
              również zdjęcia z drona, które ukazują w całej okazałości
              lokalizację. Na bieżąco śledzę najnowsze trendy nowości
              technologicznych (po to, aby być jeszcze skuteczniejszy). Jedną z
              nich są między innymi filmiki z nieruchomości, pozwalające w
              całości pokazać potencjał i zachęcić Kupującego do umówienia się
              na prezentację.
            </p>
          </article>
          <img src={met} alt="buy1"></img>
        </div>
        <div className="buy-text-2">
          <img src={kan} alt="buy1"></img>
          <article>
            <h3>Wybór kanałów prezentacji</h3>
            <p>
              Moja strona internetowa, strona biura z którym współpracuję
              InVillla Nieruchomości oraz prowadzone przeze mnie media
              społecznościowe, a także członkostwo w grupie zrzeszonych
              Pośredników czy na grupach poświęconym nieruchomościom. Mogę Cię
              również zapewnić że ogłoszenie z Twoją nieruchomością będzie na
              bieżąco wysoko pozycjonowane na portalach takich jak między
              innymi: otodom,morizon,olx,nieruchomości.pl itp. Oczywiście
              zlecając mi sprzedaż nieruchomości w Trójmieście nie zamykasz się
              na potencjalnych nabywców z innych biur – wręcz przeciwnie – przed
              publikacją oferta dotrze do grup zaufanych pośredników w całej
              Polsce.
            </p>
          </article>
        </div>
        <div className="buy-text">
          <article>
            <h3>Profesjonalna obsługa</h3>
            <p>
              Przez cały czas naszej współpracy będę do Twojej stałej
              dyspozycji. Odpowiem na wszystkie Twoje pytania i będę raportować
              Ci na bieżąco o postępach w sprzedaży Twojej nieruchomości oraz o
              pozycjonowaniu oferty, liczbie wyświetleń, liczbie odebranych
              telefonów i liczbie realnych kontaktów.
            </p>
          </article>
          <img src={nat8} alt="buy1"></img>
        </div>
        <div className="buy-text-2">
          <img src={nat1} alt="buy1"></img>
          <article>
            <h3>Działanie w Twoim imieniu</h3>
            <p>
              Uczestniczę w Twoim imieniu w negocjacjach dotyczących ceny,
              (finalną decyzję podejmujesz oczywiście Ty), przekazaniu
              nieruchomości przygotowując profesjonalny protokół
              zdawczo-odbiorczy czy ten dotyczący wyposażenia, ułatwiając i
              unikając tym samym jakichkolwiek sporów czy nieporozumień. To
              bardzo ważna dla Klientów pomoc. W razie potrzeby wcielę się więc
              w rolę mediatora i dołożę wszelkich starań do osiągnięcia
              porozumienia na korzystnych dla Ciebie warunkach. Zlecając mi
              sprzedaż nieruchomości zaoszczędzisz czas potrzebny na
              prezentacje, dojazdy, rozmowy, negocjacje, unikniesz stresu.
            </p>
          </article>
        </div>
        <div className="buy-text">
          <article>
            <h3>Finalizacja transakcji</h3>
            <p>
              Moja ulubiona! chodź z pewnością nie należąca do najłatwiejszych
              część całego procesu. Po podjęciu ostatecznych decyzji, zajmę się
              przygotowaniem niezbędnych dokumentów i odciążę Cię od formalności
              – w spółdzielni, wspólnocie, urzędzie miasta, urzędzie gminy,
              starostwie, ZUS-ie, urzędzie skarbowym i u notariusza. Zadbam o
              Twoje bezpieczeństwo, będę z Tobą w momencie podpisania aktu u
              notariusza, w banku oraz na przekazaniu nieruchomości.
            </p>
          </article>
          <img src={fin} alt="buy1"></img>
        </div>
        <h1 className="sell-bottom__text">
          Jeśli nadal się zastanawiasz czy jestem właściwą osobą, z którą chcesz
          współpracować, umów się na niezobowiązującą kawę..<br/> Mam nadzieję że
          lubisz kawę tak bardzo jak ja.. a i zapomniałam jeszcze wspomnieć że w
          Trójmieście znam najlepsze miejscówki, więc możesz na mnie liczyć w
          każdej kwestii.. polecajki też!
        </h1>
      </div>
      <StayTuned />
      <Footer />
    </>
  );
};

export default Sell;
