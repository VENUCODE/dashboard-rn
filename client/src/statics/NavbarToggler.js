import React from "react";
import logo from "../assets/img/logo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { MdMenuOpen } from "react-icons/md";
const NavbarToggler = ({ navToggle, setNavToggle }) => {
  return (
    <>
      <div className="nav-header">
        <a href="/" className="brand-logo">
          <img className="logo-abbr" src={logo} alt="logo" />
        </a>

        <div
          className="nav-control navbar-toggler c-pointer "
          onClick={() => setNavToggle((p) => !p)}
        >
          {!navToggle ? (
            <RiMenu4Fill size={25} color="#E35A60" />
          ) : (
            <MdMenuOpen size={25} color="#E35A60" />
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarToggler;
