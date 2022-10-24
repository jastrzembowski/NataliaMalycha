import React from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Service from "./components/service/Service";
import Rent from "./components/service/rent/Rent";
import Buy from "./components/service/buy/Buy";
import Sell from "./components/service/sell/Sell";
import ScrollToTop from "./components/utils/ScrollToTop";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Gdansk from "./components/tricity/gdansk/Gdansk";
import Sopot from "./components/tricity/sopot/Sopot";
import Gdynia from "./components/tricity/gdynia/Gdynia";
import Tricity from "./components/tricity/Tricity";

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tricity" element={<Tricity/>}/>
        <Route path="/gdansk" element={<Gdansk />} />
        <Route path="/sopot" element={<Sopot />} />
        <Route path="/gdynia" element={<Gdynia />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/sell" element={<Sell />} />
        <Route path="/service/buy" element={<Buy />} />
        <Route path="/service/rent" element={<Rent />} />
      </Routes>
    </>
  );
}

export default App;
