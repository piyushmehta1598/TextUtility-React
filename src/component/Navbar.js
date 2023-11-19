import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link home" aria-current="page" to="/TextUtility-React">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link about" active to="/about">
                {props.about}
              </Link>              
            </li>
          </ul>
          <button type="button" onClick={props.color1} className="btn btn-primary mx-1"></button>
          <button type="button" onClick={props.color2} className="btn btn-success"></button>
          <button type="button" onClick={props.color3} className="btn btn-danger mx-1"></button>
          <button type="button" onClick={props.color4} className="btn btn-info"></button>
          <button type="button" onClick={props.color5} className="btn btn-dark mx-1 border border-1 border-light opacity-25" id="flexSwitchCheckDefault"></button>
          <button type="button" onClick={props.color6} className="btn btn-light border border-1 border-dark opacity-50" id="flexSwitchCheckDefault"></button>
            <div className="form-check form-switch me-3 ">
              {/* <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
              <label style={{cursor:'pointer'}} className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault"><em><strong>DarkModes</strong></em></label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "texis",
  about: "Abouty",
};
