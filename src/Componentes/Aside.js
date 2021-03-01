import React from "react";
import "./Aside.scss";

class Aside extends React.Component {
  render() {
    return (
      <aside>
        <div class="container">
          <h2>Formulario: </h2>
          <form action="">
            <div class="row">
              <div class="col-25">
                <label for="fname">Nombre: </label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre.."
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="lname">Apellido: </label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  placeholder="Tu apellido.."
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="edad">Edad: </label>
              </div>
              <div class="col-75">
                <input
                  type="number"
                  id="edad"
                  name="edad"
                  placeholder="Tu edad.."
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="country">Sexo: </label>
              </div>
              <div class="col-75">
                <select id="country" name="pais">
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="subject">Texto: </label>
              </div>
              <div class="col-75">
                <textarea
                  id="subject"
                  name="texto"
                  placeholder="Escribe tu Texto.."
                ></textarea>
              </div>
            </div>
            <div class="row">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </aside>
    );
  }
}

export default Aside;
