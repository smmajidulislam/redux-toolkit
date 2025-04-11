import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );
  const data = await res.json();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error || "Failed to fetch users";
      });
  },
});

export default usersSlice.reducer;
