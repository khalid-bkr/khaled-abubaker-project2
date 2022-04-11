import { createSlice } from "@reduxjs/toolkit";

const currentAttempt = {
  attempt: 0,
  charPosition: 0,
};
export const attemptSlice = createSlice({
  name: "attempt",
  initialState: {
    value: currentAttempt,
  },
  reducers: {
    AttemptCounter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { AttemptCounter } = attemptSlice.actions;

export const selectAttempt = (state) => state.attempt.value;

export default attemptSlice.reducer;
