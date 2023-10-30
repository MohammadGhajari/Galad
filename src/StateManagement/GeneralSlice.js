import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false
};
const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
      setDarkMode(state, action) {
        state.isDarkMode = action.payload;
      },
    },
  })
;

export const {
  setDarkMode
} = generalSlice.actions;

export default generalSlice.reducer;


