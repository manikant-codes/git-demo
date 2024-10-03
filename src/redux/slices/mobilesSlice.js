import { createSlice } from "@reduxjs/toolkit";

const mobileSlice = createSlice({
  name: "mobiles",
  initialState: {
    mobiles: 5,
  },
  reducers: {
    buy: (state, action) => {
      state.mobiles--;
    },
    restock: (state, action) => {
      state.mobiles += action.payload;
    },
  },
});

export const { buy, restock } = mobileSlice.actions;

console.log("buy()", buy());

export const mobileReducer = mobileSlice.reducer;