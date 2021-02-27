import React from "react";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <main>
        <table id="customer">
          <thead>
            <tr>
              <th>LP</th>
              <th>Hecho</th>
              <th>Orden</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML</td>
              <td>Visto</td>
              <td>1</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>Visto</td>
              <td>2</td>
            </tr>
            <tr>
              <td>JAVASCRIPT</td>
              <td>Visto</td>
              <td>3</td>
            </tr>
            <tr>
              <td>REACT</td>
              <td>Viendo</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </main>
    );
  }
}

export default Main;
