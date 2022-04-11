import { createSlice } from "@reduxjs/toolkit";

const initialStatisics = {
  title: "Latest Statistics",
  played: 0,
  streak: 0,
  maxStreak: 0,
};
export const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    value: initialStatisics,
  },
  reducers: {
    gameStatistics: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { gameStatistics } = statisticsSlice.actions;

export default statisticsSlice.reducer;
