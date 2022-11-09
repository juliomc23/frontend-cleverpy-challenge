import { useEffect } from "react";
import UnderConstruction from "./UnderConstruction";

import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store";

import { Navigate } from "react-router-dom";

const Main = () => {
  const getUserState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser);
  }, []);

  if (getUserState.email === "" && getUserState.password === "") {
    return <Navigate to="/login" replace />;
  }
  return <UnderConstruction />;
};

export default Main;
