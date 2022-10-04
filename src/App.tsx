import React from 'react';
import './App.css';
import Nav from "./components/navbar/Nav";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import Service from './components/service/Service';


function App() {
  return (
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service/>}/>

    </Routes>
   </>
  );
}

export default App;
