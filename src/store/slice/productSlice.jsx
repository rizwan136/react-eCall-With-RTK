import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    selectProduct(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {}
  }
});

export default productSlice.reducer;
export const { selectProduct, removeProduct } = productSlice.actions;
