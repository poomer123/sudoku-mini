import React from "react";
import "./App.css";
import Cell from "./Cell";

function App() {
  return (
    <div className="App">
      <div className="board">
        <Cell number={2} />
        <Cell number={2} />
        <Cell number={2} />
        <Cell number={2} />
        <Cell number={2} />
        <Cell number={2} />
        <Cell number={2} />
        <Cell number={2} />
      </div>
    </div>
  );
}

export default App;
