import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./ProductSlice";

export const store = configureStore({
  reducer: {
    products:productSlice.reducer ,
  },
});
