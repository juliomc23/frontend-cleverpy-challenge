import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlices";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
