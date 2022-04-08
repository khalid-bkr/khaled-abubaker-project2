import React from "react";
import Cell from "./Cell";

const Row = (props) => {
  const createCells = () => {
    const cells = [];
    for (let index = 0; index < props.data.length; index++) {
      cells.push(
        <Cell
          char={props.data[index]}
          currentAttempt={props.currentAttempt}
          charPosition={index}
        />
      );
    }
    return cells;
  };
  return <div className="row">{createCells()}</div>;
};

export default Row;
