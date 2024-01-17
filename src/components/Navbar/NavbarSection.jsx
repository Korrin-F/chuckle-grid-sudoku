import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container-fluid mb-4">
      <nav className="navbar navbar-expand-lg customNav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Sudoku
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/game">
                  Game
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/highscores">
                  High Scores
                </Link>
              </li>
           
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Me
                </Link>
              </li> */}
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Quick Contact
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="mailto:cazbella@myyahoo.com">
                      Email
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.linkedin.com/in/caroline-lane-690b92264/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://www.facebook.com/CarolineBellaMusic" target="_blank">
                      Facebook
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="btn btn-primary btn-lg navCTA" to="mailto:cazbella@myyahoo.com" role="button">
                  Email Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;