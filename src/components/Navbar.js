import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/Navbar.css";
import routersettings from "../static/router-settings";
import face from "../data/face.png";

//Navbar component
function Navbar() {
  const buttons = document.getElementsByClassName("button");
  const active = document.getElementsByClassName("active");

  function MakeActive() {
    for (var i = 0, length = buttons.length; i < length; i++) {
      if (buttons[i] === active) active.classList.remove("active");
    }
  }

  const routerLinks = routersettings.map((routerItem, index) => (
    <Link to={routerItem.redirect} key={index} className="nav-link">
      <button
        className="button navbar-font hover-color"
        onClick={MakeActive}
        id={index}
      >
        <span className="fw-bold">0{index + 1} </span>
        {routerItem.name}
      </button>
    </Link>
  ));

  const routerRoutes = routersettings.map((routerItem, index) => (
    <Route
      key={index}
      exact
      path={routerItem.redirect}
      component={routerItem.linkTo}
    ></Route>
  ));

  return (
    <Router>
      <div className="navbar-expand navbar-custom row navbar-nav">
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
        <div className="navbar-nav col-6 flex-row-reverse">{routerLinks}</div>
      </div>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>{routerRoutes}</Suspense>
      </Switch>
    </Router>
  );
}

export default Navbar;
