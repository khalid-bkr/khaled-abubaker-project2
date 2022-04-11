import { createSlice } from "@reduxjs/toolkit";

export const colorsSlice = createSlice({
  name: "colors",
  initialState: {
    value: [],
  },
  reducers: {
    fillcolors: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fillcolors } = colorsSlice.actions;

export const selectColors = (state) => state.colors.value;

export default colorsSlice.reducer;
