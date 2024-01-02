import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./ProductSlice";
import selectProductSlice from "./SelectProductSlice";

export const store = configureStore({
  reducer: {
    products:productSlice.reducer ,
    selectProducts:selectProductSlice.reducer ,
  },
});
