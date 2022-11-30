import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    name: "laptop lenovo legion",
    price: 20000000,
    stock: 50,
  },
  reducers: {
    changeName: (state, action) => {
      console.log(action);
      state.name = action.payload;
    },
  },
});

export const { changeName } = productSlice.actions;

export default productSlice.reducer;
