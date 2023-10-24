import React, { Component } from "react";

class Link extends Component {
  state = {};
  render() {
    return (
      <>
        <a href="#">{this.props.text}</a>
      </>
    );
  }
}

export default Link;
