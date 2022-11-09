import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../components/main/Login";

export type CounterState = User;

const initialState: CounterState = { email: "", password: "" };

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //we get the user
    getUser: (state) => {
      return state;
    },

    //set function in which we make the status equal to the payload coming from the login
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },

    //delete user state function in which we make the status is empty, this function is used in log out
    delUser: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { getUser, setUser, delUser } = counterSlice.actions;

export default counterSlice.reducer;
