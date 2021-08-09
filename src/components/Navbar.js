import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import '../styles/Navbar.css';
import routersettings from '../static/router-settings';

function Navbar() {
  const listItems = routersettings.map((routerItem) =>
  <Link to={routerItem.redirect} class="nav-link px-5 mx-5">{routerItem.name}</Link>
  );
  return (
    <Router>
      <nav class="navbar-expand navbar-dark navbar-custom">
        <div class="container-fluid">
          <div class="d-flex justify-content-center navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav navbar-font fs-5">
              {listItems}
            </div>
          </div>
        </div>
      </nav>

      <Switch>

      </Switch>
    </Router>
  )
}

export default Navbar;