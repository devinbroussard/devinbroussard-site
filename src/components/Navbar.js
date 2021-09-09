import React, { useState, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/Navbar.css";
import routersettings from "../static/router-settings";
import face from "../data/face.png";

//Navbar component
function Navbar() {
  //What I need:
  //path, redirect, and active class
  //I need a function that gets the current path and matches it with a redirect from one of the routerItems
  //Then, I need to set that matched routerItem as active with the active class
  //Dynamic classes

  //Declare a new state variable, which we'll call "routerSettingsState"
  const [routerSettingsState, changeState] = useState([]);
  var activeClass = "null";
  const currentPath = window.location.pathname;
  
  useEffect(() => {

    const initialState = routersettings.map((routerItem) => {
      if (routerItem.redirect === currentPath) {
        routerItem.isActive = true;
      }
      if (routerItem.isActive = true) {
        activeClass = "active";
      }
    });
    changeState(initialState);
  }, [routersettings]);


  //List created by looping through the data from router-settings and creating links
  const routerLinks = routersettings.map((routerItem, index) => {

    //Function that changes the routerSettingsState to "active" if the routerItem's redirect matches the path
    function CheckActive() {
      if (routerItem.redirect === currentPath) {
        routerItem.isActive = true;
      }
      if (routerItem.isActive === true) {
        changeState("active");
      }
    }

    return (
      <Link to={routerItem.redirect} key={index} className="nav-link">
        <button
          className={`button navbar-font hover-color ${activeClass}`}
          id={index}
        >
          <span className="fw-bold">0{index + 1} </span>
          {routerItem.name}
        </button>
      </Link>
    );
  });

  //List created by looping through the data from router-settings that gives the page route and component
  const routerRoutes = routersettings.map((routerItem, index) => (
    <Route key={index} exact path={routerItem.redirect}>
      <routerItem.component />
    </Route>
  ));

  return (
    <Router>
      <div className="header-background"/>
      <div className="navbar-expand navbar-custom row navbar-nav container-custom position-absolute">
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
        <div className="navbar-nav col-6 justify-content-end">
          {routerLinks}
        </div>
      </div>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>{routerRoutes}</Suspense>
      </Switch>
    </Router>
  );
}

export default Navbar;
