import React, { useState, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import routersettings from "../static/router-settings";
import face from "../data/face.png";

//Navbar component
function Navbar() {
  return (
    <div>
      <div className="header-background"/>
      <div className="navbar-expand navbar-custom row navbar-nav container-sm position-absolute px-3">
        <div className="col-6">
          <Link to="/" className="navbar-font nav-nav fw-bold mt-4">
            <img src={face} alt="Face" width="75" height="75" className="me-2"/>
            Devin Broussard
          </Link>
        </div>
        <div className="navbar-nav col-6 justify-content-end">
          {routersettings.map((routerItem, index) => (
            <NavLink to={routerItem.redirect} key={index} className="nav-link navbar-font hover-color" activeClassName="active" exact>
                <span className="fw-bold">0{index + 1} </span>
                {routerItem.name}
            </NavLink>
          ))}
        </div>
      </div>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          {routersettings.map((routerItem, index) => (
            <Route key={index} exact path={routerItem.redirect}>
              < routerItem.component />
            </Route>
          ))}
        </Suspense>
          
      </Switch>
    </div>
  );
}

export default Navbar;
