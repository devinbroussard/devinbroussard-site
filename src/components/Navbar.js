import React, { Component,Suspense, useState, useEffect} from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import routersettings from "../static/router-settings";
import face from "../data/face.png";

//Navbar component
function Navbar() {
  return (
    <div>
      <div className="header-background"/>
      <nav className="navbar navbar-light navbar-expand-xxl navbar-custom navbar-nav container-sm">
        <div className="navbar-brand">
          <Link to="/" className="navbar-font nav-nav fw-bold mt-4 fs-2">
            <img src={face} alt="Face" width="75" height="75" className="me-2 "/>
            Devin Broussard
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="justify-content-end collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            {routersettings.map((routerItem, index) => (
              <NavLink to={routerItem.redirect} key={index} className="navbar-font hover-color mx-2" activeClassName="active"  exact>
                <li className="nav-item text-center fs-2">
                  <span className="fw-bold">0{index + 1} </span>
                  {routerItem.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>

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
