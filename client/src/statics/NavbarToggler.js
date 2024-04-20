import React from "react";

const NavbarToggler = () => {
  return (
    <>
      <div className="nav-header">
        <a href="index.html" className="brand-logo">
          <img className="logo-abbr" src="Omah/images/logo.png" alt="/" />
          <img
            className="logo-compact"
            src="Omah/images/logo-text.png"
            alt="/"
          />
          <img
            className="brand-title"
            src="Omah/images/logo-text.png"
            alt="/"
          />
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
