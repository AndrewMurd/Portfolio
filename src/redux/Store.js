import { configureStore } from "@reduxjs/toolkit";
import cursorReducer from "./cursor";
import animationReducer from "./animation";
import scrollReducer from "./scroll";

export default configureStore({
  reducer: {
    cursor: cursorReducer,
    animation: animationReducer,
    scroll: scrollReducer,
  },
});
