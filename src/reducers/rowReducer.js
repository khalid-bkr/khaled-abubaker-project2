import { createSlice } from "@reduxjs/toolkit";

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

export const selectGrid = (state) => state.grid.value;

export default rowSlice.reducer;
