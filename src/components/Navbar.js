import React from "react";
import "materialize-css/dist/css/materialize.min.css";

function Navbar() {
  return (
    <nav className="transparent">
      <div className="container">
        <a href="#" className="brand-logo yellow-text lighten-2">
          Semira Design
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Designs</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <a href="#" data-target="mobile-links" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
      <ul id="mobile-links" className="sidenav">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Designs</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
