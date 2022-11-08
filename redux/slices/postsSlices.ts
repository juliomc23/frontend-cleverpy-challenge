import { createSlice } from "@reduxjs/toolkit";

import { Post } from "../../interfaces/Posts";

export type CounterState = Post[];

const initialState: CounterState = [];

export const counterSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      return action.payload;
    },

    deletePost: (state, action) => {
      const postIdIndex = state.findIndex((post) => post.id === action.payload);
      state.splice(postIdIndex, 1);
    },

    updatePost: (state, action) => {
      const postIdIndex = state.findIndex(
        (post) => post.id === action.payload.id
      );

      state[postIdIndex] = action.payload;
    },
  },
});

export const { getPosts, deletePost, updatePost } = counterSlice.actions;

export default counterSlice.reducer;
