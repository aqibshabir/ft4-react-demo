import React, { Component } from "react";
import Counter from "../counter/Counter";

class Aside extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>Counter:</h2>
        <Counter />
      </>
    );
  }
}

export default Aside;
