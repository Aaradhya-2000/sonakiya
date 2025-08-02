import React from "react";
import Navbar from "./Components/navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", width: "100%" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
