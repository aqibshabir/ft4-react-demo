import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Aside from "./components/Aside";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Aside />
        <Footer />
      </>
    );
  }
}

export default App;
