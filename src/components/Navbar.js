import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "../styles/Navbar.css";
import routersettings from "../static/router-settings";
import face from "../data/face.png";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

function Navbar() {
  function usePageViews() {
    let location = useLocation();
    React.useEffect(() => {
      GainNode.send(["pageview", location.pathname]);
    }, [location]);
  }

  const listItems = routersettings.map((routerItem, index) => (
    <Link to={routerItem.redirect} key={index} className="nav-link">
      <button className={routerItem.className}>
        <span className="fw-bold">0{index + 1} </span>
        {routerItem.name}
      </button>
    </Link>
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
        <div className="navbar-nav col-6">{listItems}</div>
      </div>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
