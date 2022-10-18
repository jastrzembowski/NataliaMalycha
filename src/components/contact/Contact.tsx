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
            <input type="text" className="lastname" placeholder="Nazwisko"></input>
            <input type="email" className="email" placeholder="Adres email"></input>
            <input type="number" className="phone" placeholder="Numer telefonu"></input>
            <textarea  className="textbox" placeholder="Wiadomość"></textarea>
            <div className="submit">
           <aside>   <input type="checkbox"></input>
              <span>Akceptuję zasady polityki prywatności</span></aside>
              <button type="submit">Wyślij</button>
            </div>
          </form>
          <aside>
            <p>Natalia Małycha</p>
            <p>Lęborska 6B</p>
            <p>Gdańsk</p>
            <p>+48 676 567 568</p>
          </aside>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default Contact;
