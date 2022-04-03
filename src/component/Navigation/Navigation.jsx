import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className={s.header}>
      <NavLink exact to="/" className={s.navItem} activeClassName={s.active}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.navItem} activeClassName={s.active}>
        Movies
      </NavLink>
      <NavLink to="/hit" className={s.navItem} activeClassName={s.active}>
        Hit
      </NavLink>
    </nav>
  );
};

export default Navigation;
