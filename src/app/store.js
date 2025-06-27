import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modalSlice";
import languageReducer from "../features/languageSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    language: languageReducer,
  },
});
