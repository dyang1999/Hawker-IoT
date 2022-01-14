import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a">
      <div className="container nav-container">
        <a className="navbar-brand brand" href="/">
          HOES
        </a>

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

        <div
          className="collapse navbar-collapse alink"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  LinkedIn
                </a>
                <a className="dropdown-item" href="#">
                  GitHub
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Email
                </a>
              </div>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="#">
                About Us <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Report A Bug
              </a>
            </li>

            <a className="btn btn-outline-dark start" href="/status">
              Get Started
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
