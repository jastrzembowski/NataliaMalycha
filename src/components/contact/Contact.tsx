import React from "react";
import Footer from "../footer/Footer";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <header className="contact-cont">
        <article className="contact-title">
          <h1>Poznajmy się!</h1>
          <p>
            Rozpocznij naszą współpracę <br />
            od krótkiej wiadomości do mnie
          </p>
        </article>
        <div className="contact-box">
          <form>
            <h1>Pozostańmy w kontakcie</h1>

            <input type="text" className="name" placeholder="Imię"></input>
            <input
              type="text"
              className="lastname"
              placeholder="Nazwisko"
            ></input>
            <input
              type="email"
              className="email"
              placeholder="Adres email"
            ></input>
            <input
              type="number"
              className="phone"
              placeholder="Numer telefonu"
            ></input>
            <textarea className="textbox" placeholder="Wiadomość"></textarea>
            <div className="submit">
              <aside>
                {" "}
                <input type="checkbox"></input>
                <span>Akceptuję zasady polityki prywatności</span>
              </aside>
              <button type="submit">Wyślij</button>
            </div>
          </form>
          <aside>
            <p>Biuro:</p>
            <p>ul. Węglowa 22 U 6</p>
            <p>81-341 Gdynia</p>
            <p>Tel: +48 787 665 881</p>
          </aside>
        </div>
        <p className="contact-info_text">
          Administratorem Państwa danych osobowych jest Natalia Malychaz
          siedzibą w Gdyni. Dane wpisane w formularzu kontaktowym będą
          przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie
          zgodnie z klauzulą informacyjną dostępną w siedzibie Administratora
          oraz na stronie internetowej.
        </p>
      </header>
      <Footer />
    </>
  );
};

export default Contact;
