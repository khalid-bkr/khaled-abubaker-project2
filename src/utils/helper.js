import { easyWords, mediumWords, hardWords } from "./words";

import {
  attemptMedium,
  attemptEasy,
  attemptHard,
} from "../components/WordleGame/attempt";

export const handleDifficulty = (difficulty) => {
  let gameDiff = attemptMedium;

  if (difficulty === "easy") {
    gameDiff = attemptEasy;
  } else if (difficulty === "hard") {
    gameDiff = attemptHard;
  }
  return gameDiff;
};

export const handleWordSelection = (difficulty) => {
  let wordLevel;
  if (difficulty === "easy") {
    wordLevel = easyWords;
  } else if (difficulty === "hard") {
    wordLevel = hardWords;
  } else if (difficulty === "medium") {
    wordLevel = mediumWords;
  }

  const randomIdx = Math.floor(Math.random() * wordLevel.length);
  const selectedWord = wordLevel[randomIdx];
  return selectedWord;
};

export const handleColors = (correctWord, guessedWord) => {
  const COLOR_CORRECT_SPOT = "green";
  const COLOR_WRONG_SPOT = "yellow";
  const COLOR_NOT_ANY_SPOT = "grey";
  correctWord = correctWord.toUpperCase();
  let colors = new Array(guessedWord.length);
  let unmatched = {};
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
