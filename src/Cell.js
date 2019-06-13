import React, { Component } from "react"

class Cell extends Component {
  render() {
    return (
      <div className={`cell ${this.props.isInitial ? "initial" : ""}`}>
        {this.props.number !== 0 && this.props.number}
      </div>
    )
  }
}

export default Cell
