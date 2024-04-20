import React from "react";

const NavbarToggler = () => {
  return (
    <>
      <div className="nav-header">
        <a href="index.html" className="brand-logo">
          <img
            className="logo-abbr"
            src="https://i.pinimg.com/originals/27/86/ae/2786ae70c40b19ba4350d218c292ce22.jpg"
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
