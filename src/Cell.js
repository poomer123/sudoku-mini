import React, { Component } from "react"

class Cell extends Component {
  render() {
    return (
      <div
        className={`cell ${this.props.isInitial ? "initial" : ""}`}
        onClick={() => this.handleClick()}
      >
        {this.props.number !== 0 && this.props.number}
      </div>
    )
  }

  handleClick() {
    if (!this.props.isInitial) {
      this.props.onChange(
        (this.props.number + 1) % 5
      )
    }
  }
}

export default Cell
