import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  counter: 0,
};

export const selectProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    counterProduct: (state, action) => {
      state.counter += 1;
    },
  },
});

export const { counterProduct } = selectProductSlice.actions;

export default selectProductSlice;
