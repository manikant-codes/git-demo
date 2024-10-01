import { configureStore } from "@reduxjs/toolkit";
import { mobileReducer } from "./slices/mobilesSlice";

const store = configureStore({
  reducer: {
    mobile: mobileReducer,
  },
});

export default store;
