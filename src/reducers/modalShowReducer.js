import { createSlice } from "@reduxjs/toolkit";

export const modalShowSlice = createSlice({
  name: "displayModal",
  initialState: {
    value: false,
  },
  reducers: {
    setModalShow: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setModalShow } = modalShowSlice.actions;

export const selectModalShow = (state) => state.displayModal.value;

export default modalShowSlice.reducer;
