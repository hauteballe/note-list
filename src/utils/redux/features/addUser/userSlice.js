import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      state.email = action.payload;
    },
    remove: () => {
      return {};
    },
  },
});

export const { add, remove } = userSlice.actions;

export default userSlice.reducer;
