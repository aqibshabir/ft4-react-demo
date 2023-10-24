import React, { Component } from "react";
import Link from "./Link";

class Nav extends Component {
  state = {};
  render() {
    return (
      <>
        <Link text={"Home "} />
        <Link text={"About "} />
        <Link text={"Contact "} />
      </>
    );
  }
}

export default Nav;
