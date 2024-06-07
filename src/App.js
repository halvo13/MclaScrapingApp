import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Stats from "./Stats";
import Nav from "./Nav";
import Home from "./Home";
import Notes from "./Notes";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
