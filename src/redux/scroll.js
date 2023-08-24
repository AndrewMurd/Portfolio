import { createSlice } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    scroll: 0,
  },
  reducers: {
    reset: (state) => {
      state.scroll = 0;
    },
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
  },
});

export const { reset, setScroll } = scrollSlice.actions;

export default scrollSlice.reducer;