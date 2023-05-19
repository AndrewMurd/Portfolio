import { createSlice } from "@reduxjs/toolkit";

export const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    variant: "default",
  },
  reducers: {
    reset: (state) => {
      state.variant = "default";
    },
    setVariant: (state, action) => {
      state.variant = action.payload;
    },
  },
});

export const { reset, setVariant } = cursorSlice.actions;

export default cursorSlice.reducer