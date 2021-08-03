import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (

    <Router>
      <nav class="navbar navbar-expand navbar-dark navbar-custom">
        <div class="container-fluid">
          <div class="d-flex justify-content-center navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav navbar-font fs-3">
              <button class='menu-button-wrapper fw-light'><Link to='/about' class="nav-link px-5">about</Link></button>
              <button class='menu-button-wrapper fw-light'><Link to='/experience' class="nav-link px-5">experience</Link></button>
              <button class='menu-button-wrapper fw-light'><Link to='/' class="nav-link active px-5">home</Link></button>  
              <button class='menu-button-wrapper fw-light'><Link to='/work' class='nav-link px-5'>work</Link></button>  
              <button class='menu-button-wrapper fw-light'><Link to='/contact' class='nav-link px-5'>contact me</Link></button>
              <button class='menu-button-wrapper fw-light'><Link to='/resume' class='nav-link px-5'>resume</Link></button>  
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