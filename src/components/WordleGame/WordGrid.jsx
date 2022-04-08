import React, { useState, useCallback, useEffect } from "react";
import Row from "./Row";
import { hardWords, mediumWords, easyWords } from "./words";
import { attemptMedium, attemptEasy, attemptHard } from "./attempt";
import { useSelector, useDispatch } from "react-redux";
import { attempt } from "../../reducers/rowReducer";
import { AttemptCounter } from "../../reducers/attemptReducer";
import { fillcolors } from "../../reducers/colorReducer";
import { wordCorrect } from "../../reducers/correctWordReducer";
import { useParams } from "react-router";
// import { useParams } from "react-router";
import { Container } from "react-bootstrap";
const WordGrid = () => {
  const { difficulty } = useParams();

  const pickedWord = useSelector((state) => state.wordCorrect.value);
  const grid = useSelector((state) => state.grid.value);
  const attemptNumber = useSelector((state) => state.attempt.value);
  const colors = useSelector((state) => state.colors.value);

  const dispatch = useDispatch();

  const handleDifficulty = (difficulty) => {
    let gameDiff = attemptMedium;

    if (difficulty === "easy") {
      gameDiff = attemptEasy;
    } else if (difficulty === "hard") {
      gameDiff = attemptHard;
    }
    dispatch(attempt([...gameDiff]));
  };

  const handleWordSelection = (difficulty) => {
    let wordLevel = mediumWords;
    if (difficulty === "easy") {
      wordLevel = easyWords;
    } else if (difficulty === "hard") {
      wordLevel = hardWords;
    }
    const randomIdx = Math.floor(Math.random() * wordLevel.length);

    const selectedWord = wordLevel[randomIdx];
    dispatch(wordCorrect(selectedWord));
  };

  useEffect(() => {
    if (difficulty) {
      handleDifficulty(difficulty);
      handleWordSelection(difficulty);
    }
  }, [difficulty]);

  const handleColors = (correctWord, guessedWord) => {
    const COLOR_CORRECT_SPOT = "green";
    const COLOR_WRONG_SPOT = "yellow";
    const COLOR_NOT_ANY_SPOT = "grey";
    correctWord = correctWord.toUpperCase();
    let colors = new Array(guessedWord.length);
    let unmatched = {}; // unmatched word letters
    for (let i = 0; i < correctWord.length; i++) {
      let letter = correctWord[i];
      if (letter === guessedWord[i]) {
        colors[i] = COLOR_CORRECT_SPOT;
      } else {
        unmatched[letter] = (unmatched[letter] || 0) + 1;
      }
    }

    for (let i = 0; i < guessedWord.length; i++) {
      let letter = guessedWord[i];
      if (letter !== correctWord[i]) {
        if (unmatched[letter]) {
          colors[i] = COLOR_WRONG_SPOT;
          unmatched[letter]--;
        } else {
          colors[i] = COLOR_NOT_ANY_SPOT;
        }
      }
    }
    return colors;
  };

  const onEnter = () => {
    // prompt user to enter a valid length word
    // if (attemptNumber.attempt < grid[0].length) {

    // }
    if (attemptNumber.charPosition != grid[0].length) return;

    const guessedWord = grid[attemptNumber.attempt];

    const rowColors = handleColors(pickedWord, guessedWord);

    const newColors = [...colors];
    newColors[attemptNumber.attempt] = rowColors;
    dispatch(fillcolors(newColors));
    dispatch(
      AttemptCounter({
        attempt: attemptNumber.attempt + 1,
        charPosition: 0,
      })
    );
    // check if word is correct
    // if (guessedWord.join("") === correctWord) {

    // }

    // check if attempt number is the last one

    if (attemptNumber.attempt === grid.length - 1) {
      console.log("you lost");
    }
  };

  const onDelete = () => {
    if (attemptNumber.charPosition === 0) return;

    const updatedRow = [...grid[attemptNumber.attempt]];
    updatedRow[attemptNumber.charPosition - 1] = "";

    const updatedGrid = [...grid];
    updatedGrid[attemptNumber.attempt] = updatedRow;

    dispatch(attempt(updatedGrid));

    dispatch(
      AttemptCounter({
        ...attemptNumber,
        charPosition: attemptNumber.charPosition - 1,
      })
    );
  };

  const onAddChar = (keyCode, key) => {
    if (attemptNumber.charPosition > grid[0].length - 1) return;

    if (keyCode >= 65 && keyCode <= 90) {
      const char = key;
      const updatedRow = [...grid[attemptNumber.attempt]];
      updatedRow[attemptNumber.charPosition] = char.toUpperCase();

      const updatedGrid = [...grid];
      updatedGrid[attemptNumber.attempt] = updatedRow;

      dispatch(attempt(updatedGrid));

      dispatch(
        AttemptCounter({
          ...attemptNumber,
          charPosition: attemptNumber.charPosition + 1,
        })
      );
    }
  };

  const handleUserKeyPress = useCallback(
    (event) => {
      const { key, keyCode } = event;
      if (keyCode === 13) {
        onEnter();
      } else if (keyCode === 8) {
        onDelete();
      } else {
        onAddChar(keyCode, key);
      }
    },
    [grid, attemptNumber, dispatch]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const createRows = () => {
    return grid.map((row, index) => <Row data={row} currentAttempt={index} />);
  };

  return <div className="grid">{createRows()}</div>;
};

export default WordGrid;
