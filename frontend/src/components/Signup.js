import "./style/App.css";
import img1 from "./media/logo.jpeg";
function Signup() {
  return (
    <div className="App" id="page">
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
            <input type="text" placeholder="Enter your name" id="name" />
          </div>
          <div id="boxes">
            <input type="text" id="name" placeholder="Enter your username " />
          </div>
          <div id="boxes">
            <input
              type="number"
              id="name"
              placeholder="Enter your contact number"
            />
          </div>
          <div id="boxes">
            <input type="email" id="name" placeholder="Enter your email" />
          </div>
          <div id="boxes">
            <input
              type="password"
              id="name"
              placeholder="Enter your password"
            />
          </div>
          <div id="boxes">
            <input
              type="password"
              id="name"
              placeholder="please re-enter the password"
            />
          </div>
          <div>
            <input type="submit" value="SIGN UP" id="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
