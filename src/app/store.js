import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./../feature/counters/counters";
import usersSlice from "./../feature/posts/userSlice";
import postAndUserSlice from "../feature/userAndPost/userAndPost";

export const store = configureStore({
  reducer: {
    counters: counterSlice,
    users: usersSlice,
    [postAndUserSlice.reducerPath]: postAndUserSlice.reducer, // reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAndUserSlice.middleware), // middleware
});
