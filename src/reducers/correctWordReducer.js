import { createSlice } from "@reduxjs/toolkit";

export const correctWordSlice = createSlice({
  name: "wordCorrect",
  initialState: {
    value: "",
  },
  reducers: {
    wordCorrect: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { wordCorrect } = correctWordSlice.actions;

export default correctWordSlice.reducer;
