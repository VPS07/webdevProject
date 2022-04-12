import React, { useState } from "react";
import "../style/stud_auth/Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  const [userDetail, setUserDetail] = useState({
    role: "student",
    userName: "",
    password: "",
  });

  // handling change when user eneter the data
  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUserDetail((prevalue) => {
      return {
        ...prevalue,
        [inputName]: inputValue,
      };
    });
  }

  // posting data to api using fetch api
  const postLoginData = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userDetail,
      }),
    });
    const data = res.json();
  };

  // handling click when click on submit button
  function handleClick(e) {
    postLoginData();

    e.preventDefault();
    setUserDetail({
      userName: "",
      password: "",
    });
  }

  return (
    <div className="signup">
      <div class="wrapper">
        <h2>Login</h2>
        <form action="#">
          <div class="input-box">
            <input
              type="text"
              placeholder="User Name or Email"
              name="userName"
              value={userDetail.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div class="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userDetail.password}
              onChange={handleChange}
              required
            />
          </div>
          <div class="input-box button">
            <input type="Submit" value="Login" onClick={handleClick} />
          </div>
          <div class="text">
            <h3>
              Don't have an account? <NavLink to="/ssignup">Signup now</NavLink>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
