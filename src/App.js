import React from "react";
import "./App.css";
import Cell from "./Cell";

function App() {
  return (
    <div className="App">
      <div className="board">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
}

export default App;
