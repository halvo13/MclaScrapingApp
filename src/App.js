import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Stats from "./elements/Stats";
import Nav from "./elements/Nav";
import Home from "./elements/Home";
import Notes from "./elements/Notes";

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
