import React from "react";
import "./staytuned.scss";
import { doc, getFirestore, setDoc } from "@firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { withTranslation, WithTranslation } from 'react-i18next';

interface Props extends WithTranslation{
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
          <h3>{this.props.t('stay-tuned')}</h3>
          <form>
            <input
              type="text"
              name="name"
              onChange={this.handleOnChange}
              value={this.state.name}
              required
              placeholder={this.props.t('name')}
            ></input>
            <input
              type="email"
              name="email"
              onChange={this.handleOnChange}
              value={this.state.email}
              required
              placeholder={this.props.t('email')}
            ></input>
            <button type="submit" onClick={this.addToFirestore}>
            {this.props.t('save')}            </button>
          </form>
        </div>
        <p>
        {this.props.t('administr')} 
        </p>
      </div>
    );
  }
}



export default  withTranslation()(StayTuned);
