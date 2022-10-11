import { createSlice } from "@reduxjs/toolkit";
const totalItem = localStorage.getItem("totalItem");
const initialState = {
  value: totalItem ? parseInt(totalItem) : 0,
};

export const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    addItem: (state) => {
      state.value += 1;
    },
    removeItem: (state) => {
      state.value -= 1;
    },
  },
});

export const { addItem, removeItem } = amountSlice.actions;

export default amountSlice.reducer;
