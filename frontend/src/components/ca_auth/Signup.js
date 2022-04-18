import React, { useState } from "react";
import "../style/App.css";
import img1 from "../media/logo.jpeg";
function Signup() {
  const [userDetail, setUserDetail] = useState({
    role: "ambassador",
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
    <div id="page">
      <div id="firstdiv">
        <section id="head">
          <h1>
            <b>KARO STARTUP </b>
          </h1>
          <p>Get internship in less than 10 minutes!</p>
        </section>
        <section id="image">
          <img src={img1} alt="logo" />
        </section>
      </div>
      <div class="box">
        <form class="form" method="POST">
          <div id="boxes">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              id="name"
              value={userDetail.name}
              onChange={handleChange}
            />
          </div>
          <div id="boxes">
            <input
              type="text"
              name="userName"
              id="name"
              placeholder="Enter your username "
              value={userDetail.userName}
              onChange={handleChange}
            />
          </div>
          <div id="boxes">
            <input
              type="number"
              id="name"
              name="contactNumber"
              placeholder="Enter your contact number"
              value={userDetail.contactNumber}
              onChange={handleChange}
            />
          </div>
          <div id="boxes">
            <input
              type="email"
              id="name"
              name="userEmail"
              placeholder="Enter your email"
              value={userDetail.userEmail}
              onChange={handleChange}
            />
          </div>
          <div id="boxes">
            <input
              type="password"
              id="name"
              name="password"
              placeholder="Enter your password"
              value={userDetail.password}
              onChange={handleChange}
            />
          </div>
          <div id="boxes">
            <input
              type="password"
              id="name"
              name="rePassword"
              placeholder="please re-enter the password"
              value={userDetail.rePassword}
              onChange={handleChange}
            />
            <p id="passwordWarningca">
              {userDetail.rePassword &&
              userDetail.password !== userDetail.rePassword
                ? "password doesn't match !"
                : ""}
            </p>
          </div>
          <div>
            <input
              type="submit"
              value="SIGN UP"
              id="submit"
              onClick={handleClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
