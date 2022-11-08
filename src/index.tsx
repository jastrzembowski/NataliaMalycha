import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { AuthProvider } from "./contexts/AuthContext";
import ScrollToTop from "./components/utils/ScrollToTop";
import Nav from "./components/navbar/Nav";
import Rout from "./Routes";
import "./App.css";
import "./i18n"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop/>
      <Nav />
        <Rout/>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
