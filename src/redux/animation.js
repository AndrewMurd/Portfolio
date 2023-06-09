import { createSlice } from "@reduxjs/toolkit";

export const animationSlice = createSlice({
  name: "animation",
  initialState: {
    animationState: false,
  },
  reducers: {
    resetAnimState: (state) => {
      state.animationState = false;
    },
    startCoverAnimation: (state) => {
      state.animationState = true;
    },
  },
});

export const { resetAnimState, startCoverAnimation } = animationSlice.actions;

export default animationSlice.reducer;
