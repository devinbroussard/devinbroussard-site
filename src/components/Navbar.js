import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/Navbar.css";
import routersettings from "../static/router-settings";
import face from "../data/face.png";

function Navbar() {
  const listItems = routersettings.map((routerItem, index) => (
    <Link key={index} to={routerItem.redirect} className="nav-link">
      <button className="button navbar-font mx-1 hover-color">
        <span className="fw-bold">0{index + 1} </span>
        {routerItem.name}
      </button>
    </Link>
  ));
  return (
    <Router>
      <nav className="navbar-expand navbar-custom row justify-content-between">
        <div className="col-6">
          <a className="navbar-font nav-nav fw-bold">
            <img
              src={face}
              alt="Face"
              width="70"
              height="70"
              className="me-2"
            />
            Devin Broussard
          </a>
        </div>
        <div className="navbar-nav navbar-font col-6">{listItems}</div>
      </nav>

      <Switch></Switch>
    </Router>
  );
}

export default Navbar;
