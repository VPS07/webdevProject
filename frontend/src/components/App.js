import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import CASignup from "./ca_auth/Signup";
import CALogin from "./ca_auth/Login";
import SUSignup from "./stud_auth/Signup";
import SULogin from "./stud_auth/Login";
import About from "./About";
import FAQ from "./FAQ";
import Brands from "./Brand";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/casignup" element={<CASignup/>} />
          <Route path="/calogin" element={<CALogin/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/slogin" element={<SULogin/>} />
          <Route path="/ssignup" element={<SUSignup/>} />
          <Route path="/brands" element={<Brands/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
