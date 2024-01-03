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
    selectProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { productCountPlus, productCountMines, selectProduct } =
  selectProductSlice.actions;

export default selectProductSlice;
