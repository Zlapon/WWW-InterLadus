import { createSlice } from "@reduxjs/toolkit";

const initialState = Object.freeze({
  isSidebarVisible: false,
  isLanguageSelectorVisible: false,
});

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIsSidebarVisible: (state, action) => ({
      ...state,
      isSidebarVisible: action.payload,
    }),
    setIsLanguageSelectorVisible: (state, action) => ({
      ...state,
      isLanguageSelectorVisible: action.payload,
    }),
  },
});

export const { setIsSidebarVisible, setIsLanguageSelectorVisible } =
  navbarSlice.actions;

export default navbarSlice.reducer;
