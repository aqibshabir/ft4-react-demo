import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default Counter;
