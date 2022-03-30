import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Signup from "./ca_auth/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <Nav />
  </header> */}
        <Nav />

        <Routes>
          <Route path="/casignup" element={<Signup/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
