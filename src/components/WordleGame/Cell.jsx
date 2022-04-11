import React from "react";
import { useSelector } from "react-redux";

const Cell = (props) => {
  const attempt = useSelector((state) => state.attempt.value);
  const colors = useSelector((state) => state.colors.value);

  const color =
    attempt.attempt > props.currentAttempt
      ? colors[props.currentAttempt][props.charPosition]
      : "";

  return (
    <div className="cell-wordle" id={color}>
      {props.char}
    </div>
  );
};

export default Cell;
