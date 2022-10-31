import React from "react";
import "./staytuned.scss";
import { doc, getFirestore, setDoc } from "@firebase/firestore";
import { uuidv4 } from "@firebase/util";

interface Props{
    name: string;
    email: string;
    id: string
    initialState: Object
}
interface MyState{
    name: string;
    email: string;
    id: string
}
class StayTuned extends React.Component<Props, MyState> {
  initialState: { name: string; email: string; id: string; };
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: uuidv4()
    };
    this.initialState = {
      name: "",
      email: "",
      id: uuidv4()    };
  }

  handleOnChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    } as { [K in keyof MyState]: MyState[K] })
  };
  handleFormReset = () => {
    this.setState(this.initialState);
  };

  db = getFirestore();
  addToFirestore = async (event: any) => {
    event.preventDefault();
    await setDoc(doc(this.db, "emails", this.state.id), this.state).then(
      this.handleFormReset
    );
  };
  render() {

    return (
      <div className="stay-tuned__container">
        <div className="stay-tuned__box">
          <h3>Pozostańmy w kontakcie</h3>
          <form>
            <input
              type="text"
              name="name"
              onChange={this.handleOnChange}
              value={this.state.name}
              required
              placeholder="IMIĘ"
            ></input>
            <input
              type="email"
              name="email"
              onChange={this.handleOnChange}
              value={this.state.email}
              required
              placeholder="EMAIL"
            ></input>
            <button type="submit" onClick={this.addToFirestore}>
              Zapisz
            </button>
          </form>
        </div>
        <p>
          Administratorem Państwa danych osobowych jest Natalia Malychaz
          siedzibą w Gdyni. Dane wpisane w formularzu kontaktowym będą
          przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie
          zgodnie z klauzulą informacyjną dostępną w siedzibie Administratora
          oraz na stronie internetowej.
        </p>
      </div>
    );
  }
}
export default StayTuned;
