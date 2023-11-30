import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onToggleMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [iconClass, setIconClass] = useState("fa-solid fa-moon fa-lg");

  const toggleMode = () => {
    onToggleMode();
    setIsDarkMode((prevMode) => !prevMode);
    setIconClass((prevClass) =>
      prevClass === "fa-solid fa-sun"
        ? "fa-solid fa-moon fa-lg"
        : "fa-solid fa-sun"
    );
  };
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TextUtil
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <div className="form-check form-switch d-flex align-items-center mx-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <i
                className={`${iconClass} m-2`}
                style={{ color: isDarkMode ? "#ffffff" : "#000000" }}
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
