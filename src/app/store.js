import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./../feature/counters/counters";
import usersSlice from "./../feature/posts/userSlice";

export const store = configureStore({
  reducer: {
    counters: counterSlice,
    users: usersSlice,
  },
});
