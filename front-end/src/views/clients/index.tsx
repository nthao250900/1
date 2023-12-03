import Footer from "components/clients/Footer";
import NavbarClient from "components/clients/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const ClientView = () => {
  return (
    <>
      <NavbarClient />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientView;
