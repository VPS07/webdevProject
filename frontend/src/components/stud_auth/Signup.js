import React, { useState } from "react";
import "../style/stud_auth/main.css";
import { NavLink } from "react-router-dom";

function Signup() {
  const [userDetail, setUserDetail] = useState({
    role: "student",
    name: "",
    userName: "",
    contactNumber: "",
    userEmail: "",
    password: "",
    rePassword: "",
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
  const postSignupData = async () => {
    const res = await fetch("/api/signup", {
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
    postSignupData();

    e.preventDefault();
    setUserDetail({
      name: "",
      userName: "",
      contactNumber: "",
      userEmail: "",
      password: "",
      rePassword: "",
    });
  }

  return (
    <div className="signup">
      <div class="wrapper">
        <h2>Sign Up</h2>
        <form action="#">
          <div class="input-box">
            <input type="text" placeholder="Enter your name" name="name" value={userDetail.name} onChange={handleChange} required />
          </div>
          <div class="input-box">
            <input type="text" placeholder="User Name" name="userName" value={userDetail.userName} onChange={handleChange} required />
          </div>
          <div class="input-box">
            <input type="number" placeholder="Mobile Number" name="contactNumber" value={userDetail.contactNumber} onChange={handleChange} required />
          </div>
          <div class="input-box">
            <input type="email" placeholder="Email Id" name="userEmail" value={userDetail.userEmail} onChange={handleChange} required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Create password" name="password" value={userDetail.password} onChange={handleChange} required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Confirm password" name="rePassword" value={userDetail.rePassword} onChange={handleChange} required />
          </div>

          <div class="input-box button">
            <input type="Submit" value="Register Now" onClick={handleClick}/>
          </div>
          <div class="text">
            <h3>
              Already have an account? <NavLink to="/slogin">Login now</NavLink>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
