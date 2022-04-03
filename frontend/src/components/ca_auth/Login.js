import "../style/App.css";
import img1 from "../media/logo.jpeg";
function Signup() {
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
            <input type="text" id="name" placeholder="Enter your username or email " />
          </div>
          <div id="boxes">
            <input
              type="password"
              id="name"
              placeholder="Enter your password"
            />
          </div>
            <input type="submit" value="LOGIN" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
