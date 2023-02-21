import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
  items: [],
  deliverFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      state.items.push({ product: newProduct, quantity: 1 });
    },
    changeQuantity: (state, action) => {},
  },
});
