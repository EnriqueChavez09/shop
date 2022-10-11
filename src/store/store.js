import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./amountSlice";
export const store = configureStore({
  reducer: {
    amount: amountReducer,
  },
});
