import { NavLink } from "react-router-dom";

import logo from "./media/logo.jpeg";
import "./style/header/header.css";

function Header() {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="karo startup logo" />
            </div>
            <div className="main">
                <h1>represent us in your campus!</h1>
                <NavLink to="/casignup">apply now!</NavLink>
            </div>
        </header>
    );
}

export default Header;