import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "../features/Navbar/navbarSlice";
const store = configureStore({ reducer: { navbar: navbarSlice } });
export default store;
