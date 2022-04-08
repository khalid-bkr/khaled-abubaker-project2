import React from "react";
import { useSelector } from "react-redux";

const Cell = (props) => {
  //   const grid = useSelector((state) => state.grid.value);
  const attempt = useSelector((state) => state.attempt.value);
  const colors = useSelector((state) => state.colors.value);

  const color =
    attempt.attempt > props.currentAttempt
      ? colors[props.currentAttempt][props.charPosition]
      : "";

  return (
    <div className="cell" id={color}>
      {props.char}
    </div>
  );
};

export default Cell;
