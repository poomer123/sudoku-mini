import React from "react";
import "./App.css";
import Cell from "./Cell";

function App() {
  return (
    <div className="App">
      <div className="board">
        <Cell isInitial />
        <Cell />
        <Cell />
        <Cell />
        <Cell isInitial />
        <Cell />
        <Cell />
        <Cell isInitial />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell isInitial />
      </div>
    </div>
  );
}

export default App;
