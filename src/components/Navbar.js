import React, { Component } from 'react';
import '../styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand navbar-dark navbar-custom">
          <div class="container-fluid">
            <a class="justify-content-end navbar-brand fw-light navbar-font" href="#"></a>
            <div class="d-flex justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav navbar-font fs-3">
                <button class='menu-button-wrapper fw-light'><a class="nav-link px-5" aria-current="page" href="about">about</a></button>
                <button class='menu-button-wrapper fw-light'><a class="nav-link px-5" href='experience'>experience</a></button>
                <button class='menu-button-wrapper fw-light'><a class="nav-link active px-5" href='home'>home</a></button>  
                <button class='menu-button-wrapper fw-light'><a class='nav-link px-5' href='work'>work</a></button>  
                <button class='menu-button-wrapper fw-light'><a class='nav-link px-5' href='contact'>contact me</a></button>  
              </div>
            </div>   
          </div>
        </nav>
      </div>
    );
  } 
}

export default Navbar;