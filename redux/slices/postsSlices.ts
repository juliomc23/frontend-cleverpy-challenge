import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Post } from "../../interfaces/Posts";

export interface CounterState {
  posts: Post[];
}

const initialState: CounterState = {
  posts: [],
};

export const counterSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts.push(action.payload);

      return state;
    },
    addPosts: (state, action) => {
      state.posts.push(action.payload);

      return state;
    },
    // delete: (state) => {},
    // edit: (state, action: PayloadAction<number>) => {},
  },
});

export const { getPosts, addPosts } = counterSlice.actions;

export default counterSlice.reducer;
