import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li class="right">
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
