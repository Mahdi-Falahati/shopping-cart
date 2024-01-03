import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  counter: 0,
};

export const selectProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productCountPlus: (state) => {
      state.counter += 1;
    },
    productCountMines: (state) => {
      state.counter -= 1;
    },
  },
});

export const { productCountPlus, productCountMines } =
  selectProductSlice.actions;

export default selectProductSlice;
