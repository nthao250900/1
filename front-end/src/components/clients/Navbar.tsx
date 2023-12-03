import React from "react";
import { StyleNavbar } from "./NavbarStyle";
import Header from "./headerComponents/Header";
import Navbar from "./headerComponents/Navbar";

const NavbarClient = () => {
  return (
    <StyleNavbar>
      <Header />
      <Navbar />
    </StyleNavbar>
  );
};

export default NavbarClient;
