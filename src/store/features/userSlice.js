import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return { ...state, ...action.payload };
    },
    remove: () => {
      return {};
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
