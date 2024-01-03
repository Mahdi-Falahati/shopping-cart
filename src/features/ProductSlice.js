import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  counter: 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchingData: (state, action) => {
      const result = action.payload?.map((item) => {
        return { ...item, count: 0 };
      });

      state.value = result;
    },
    productCountMines: (state, action) => {
      const result = state.value?.map((item) => {
        if (action.payload === item.id) {
          if (item.count <= 1) {
            return { ...item, count: (item.count -= 1), buy: false };
          } else {
            return { ...item, count: (item.count -= 1) };
          }
        }
        return { ...item };
      });

      state.counter -= 1;
      state.value = result;
    },
    productCountPlus: (state, action) => {
      const result = state.value?.map((item) => {
        if (action.payload === item.id) {
          return { ...item, count: (item.count += 1), buy: true };
        }
        return { ...item };
      });

      state.counter += 1;
      state.value = result;
    },
    clearDataSelected: (state) => {
      state.counter = 0;
      state.value = state.value?.map((item) => {
        return { ...item, count: 0, buy: false };
      });
    },
  },
});

export const {
  fetchingData,
  productCountMines,
  productCountPlus,
  clearDataSelected,
} = productSlice.actions;

export default productSlice;
