import { NavLink } from "react-router-dom";
import "./style/nav/nav.css";
import "./style/nav/nav_mobile.css";
import logo from "./media/logo.jpeg";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">AboutUs</NavLink>
        </li>
        <li>
          <NavLink to="/brands">Brands</NavLink>
        </li>
        <li>
          <NavLink to="/faq">Faq's</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
