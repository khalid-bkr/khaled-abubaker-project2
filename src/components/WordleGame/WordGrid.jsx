import React, { useCallback, useEffect, useState } from "react";
import Row from "./Row";
import { useSelector, useDispatch } from "react-redux";
import { attempt } from "../../reducers/rowReducer";
import { AttemptCounter } from "../../reducers/attemptReducer";
import { fillcolors } from "../../reducers/colorReducer";
import { wordCorrect } from "../../reducers/correctWordReducer";
import { restartGame } from "../../reducers/restartReducer";
import { gameStatistics } from "../../reducers/statisticsReducer";
import { setModalShow } from "../../reducers/modalShowReducer";
import { useParams } from "react-router";
import {
  handleDifficulty,
  handleWordSelection,
  handleColors,
} from "../../utils/helper";
import wordExists from "word-exists";

// import { getWordsSet } from "../../utils/words";

import { Container, Toast } from "react-bootstrap";
import WordleModal from "../WordleModal";
const WordGrid = () => {
  const { difficulty } = useParams();

  const pickedWord = useSelector((state) => state.wordCorrect.value);
  const grid = useSelector((state) => state.grid.value);
  const attemptNumber = useSelector((state) => state.attempt.value);
  const colors = useSelector((state) => state.colors.value);
  const restart = useSelector((state) => state.restartGame.value);
  const statistics = useSelector((state) => state.gameStatistics.value);

  const [alert, setAlert] = useState({
    message: "",
    visiable: "",
  });

  const [gameOver, setGameOver] = useState(false);

  const modalShow = useSelector((state) => state.modalShow.value);

  const dispatch = useDispatch();

  useEffect(() => {
    if (difficulty) {
      dispatch(attempt([...handleDifficulty(difficulty)]));
      dispatch(wordCorrect(handleWordSelection(difficulty)));
    }
  }, [dispatch, difficulty]);

  const handleAlert = (message, timeout) => {
    setAlert((prev) => ({
      ...prev,
      message,
      visiable: true,
    }));
    if (timeout) {
      setTimeout(
        () => setAlert((prev) => ({ ...prev, message: "", visiable: false })),
        2200
      );
    }
  };

  const handleRestart = () => {
    dispatch(restartGame(true));
  };

  useEffect(() => {
    dispatch(attempt([...handleDifficulty(difficulty)]));
    dispatch(wordCorrect(handleWordSelection(difficulty)));
    dispatch(fillcolors([]));
    dispatch(
      AttemptCounter({
        attempt: 0,
        charPosition: 0,
      })
    );
    setAlert({ messasge: "", visiable: "" });
    setGameOver(false);
    dispatch(restartGame(false));
  }, [dispatch, restart, difficulty]);

  const onEnter = () => {
    // prompt user to enter a valid length word

    if (attemptNumber.charPosition < grid[0].length) {
      handleAlert("Not enough letters", true);
      return;
    }

    const guessedWord = grid[attemptNumber.attempt];

    // check if word is a valid english word
    if (!wordExists(guessedWord.join(""))) {
      handleAlert(`Word is not Valid, Try Again!`, true);
      return;
    }
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

    if (guessedWord.join("") === pickedWord.toUpperCase()) {
      handleAlert(
        `Congratulations! The word is ${pickedWord.toUpperCase()}`,
        false
      );

      dispatch(
        gameStatistics({
          ...statistics,
          title: "Congratulations!! You've guessed correctly",
          played: statistics.played + 1,
          streak: statistics.streak + 1,
          maxStreak: Math.max(statistics.streak + 1, statistics.maxStreak),
        })
      );
      setGameOver((prev) => true);
      dispatch(setModalShow(true));
      console.log(statistics.streak, statistics.maxStreak);
      return;
    }

    // check if attempt number is the last one

    if (attemptNumber.attempt === grid.length - 1) {
      handleAlert(pickedWord.toUpperCase(), false);
      dispatch(
        gameStatistics({
          ...statistics,
          title: `The word is ${pickedWord.toUpperCase()}`,
          played: statistics.played + 1,
          streak: 0,
        })
      );
      setGameOver((prev) => true);
      dispatch(setModalShow(true));
      return;
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
      if (modalShow) return;
      const { key, keyCode } = event;
      // restart game if user presses enter
      if (gameOver && !modalShow && keyCode === 13) {
        handleRestart();
      }
      // keep page as it is if user doesn't press enter
      if (gameOver) return;
      // take user input
      if (keyCode === 13) {
        onEnter();
      } else if (keyCode === 8) {
        onDelete();
      } else {
        onAddChar(keyCode, key);
      }
    },
    [
      grid,
      attemptNumber,
      gameOver,
      modalShow,
      onAddChar,
      onDelete,
      onEnter,
      handleRestart,
      dispatch,
    ]
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

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      {alert.visiable && (
        <Toast className="toast-wrapper toast-style">
          <Toast.Body className="toast-message">
            <p>{alert.message}</p>
          </Toast.Body>
        </Toast>
      )}
      <div className="grid-wordle">{createRows()}</div>
      <WordleModal
        show={modalShow}
        modalheading={"Statistics"}
        modaltitle={statistics}
        modalinfo={statistics}
        onHide={() => dispatch(setModalShow(false))}
      ></WordleModal>
    </Container>
  );
};

export default WordGrid;
