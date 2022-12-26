import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "../slice.js/theme";

export const store = configureStore({
    theme:ThemeReducer
})
