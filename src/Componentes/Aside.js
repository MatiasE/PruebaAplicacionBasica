import React from "react";
import "./Aside.scss";

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      errormessage: "",
      description: "El contenido de un textarea va dentro del estado.",
      sexo: "Masculino"
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let texto = event.target.text;
    let sex = event.target.value;
    let err = "";
    if (nam === "age") {
      if (val != "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
    this.setState({ description: texto });
    this.setState({ sexo: sex });
  };
  render() {
    return (
      <aside>
        <h2>Ingrese sus Datos:</h2>
        <form>
          <h1>
            Hello {this.state.username}, edad {this.state.age}, texto{" "}
            {this.state.text}, sexo {this.state.sexo}.
          </h1>
          <p>Enter your name:</p>
          <input type="text" name="username" onChange={this.myChangeHandler} />
          <p>Enter your age:</p>
          <input type="text" name="age" onChange={this.myChangeHandler} />
          <p>Ingresa un texto:</p>
          <input type="textarea" name="text" onChange={this.myChangeHandler} />
          <p>Selecciona Sexo:</p>
          <select value={this.state.value} onChange={this.myChangeHandler}>
            <option value="Masculino" name="sexo" defaultValue>
              Masculino
            </option>
            <option value="Femenino" name="sexo">
              Femenino
            </option>
          </select>
          <br />
          {this.state.errormessage}
          <br />
          <input type="submit" value="Enviar" />
        </form>
      </aside>
    );
  }
}

export default Aside;
