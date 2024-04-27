import React from "react";
import logo from "../assets/img/logo.png";
const NavbarToggler = () => {
  return (
    <>
      <div className="nav-header">
        <a href="/" className="brand-logo">
          <img className="logo-abbr" src={logo} alt="logo" />
        </a>

        <div className="nav-control navbar-toggler">
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarToggler;
