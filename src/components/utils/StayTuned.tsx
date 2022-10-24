import React from "react";
import "./staytuned.scss";

const StayTuned = () => {
  return (
    <div className="stay-tuned__container">
    <div className="stay-tuned__box">
      <h3>Pozostańmy w kontakcie</h3>
      <form>
        <input type="text" placeholder="IMIĘ"></input>
        <input type="email" placeholder="EMAIL"></input>
        <button type="submit">Zapisz</button>
      </form>
      </div>
      <p>
        Administratorem Państwa danych osobowych jest Natalia Malychaz siedzibą
        w Gdyni. Dane wpisane w formularzu kontaktowym będą przetwarzane w celu
        udzielenia odpowiedzi na przesłane zapytanie zgodnie z klauzulą
        informacyjną dostępną w siedzibie Administratora oraz na stronie
        internetowej.
      </p>
    </div>
  );
};

export default StayTuned;
