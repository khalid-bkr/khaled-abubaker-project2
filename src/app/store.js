import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "../reducers/rowReducer";
import attemptReducer from "../reducers/attemptReducer";
import colorReducer from "../reducers/colorReducer";
import correctWordReducer from "../reducers/correctWordReducer";

export const store = configureStore({
  reducer: {
    grid: gridReducer,
    attempt: attemptReducer,
    colors: colorReducer,
    wordCorrect: correctWordReducer,
  },
});
