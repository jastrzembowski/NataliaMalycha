import React from "react";
import Footer from "../footer/Footer";
import "./contact.scss";
import { doc, getFirestore, setDoc } from "@firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  lastName: string;
  phone: string;
  message: string;
  allow: boolean;
  email: string;
  id: string;
  initialState: Object;
}
interface MyState {
  name: string;
  lastName: string;
  phone: string;
  message: string;
  allow: boolean;
  email: string;
  id: string;
}

class Contact extends React.Component<Props, MyState> {
  initialState: {
    name: string;
    lastName: string;
    phone: string;
    message: string;
    allow: boolean;
    email: string;
    id: string;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      phone: "",
      message: "",
      email: "",
      allow: false,
      id: uuidv4(),
    };
    this.initialState = {
      name: "",
      lastName: "",
      phone: "",
      message: "",
      email: "",
      allow: false,
      id: uuidv4(),
    };
  }

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value,
    } as unknown as { [K in keyof MyState]: MyState[K] });
  };

  handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as unknown as { [K in keyof MyState]: MyState[K] });
  };

  handleFormReset = () => {
    this.setState(this.initialState);
  };

  checkChange = () => {
    if (this.state.allow === false) {
      this.setState(() => ({
        allow: true,
      }));
    } else {
      this.setState(() => ({
        allow: false,
      }));
    }
  };
  db = getFirestore();
  addToFirestore = async (event: any) => {
    event.preventDefault();
    await setDoc(doc(this.db, "messages", this.state.id), this.state).then(
      this.handleFormReset
    );
  };
  render() {
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

              <input
                className="name"
                type="text"
                name="name"
                onChange={this.handleOnChange}
                value={this.state.name}
                required
                placeholder="IMIĘ"
              ></input>
              <input
                className="lastname"
                type="text"
                name="lastName"
                onChange={this.handleOnChange}
                value={this.state.lastName}
                required
                placeholder="NAZWISKO"
              ></input>
              <input
                className="email"
                type="text"
                name="email"
                onChange={this.handleOnChange}
                value={this.state.email}
                required
                placeholder="EMAIL"
              ></input>
              <input
                className="phone"
                type="number"
                name="phone"
                onChange={this.handleOnChange}
                value={this.state.phone}
                placeholder="NUMER TELEFONU"
              ></input>
              <textarea
                className="textbox"
                name="message"
                onChange={this.handleTextChange}
                value={this.state.message}
                required
                placeholder="WIADOMOŚĆ"
              ></textarea>
              <div className="submit">
                <aside>
                  <input type="checkbox" onChange={this.checkChange}></input>
                  <span>Akceptuję zasady <Link to="/polityka-prywatnosci"> polityki prywatności </Link></span>
                </aside>
                <button
                  type="submit"
                  disabled={this.state.allow === false}
                  onClick={this.addToFirestore}
                >
                  Wyślij
                </button>
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
  }
}
export default Contact;
