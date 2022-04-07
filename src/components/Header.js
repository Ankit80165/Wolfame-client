import React from "react";
import { Link } from "react-router-dom";
// CSS imports
import "../styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse"></div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active m-4">
                <Link className="nav-link nav-link__red" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item m-4">
                <Link className="nav-link nav-link__red" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item m-4">
                <Link className="nav-link nav-link__red" to="/contacts">
                  Contact
                </Link>
              </li>
              <li className="nav-item m-4">
                <Link className="nav-link nav-link__red" to="/leaderboard">
                  LeaderBoard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
