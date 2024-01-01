import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
})

export const {  } = productSlice.actions

export default productSlice.reducer