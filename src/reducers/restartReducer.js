import { createSlice } from "@reduxjs/toolkit";

export const restartSlice = createSlice({
  name: "restart",
  initialState: {
    value: false,
  },
  reducers: {
    restartGame: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { restartGame } = restartSlice.actions;

export const selectRestart = (state) => state.restart.value;

export default restartSlice.reducer;
