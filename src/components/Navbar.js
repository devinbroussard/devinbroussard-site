import React, { Suspense, useState, useEffect} from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import routersettings from "../static/router-settings";
import face from "../data/face.png";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

//Navbar component
function Navbar() {

  const [show, setShow] = useState(false);
  const handleNavClick = () => {
    setShow(false);
  };
  return (
    <div>
      <div className="header-background"/>
      <nav className="navbar navbar-light navbar-expand-lg navbar-custom navbar-nav container-sm">
        <div className="navbar-brand">
          <Link to="/" className="navbar-font nav-nav fw-bold mt-4">
            <img src={face} alt="Face" width="75" height="75" className="me-2 "/>
            Devin Broussard
          </Link>
        </div>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav justify-content-end" id="#navbarNav">
          {routersettings.map((routerItem, index) => (
            <NavLink to={routerItem.redirect} key={index} className="navbar-font hover-color mx-2" activeClassName="active"  exact>
                <span className="fw-bold">0{index + 1} </span>
                {routerItem.name}
            </NavLink>
          ))}
        </div>
      </nav>



      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          {routersettings.map((routerItem, index) => (
            <Route key={index} exact path={routerItem.redirect}>
              < routerItem.component />
            </Route>
          ))}
        </Suspense>
          
      </Switch>
    </div>
  );
}

export default Navbar;
