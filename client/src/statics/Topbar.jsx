import React from "react";
import Header from "./Header";
import NavbarToggler from "./NavbarToggler";

const Topbar = ({ navToggle, setNavToggle }) => {
  return (
    <>
      <NavbarToggler navToggle={navToggle} setNavToggle={setNavToggle} />
      <Header />
    </>
  );
};

export default Topbar;
