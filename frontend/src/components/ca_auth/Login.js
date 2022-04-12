import React, { useState } from "react";
import "../style/App.css";
import img1 from "../media/logo.jpeg";
function Signup() {
  const [userDetail, setUserDetail] = useState({
    role: "ambassador",
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
        <form class="form" action="">
          <div id="boxes">
            <input
              type="text"
              id="name"
              name="userName"
              placeholder="Enter your username or email "
              value={userDetail.userName}
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
          <input
            type="submit"
            value="LOGIN"
            id="submit"
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
}

export default Signup;
