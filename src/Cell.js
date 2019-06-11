import React, { Component } from "react";

class Cell extends Component {
  state = {
    number: 0
  };
  render() {
    return (
      <div
        className="cell"
        onClick={e => {
          this.setState({
            number: (this.state.number + 1) % 5
          });
        }}
      >
        {this.state.number !== 0 && this.state.number}
      </div>
    );
  }
}

export default Cell;
