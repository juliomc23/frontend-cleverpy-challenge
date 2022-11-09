import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../components/main/Login";

export type CounterState = User;

const initialState: CounterState = { email: "", password: "" };

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      return state;
    },
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    delUser: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { getUser, setUser, delUser } = counterSlice.actions;

export default counterSlice.reducer;
