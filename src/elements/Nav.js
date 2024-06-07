import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button>
            <Link to="/">Home</Link>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <Link to="/stats">Stats</Link>
          </button>
        </li>
        <li className="nav-item">
          <button>
            <Link to="/notes">Notes</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
