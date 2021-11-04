import React, { Component,Suspense, useState, useEffect} from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import routersettings from "../static/router-settings";
import face from "../data/face.png";

//Navbar component
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-xxl navbar-custom navbar-nav fluid-container navbar-background">
        <div className="navbar-brand ms-sm-3">
          {/* <Link to="/" className="navbar-font">
            <img src={face} alt="Face" width="60" height="60" className="me-2 "/>
            <span className="navbar-font">Devin Broussard</span>
          </Link> */}
        </div>
        <button class="navbar-toggler me-sm-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end align-items-end me-sm-3" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <ul className="navbar-nav">
             <div class="offcanvas-header">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
            {routersettings.map((routerItem, index) => (
              <NavLink to={routerItem.redirect} key={index} className="navbar-font hover-color mx-2" activeClassName="active"  exact>
                <li className="text-center navbar-font">
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
