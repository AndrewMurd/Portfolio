import { configureStore } from "@reduxjs/toolkit";
import cursorReducer from "./cursor";
import animationReducer from "./animation";

export default configureStore({
  reducer: {
    cursor: cursorReducer,
    animation: animationReducer,
  },
});
