import { NavLink } from "react-router-dom";
import "./style/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="links">
        <NavLink to="/ssignup" className="stud-auth-btn">student</NavLink>
      </div>
      <div className="main">
        <h1>represent us in your campus!</h1>
        <NavLink to="/casignup">apply now!</NavLink>
        <p>
          or <NavLink to="/calogin">Login</NavLink> to your account
        </p>
      </div>
    </div>
  );
}

export default Home;
