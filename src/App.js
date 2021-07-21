import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">devin broussard</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class='navbar-nav'>
              <a class="nav-link active" aria-current="page" href="#">home</a>
              <a class="nav-link" href='#'>about</a>
              <a class="nav-link" href='#'>experience</a>   
              <a class='nav-link' href='#'>work</a>  
              <a class='nav-link' href='#'>contact me</a>  
            </div>
          </div>   
        </div>
      </nav>
    </div>
  );
}

export default App;
