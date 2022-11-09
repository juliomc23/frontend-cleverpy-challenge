import { Link } from "react-router-dom";
import { useRef } from "react";

import { useTranslation } from "react-i18next";
import { tkeys } from "../../translations";

import "./styles.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const navbarList = [
    {
      label: `${t(tkeys.header.home)}`,
      path: "/",
    },
    {
      label: `${t(tkeys.header.about)}`,
      path: "/about",
    },
    {
      label: `${t(tkeys.header.posts)}`,
      path: "/posts",
    },
    {
      label: `${t(tkeys.header.logout)}`,
      path: "/login",
    },
    {
      label: `${t(tkeys.change_language)}`,
    },
  ];
  const language = useRef(i18n.language);

  const handleChangeLanguage = () => {
    const newLanguage = language.current === "es" ? "en" : "es";
    language.current = newLanguage;
    i18n.changeLanguage(language.current);
  };

  return (
    <section className="header__section--List">
      <ul className="header__ul--List">
        {navbarList.map((li) => {
          return (
            <>
              {li?.path ? (
                <li key={li.label} className="header__li--List">
                  <Link to={li.path} className="header__a--List">
                    {li.label}
                  </Link>
                </li>
              ) : (
                <li
                  key={li.label}
                  className="header__li--List"
                  onClick={handleChangeLanguage}
                >
                  <a className="header__a--List">{li.label}</a>
                </li>
              )}
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default Navbar;
