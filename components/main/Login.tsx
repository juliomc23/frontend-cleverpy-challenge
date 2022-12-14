import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useTranslation } from "react-i18next";
import { tkeys } from "../../translations";

export type User = {
  email: string;
  password: string;
};

const adminData = {
  id: 0,
  username: "admin",
  email: "admin@admin.es",
  password: "Admin_123456",
};

const Login = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [userData, setUserData] = useState<User>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Check if username exist in DDBB
    if (
      userData.email !== adminData.email ||
      userData.password !== adminData.password
    ) {
      toast.error("Oops, something is not okay!");
    }

    //if user its okey then, continue
    if (
      userData.email === adminData.email &&
      userData.password === adminData.password
    ) {
      dispatch(setUser(userData));
      navigate("/posts");
    }
  };

  return (
    <section className="main__section--Form">
      <form className="main__form" onSubmit={login}>
        <div className="input-group">
          <input
            required
            type="email"
            name="email"
            autoComplete="off"
            className="input"
            onChange={handleChange}
          />
          <label className="user-label">{t(tkeys.login.email)}</label>
        </div>
        <div className="input-group">
          <input
            required
            type="password"
            name="password"
            autoComplete="off"
            className="input"
            onChange={handleChange}
          />
          <label className="user-label">{t(tkeys.login.password)}</label>
        </div>
        <button className="form__button--Login">{t(tkeys.login.login)}</button>
      </form>
      <Toaster />
    </section>
  );
};

export default Login;
