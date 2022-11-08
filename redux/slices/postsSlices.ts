import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Post } from "../../interfaces/Posts";
import { Router } from "react-router-dom";

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
      state.map((posts) => console.log(posts.id));

      const postIdIndex = state.findIndex(
        (post) => post.id === action.payload.id
      );
      console.log(postIdIndex);

      state[postIdIndex] = action.payload;
      // console.log(postIdIndex);
    },
  },
});

export const { getPosts, deletePost, updatePost } = counterSlice.actions;

export default counterSlice.reducer;
