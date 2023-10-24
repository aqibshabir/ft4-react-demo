import React, { Component } from "react";
import Nav from "./Nav";

class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <Nav />
        <header>
          <h1>Welcome</h1>
          <p>This is a basic site</p>
        </header>
      </>
    );
  }
}

export default Header;
