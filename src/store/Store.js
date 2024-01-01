import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './Product'

export const store = configureStore({
  reducer: {
    products:productSlice
  },
})