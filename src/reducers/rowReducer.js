import { createSlice } from "@reduxjs/toolkit";
import {
  attemptEasy,
  attemptHard,
  attemptMedium,
} from "../components/WordleGame/attempt";

// const currentAttempt = [...attemptHard];
const currentAttempt = [];
export const rowSlice = createSlice({
  name: "grid",
  initialState: {
    value: currentAttempt,
  },
  reducers: {
    attempt: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { attempt } = rowSlice.actions;

export default rowSlice.reducer;
