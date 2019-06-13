import React, { Component } from "react"
import Cell from "./Cell"

class Board extends Component {
    state = {
        board: [
            [1, 2, 3, 4],
            [3, 4, 0, 0],
            [2, 0, 4, 0],
            [4, 0, 0, 2]
        ],
        initial: [
            [true, true, true, true],
            [true, true, false, false],
            [true, false, true, false],
            [true, false, false, true]
        ]
    }
    render() {
        return (
            <div className="board">
                {
                    this.state.board.map((row, i) => (
                        row.map((number, j) => (
                            <Cell
                                key={`cell-${i}-${j}`}
                                number={number}
                                isInitial={this.state.initial[i][j]}
                            />
                        ))
                    ))

                }
            </div>
        )
    }
}

export default Board