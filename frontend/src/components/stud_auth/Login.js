import "../style/stud_auth/Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="signup">
      <div class="wrapper">
        <h2>Login</h2>
        <form action="#">
          <div class="input-box">
            <input type="text" placeholder="User Name or Email" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <div class="input-box button">
            <input type="Submit" value="Login" />
          </div>
          <div class="text">
            <h3>
              Don't have an account? <NavLink to = "/ssignup">Signup now</NavLink>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
