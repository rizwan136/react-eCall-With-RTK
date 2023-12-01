import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    selectProduct(state, action) {
      const existingProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        return state.map((product, index) =>
          index === existingProductIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

      // state.push(action.payload);
    },
    removeProduct(state, action) {
      const existingProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = state.map((product, index) =>
          index === existingProductIndex
            ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
            : product
        );

        // Remove the product from the cart if the quantity becomes zero
        return updatedCart.filter((product) => product.quantity > 0);
      } else {
        return state; // If the product doesn't exist, no change is needed
      }
    },
  },
});
export default productSlice.reducer;
export const { selectProduct, removeProduct } = productSlice.actions;
