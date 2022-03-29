import "./style/App.css";
import img1 from "./media/logo.jpeg";
function Login() {
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
          <div id="boxess">
            <input type="text" placeholder="Enter your name" id="name" />
          </div>
          <div id="boxess">
            <input type="email" id="name" placeholder="Enter your email" />
          </div>
          <div id="boxess">
            <input
              type="password"
              id="name"
              placeholder="Enter your password"
            />
          </div>
          <div id="boxess">
            <input type="password" id="name" placeholder="confirm  password" />
          </div>
          <div>
            <input type="submit" value="Login" id="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
