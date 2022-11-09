import { useEffect } from "react";

import { Link } from "react-router-dom";
import { useRef } from "react";

import { useTranslation } from "react-i18next";
import { tkeys } from "../../translations";
import { useSelector, useDispatch } from "react-redux";
import { delUser, getUser } from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store";

import "./styles.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const getUserState = useSelector((state: RootState) => state.user);

  const { t, i18n } = useTranslation();

  const language = useRef(i18n.language);

  const handleChangeLanguage = () => {
    const newLanguage = language.current === "es" ? "en" : "es";
    language.current = newLanguage;
    i18n.changeLanguage(language.current);
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const logOut = () => {
    dispatch(delUser());
  };

  const emptyUser = getUserState.email === "" && getUserState.password === "";

  // console.log(user);

  return (
    <section className="header__section--List">
      <ul className="header__ul--List">
        <li className="header__li--List">
          <Link to={"/"} className="header__a--List">
            {t(tkeys.header.home)}
          </Link>
        </li>
        <li className="header__li--List">
          <Link to={"/about"} className="header__a--List">
            {t(tkeys.header.about)}
          </Link>
        </li>
        <li className="header__li--List">
          <Link to={"/posts"} className="header__a--List">
            {t(tkeys.header.posts)}
          </Link>
        </li>
        {emptyUser ? null : (
          <li className="header__li--List" onClick={logOut}>
            <Link to={"/login"} className="header__a--List">
              {t(tkeys.header.logout)}
            </Link>
          </li>
        )}
        <li className="header__li--List" onClick={handleChangeLanguage}>
          <a className="header__a--List">{t(tkeys.change_language)}</a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
