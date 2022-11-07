import { Link } from "react-router-dom";

const navbarList = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Posts",
    path: "/posts",
  },
  {
    label: "Sign out",
    path: "/login",
  },
];

const Navbar = () => {
  return (
    <section className="header__section--List">
      <ul className="header__ul--List">
        {navbarList.map((li) => {
          return (
            <li key={li.label} className="header__li--List">
              <Link to={li.path} className="header__a--List">
                {li.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Navbar;
