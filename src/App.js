import "./styles.css";
import React, { Fragment } from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return <h1>Soy el main</h1>;
  }
}

class Aside extends React.Component {
  render() {
    return <h1>Soy el aside</h1>;
  }
}

class Footer extends React.Component {
  render() {
    return <h1>Soy el Footer</h1>;
  }
}

class Cuerpo extends React.Component {
  render() {
    return (
      <Fragment>
        <Main />,
        <Aside />
      </Fragment>
    );
  }
}

export default function App() {
  return (
    <div class="App">
      <Navbar />,
      <Cuerpo />,
      <Footer />
    </div>
  );
}
