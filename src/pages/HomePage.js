import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Pages.css';

class HomePage extends React.Component {
  render() {
    return (
      <div class='background font'>
        <h1 class='header fw-lighter d-flex justify-content-center'></h1>
        <h2 class='subheader fw-lighter d-flex justify-content-center'></h2>
      </div>
    )
  }
}

export default HomePage;