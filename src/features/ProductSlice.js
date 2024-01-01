import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchingData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetchingData } = productSlice.actions;

export default productSlice;
