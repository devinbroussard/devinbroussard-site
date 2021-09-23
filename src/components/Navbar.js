import React, { Suspense } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import routersettings from "../static/router-settings";
import face from "../data/face.png";

//Navbar component
function Navbar() {
  return (
    <div>
      <div className="header-background"/>
      <nav className="navbar navbar-expand-xl navbar-custom navbar-nav container-sm">
        <div className="navbar-brand">
          <Link to="/" className="navbar-font nav-nav fw-bold mt-4">
            <img src={face} alt="Face" width="75" height="75" className="me-2 "/>
            Devin Broussard
          </Link>
        </div>
        <button class="navbar-toggler" type="button"
         data-toggle="collapse" data-bs-target="#navbarNav" 
         aria-controls="#navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
          Menu
        </button>
        <div className="navbar-nav justify-content-end collapse navbar-collapse" id="navbarNav">
          {routersettings.map((routerItem, index) => (
            <NavLink to={routerItem.redirect} key={index} className="nav-link navbar-font hover-color" activeClassName="active" exact>
                <span className="fw-bold">0{index + 1} </span>
                {routerItem.name}
            </NavLink>
          ))}
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
