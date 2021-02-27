import React from "react";
import Main from "./Main.js";
import Aside from "./Aside.js";
import "./Cuerpo.css";

class Cuerpo extends React.Component {
  render() {
    return (
      <div className="Cuerpo">
        <Main />
        <Aside />
      </div>
    );
  }
}

export default Cuerpo;
