import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
    // delete: (state) => {},
    // edit: (state, action: PayloadAction<number>) => {},
  },
});

export const { getPosts } = counterSlice.actions;

export default counterSlice.reducer;
