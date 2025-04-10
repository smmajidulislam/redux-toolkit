import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ],
  reducers: {
    increment: (state, action) => {
      const findIndex = state.findIndex((item) => item.id === action.payload);
      state[findIndex].value++;
    },
    decrement: (state, action) => {
      const findIndex = state.findIndex((item) => item.id === action.payload);
      state[findIndex].value--;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;
