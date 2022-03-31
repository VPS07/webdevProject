import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import CASignup from "./ca_auth/Signup";
import SUSignup from "./stud_auth/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}

        {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/casignup" element={<CASignup/>} />
        </Routes> */} <SUSignup />

      </div>
    </Router>
  );
}

export default App;
