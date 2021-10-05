import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";


class Nav extends Component {
 constructor(props) {
 super(props);
 this.toggleNavbar = this.toggleNavbar.bind(this);
 this.state = {
 collapsed: true,
 };
 }
 toggleNavbar() {
 this.setState({
 collapsed: !this.state.collapsed,
 });
 }
 render() {
 const collapsed = this.state.collapsed;
 const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
 const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
 return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
    <div className="container">
    <a className="navbar-brand" href="#">Rate My Neighborhood</a>
    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
    </button>
    <div className={`${classOne}`} id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item active">
    <button className="nav-link" to="/">Home</button>
    </li>
    <li className="nav-item">
    <button className="nav-link" to="/about">About</button>
    </li>
    </ul>
    </div>
    </div>
    </nav>
 );
 }
 }

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
