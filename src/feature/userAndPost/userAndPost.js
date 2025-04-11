import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postAndUserSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["users", "updateUser", "posts"], //for cache update
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => "users",
      providesTags: ["users"], //for cache
    }),
    fetchPosts: builder.query({
      query: () => "posts",
      providesTags: ["posts"], //for cache
    }),
    updateUser: builder.mutation({
      query: ({ id, user }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "updateUser", id: arg.id },
      ], //for cache
    }),
  }),
});
export const { useFetchUsersQuery, useFetchPostsQuery, useUpdateUserMutation } =
  postAndUserSlice;

export default postAndUserSlice;
