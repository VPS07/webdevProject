import { NavLink } from "react-router-dom";
import "./style/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="links">
        <select>
          <option>Student</option>
          <option>Campus Ambassdor</option>
        </select>
      </div>
      <div className="main">
        <h1>represent us in your campus!</h1>
        <NavLink to = "/casignup">apply now!</NavLink>
        <p>or <NavLink to = "/calogin">Login</NavLink> to your account</p>
      </div>
    </div>
  );
}

export default Home;
