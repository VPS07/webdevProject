import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import CASignup from "./ca_auth/Signup";
import CALogin from "./ca_auth/Login";
// import SUSignup from "./stud_auth/Signup";
// import SULogin from "./stud_auth/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/casignup" element={<CASignup/>} />
          <Route path="/calogin" element={<CALogin/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
