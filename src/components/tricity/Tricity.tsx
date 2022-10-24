import React from "react";
import {Link} from "react-router-dom";
import "./tricity.scss";
import StayTuned from "../utils/StayTuned";
import Footer from "../footer/Footer";
import gda4 from "../../images/gdansk/gda4.jpg";
import gdy2 from "../../images/gdynia/gdy2.jpg";
import sop1 from "../../images/sopot/sop1.jpg";

const Tricity = () => {
  return (
    <>
      <header className="tri-header">
        <h1>Trójmiasto</h1>
      </header>
      <article className="service-link_box">
        <div className="bg-box">
          <h1>Znajdź swoje wymarzone miejsce</h1>
          <div className="serv-windows">
            <div className="wind-box">
              <img src={gda4} alt="box" />
              <h3>Gdańsk</h3>
              <Link to="/gdansk"> <button>Zobacz więcej</button></Link>
            </div>

            <div className="wind-box">
              <img src={gdy2} alt="box" />
              <h3>Gdynia</h3>
              <Link to="/gdynia">  <button>Zobacz więcej</button></Link>
            </div>

            <div className="wind-box">
              <img src={sop1} alt="box" />
              <h3>Sopot</h3>
              <Link to="/sopot">   <button>Zobacz więcej</button></Link>
            </div>
          </div>
        </div>
      </article>
    <StayTuned/>
      <Footer />
    </>
  );
};

export default Tricity;
