import "../style/stud_auth/main.css";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <div class="wrapper">
        <h2>Sign Up</h2>
        <form action="#">
          <div class="input-box">
            <input type="text" placeholder="User Name" required />
          </div>
          <div class="input-box">
            <input type="number" placeholder="Mobile Number" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Create password" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Confirm password" required />
          </div>
          <div class="input-box">
            <input type="email" placeholder="Email Id" required />
          </div>

          <div class="input-box button">
            <input type="Submit" value="Register Now" />
          </div>
          <div class="text">
            <h3>
              Already have an account? <NavLink to = "/slogin">Login now</NavLink>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
