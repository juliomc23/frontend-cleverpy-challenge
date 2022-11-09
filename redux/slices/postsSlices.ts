import { createSlice } from "@reduxjs/toolkit";

import { Post } from "../../interfaces/Posts";

export type CounterState = Post[];

const initialState: CounterState = [];

export const counterSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    //with this function we get all the posts, it returns what is passed to it in the dispatch method
    getPosts: (state, action) => {
      return action.payload;
    },

    //delete posts function, in the dispatch method we pass the id of the post we have clicked on and by means of the findindex method and the splice, we delete that element from the initial state.
    deletePost: (state, action) => {
      const postIdIndex = state.findIndex((post) => post.id === action.payload);
      state.splice(postIdIndex, 1);
    },

    //updated function, in the dispatch method the entire post is passed to you. First it is looked for by id so that once found that item we can say to him that the element of the initial state that agrees with that id, is updated to the data that arrives to him of the payload.
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
