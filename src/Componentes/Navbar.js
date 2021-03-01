import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="#home">Principal</a>
          </li>
          <li>
            <a href="#news">Noticias</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li className="right">
            <a href="#about">Sobre Mi</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
