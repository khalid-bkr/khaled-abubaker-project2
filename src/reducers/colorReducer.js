import { createSlice } from "@reduxjs/toolkit";
import {
  attemptEasy,
  attemptHard,
  attemptMedium,
} from "../components/WordleGame/attempt";

// const currentColors = new Array(guessedWord.length);
export const colorsSlice = createSlice({
  name: "colors",
  initialState: {
    value: [attemptHard],
  },
  reducers: {
    fillcolors: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fillcolors } = colorsSlice.actions;

export default colorsSlice.reducer;
