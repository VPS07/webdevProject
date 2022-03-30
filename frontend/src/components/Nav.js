import { NavLink } from "react-router-dom";
import "./style/nav/nav.css";
import "./style/nav/nav_mobile.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
