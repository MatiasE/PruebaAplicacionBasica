import "./App.css";

import React from "react";

import Navbar from "./Componentes/Navbar.js";
import Cuerpo from "./Componentes/Cuerpo.js";
import Footer from "./Componentes/Footer.js";

export default function App() {
  return (
    <div className="App">
      <Navbar />,
      <Cuerpo />,
      <Footer />
    </div>
  );
}
