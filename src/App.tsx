import React from 'react';
import './App.css';
import Nav from "./components/navbar/Nav";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </>
  );
}

export default App;
