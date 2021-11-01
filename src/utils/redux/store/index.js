import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/addUser/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
