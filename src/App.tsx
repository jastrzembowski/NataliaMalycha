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


function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/> }/>
        <Route path="/service" element={<Service />} />
        <Route path="/service/sell" element={<Sell />} />
        <Route path="/service/buy" element={<Buy />} />
        <Route path="/service/rent" element={<Rent />} />
      </Routes>
    </>
  );
}

export default App;
