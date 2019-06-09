import React, { Component } from "react";

class Cell extends Component {
  render() {
    return <div className="cell">{this.props.number}</div>;
  }
}

export default Cell;
