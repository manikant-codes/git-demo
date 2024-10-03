import { configureStore } from "@reduxjs/toolkit";
import { mobileReducer } from "./slices/mobilesSlice";
import { usersReducer } from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    mobile: mobileReducer,
    users: usersReducer,
  },
});

export default store;
