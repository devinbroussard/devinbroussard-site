import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Pages.css';

class HomePage extends React.Component {
  render() {
    return (
      <body class='background'>
        <Navbar />
        <div>
          <h1 class='text-center'>devin broussard</h1>
        </div>
      </body>
    )
  }
}

export default HomePage;