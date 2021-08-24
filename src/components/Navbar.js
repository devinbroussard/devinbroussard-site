import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/Navbar.css";
import routersettings from "../static/router-settings";
import face from "../data/face.png";
import data from "../static/router-settings";
import HomePage from "../pages/HomePage";

//Navbar component
function Navbar() {
  const routerLinks = routersettings.map((routerItem, index) => (
    <Link to={routerItem.redirect} key={index} className="nav-link">
      <button className="button navbar-font hover-color">
        <span className="fw-bold">0{index + 1} </span>
        {routerItem.name}
      </button>
    </Link>
  ));

  const Pages = ["HomePage", "About", "Experience", "Projects", "Contact"];
  const  = React.lazy(() => import(`../pages/${x}`));
  const routerRoutes = routersettings.map((routerItem) => (
    <Route path={routerItem.redirect}></Route>
  ));

  return (
    <Router>
      <div className="navbar-expand navbar-custom row justify-content-between navbar-nav">
        <div className="col-6">
          <Link to="/" className="navbar-font nav-nav fw-bold">
            <img
              src={face}
              alt="Face"
              width="75"
              height="75"
              className="me-2"
            />
            Devin Broussard
          </Link>
        </div>
        <div className="navbar-nav col-6">{routerLinks}</div>
      </div>
      <Switch>{routerRoutes}</Switch>
    </Router>
  );
}

export default Navbar;
