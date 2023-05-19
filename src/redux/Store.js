import { configureStore } from "@reduxjs/toolkit";
import cursorReducer from "./cursor";

export default configureStore({
  reducer: {
    cursor: cursorReducer,
  },
});
