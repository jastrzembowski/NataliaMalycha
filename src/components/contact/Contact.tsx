import React from "react";
import Footer from "../footer/Footer";
import "./contact.scss";
import { doc, getFirestore, setDoc } from "@firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { Link } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";

interface IProps extends WithTranslation {
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

class Contact extends React.Component<IProps, MyState> {
  initialState: {
    name: string;
    lastName: string;
    phone: string;
    message: string;
    allow: boolean;
    email: string;
    id: string;
  };
  constructor(props: IProps) {
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
            <h1>{this.props.t("con-tit")}</h1>
            <p>
              {this.props.t("con-text1")} <br />
              {this.props.t("con-text2")}
            </p>
          </article>
          <div className="contact-box">
            <form>
              <h1> {this.props.t("con-subtitle")}</h1>

              <input
                className="name"
                type="text"
                name="name"
                onChange={this.handleOnChange}
                value={this.state.name}
                required
                placeholder={this.props.t("name")}
              ></input>
              <input
                className="lastname"
                type="text"
                name="lastName"
                onChange={this.handleOnChange}
                value={this.state.lastName}
                required
                placeholder={this.props.t("lastname")}
              ></input>
              <input
                className="email"
                type="text"
                name="email"
                onChange={this.handleOnChange}
                value={this.state.email}
                required
                placeholder={this.props.t("email")}
              ></input>
              <input
                className="phone"
                type="number"
                name="phone"
                onChange={this.handleOnChange}
                value={this.state.phone}
                placeholder={this.props.t("phone")}
              ></input>
              <textarea
                className="textbox"
                name="message"
                onChange={this.handleTextChange}
                value={this.state.message}
                required
                placeholder={this.props.t("message")}
              ></textarea>
              <div className="submit">
                <aside>
                  <input type="checkbox" onChange={this.checkChange}></input>
                  <span>
                    {this.props.t("accept")}
                    <Link to="/polityka-prywatnosci">
                      {this.props.t("acc-priv")}
                    </Link>
                  </span>
                </aside>
                <button
                  type="submit"
                  disabled={this.state.allow === false}
                  onClick={this.addToFirestore}
                >
                  {this.props.t("send")}
                </button>
              </div>
            </form>
            <aside>
              <p>{this.props.t("office")}</p>
              <p>{this.props.t("off-address")}</p>
              <p>81-341 Gdynia</p>
              <p>+48 787 665 881</p>
            </aside>
          </div>
          <p className="contact-info_text">{this.props.t("administr")}</p>
        </header>
        <Footer />
      </>
    );
  }
}
export default withTranslation()(Contact);
