import { NavLink } from "react-router-dom";
import s from "../../styled/Navigation.module.css";
import { Header } from "../../styled/Header";

function Navigation() {
  return (
    <Header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.active : s.inactive)}
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.active : s.inactive)}
        >
          Movies
        </NavLink>
      </nav>
    </Header>
  );
}

export default Navigation;
