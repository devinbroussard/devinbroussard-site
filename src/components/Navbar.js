import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import '../styles/Navbar.css';
import routersettings from '../static/router-settings';
import face from '../data/face.png';

function Navbar() {
  const listItems = routersettings.map((routerItem) =>
  <Link to={routerItem.redirect} class="nav-link"><button class="button navbar-font mx-1 hover-color">{routerItem.name}</button></Link>
  );
  return (
    <Router>
      <nav class="navbar-expand navbar-custom">
        <div class="fluid-container">
          <div class="d-flex navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class='navbar-brand'>
              <a class='navbar-font nav-nav fw-bold' ><img src={face} alt='Face' width="60" height='60' class=''/>Devin Broussard</a>
            </div>
            <div class="navbar-nav navbar-font">
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