import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    selectProduct(state, action) {
      console.log(action);
    }
  }
});

export default productSlice.reducer;
export const { selectProduct } = productSlice.actions;
