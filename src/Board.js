import React, { Component } from "react"
import Cell from "./Cell"

class Board extends Component {
    state = {
        board: [
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4]
        ]
    }
    render() {
        return (
            <div className="board">
                {
                    this.state.board.map((row, i) => (
                        row.map((number, j) => (
                            <Cell key={`cell-${i}-${j}`} number={number} />
                        ))
                    ))

                }
            </div>
        )
    }
}

export default Board